import { sound } from './audio/soundEngine';
import { WaveEngine } from './background/waveEngine';
import { ParticleField } from './background/particleField';
import { XMB_CATEGORIES } from './data/portfolioData';
import { appState } from './state/themeState';
import { detailsModal } from './components/detailsModal';
import { toast } from './components/notificationToast';
import { BootSequence } from './components/bootSequence';
import { HudHeader } from './components/hudHeader';
import { InputManager } from './input/inputManager';
import { XmbCategory, XmbSubItem } from './types';

class XMBApplication {
  private waveEngine!: WaveEngine;
  private particleField!: ParticleField;
  private bootSequence!: BootSequence;
  private hudHeader!: HudHeader;

  // Navigation state
  private selectedCategoryIndex = 1; // Starts at Profile
  private selectedItemIndex = 0;

  // DOM Elements
  private horizontalBarEl!: HTMLElement;
  private verticalColumnEl!: HTMLElement;

  constructor() {
    this.initDOM();
    this.initEngines();
    this.renderHorizontalBar();
    this.renderVerticalColumn();
    this.initInput();

    window.addEventListener('resize', () => {
      this.updateCategoryPositions();
      this.updateVerticalPositions();
    });
  }

  private initDOM() {
    this.horizontalBarEl = document.getElementById('horizontal-bar') as HTMLElement;
    this.verticalColumnEl = document.getElementById('vertical-column') as HTMLElement;
  }

  private initEngines() {
    const waveCanvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    this.waveEngine = new WaveEngine(waveCanvas);

    const particleCanvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    this.particleField = new ParticleField(particleCanvas);

    this.hudHeader = new HudHeader();

    // Boot sequence
    this.bootSequence = new BootSequence(() => {
      // Called when boot sequence completes
      this.syncThemeWithAppState();
      this.hudHeader.showWelcome(true);
    });

    // Listen to state changes
    appState.subscribe((settings) => {
      this.waveEngine.setTheme(settings.theme);
      this.waveEngine.setSpeed(settings.waveSpeed);
      this.particleField.setEnabled(settings.particlesEnabled);
      sound.setMuted(!settings.soundEnabled);
      sound.setVolume(settings.masterVolume);

      // Body theme & font preset classes
      document.body.className = `theme-${settings.theme} font-${settings.fontPreset}`;
    });

    // Initial environment settings (wave retains startup violet until boot completes)
    const settings = appState.getSettings();
    this.waveEngine.setSpeed(settings.waveSpeed);
    this.particleField.setEnabled(settings.particlesEnabled);
    sound.setMuted(!settings.soundEnabled);
    document.body.className = `theme-${settings.theme} font-${settings.fontPreset}`;
  }

  private syncThemeWithAppState() {
    const settings = appState.getSettings();
    this.waveEngine.setTheme(settings.theme);
    this.waveEngine.setSpeed(settings.waveSpeed);
    this.particleField.setEnabled(settings.particlesEnabled);
    sound.setMuted(!settings.soundEnabled);
    document.body.className = `theme-${settings.theme} font-${settings.fontPreset}`;
  }

  private initInput() {
    new InputManager({
      isActive: () => this.bootSequence.getIsBooted(),
      onNextCategory: () => this.nextCategory(),
      onPrevCategory: () => this.prevCategory(),
      onNextItem: () => this.nextItem(),
      onPrevItem: () => this.prevItem(),
      onSelect: () => this.selectCurrentItem(),
      onBack: () => this.handleBack(),
      onOptions: () => this.handleOptions(),
    });
  }

  private currentCategory(): XmbCategory {
    return XMB_CATEGORIES[this.selectedCategoryIndex];
  }

  private currentItem(): XmbSubItem | undefined {
    return this.currentCategory().items[this.selectedItemIndex];
  }

  // --- Category Navigation ---
  public nextCategory() {
    if (detailsModal.getIsOpen()) return;
    this.selectedCategoryIndex = (this.selectedCategoryIndex + 1) % XMB_CATEGORIES.length;
    this.selectedItemIndex = 0;
    sound.playNav();
    this.updateXmbDisplay();
  }

  public prevCategory() {
    if (detailsModal.getIsOpen()) return;
    this.selectedCategoryIndex = (this.selectedCategoryIndex - 1 + XMB_CATEGORIES.length) % XMB_CATEGORIES.length;
    this.selectedItemIndex = 0;
    sound.playNav();
    this.updateXmbDisplay();
  }

  public setCategory(index: number) {
    if (detailsModal.getIsOpen()) return;
    if (index === this.selectedCategoryIndex) return;
    this.selectedCategoryIndex = index;
    this.selectedItemIndex = 0;
    sound.playNav();
    this.updateXmbDisplay();
  }

  // --- Sub-Item Navigation ---
  public nextItem() {
    if (detailsModal.getIsOpen()) return;
    const items = this.currentCategory().items;
    if (items.length <= 1) return;
    this.selectedItemIndex = (this.selectedItemIndex + 1) % items.length;
    sound.playNav();
    this.updateVerticalSelection();
  }

  public prevItem() {
    if (detailsModal.getIsOpen()) return;
    const items = this.currentCategory().items;
    if (items.length <= 1) return;
    this.selectedItemIndex = (this.selectedItemIndex - 1 + items.length) % items.length;
    sound.playNav();
    this.updateVerticalSelection();
  }

  public setItem(index: number) {
    if (detailsModal.getIsOpen()) return;
    if (index === this.selectedItemIndex) {
      this.selectCurrentItem();
      return;
    }
    this.selectedItemIndex = index;
    sound.playNav();
    this.updateVerticalSelection();
  }

  // --- Actions ---
  public selectCurrentItem() {
    if (detailsModal.getIsOpen()) return;
    const item = this.currentItem();
    if (!item) return;

    const action = item.action;
    switch (action.type) {
      case 'modal':
        detailsModal.open(item, this.currentCategory().label);
        break;

      case 'setting':
        this.handleSettingAction(action.payload);
        break;

      case 'reboot':
        toast.show('System Reboot', 'Restarting System...', 'info');
        setTimeout(() => {
          this.hudHeader.showWelcome(false);
          this.waveEngine.setTheme('obsidian');
          this.bootSequence.restart();
        }, 600);
        break;

      case 'copy':
        if (action.payload) {
          navigator.clipboard
            .writeText(action.payload)
            .then(() => {
              toast.show('Clipboard Utility', `Copied to clipboard: ${action.payload}`, 'check');
            })
            .catch(() => {
              toast.show('Clipboard Utility', `Copy failed — email: ${action.payload}`, 'info');
            });
        }
        break;

      case 'download': {
        toast.show('Save Data Utility', 'Initiating Resume PDF download...', 'info');
        const a = document.createElement('a');
        a.href = action.payload || '#';
        a.download = 'Ashvin_Kethiswaran_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        break;
      }

      case 'link':
        if (action.payload) {
          sound.playSelect();
          window.open(action.payload, '_blank', 'noopener,noreferrer');
        }
        break;
    }
  }

  private handleSettingAction(settingKey: string) {
    switch (settingKey) {
      case 'theme-picker': {
        const next = appState.cycleTheme();
        const names: Record<string, string> = {
          ruby: 'Ruby Crimson (Original)',
          obsidian: 'Midnight Obsidian',
          cobalt: 'PlayStation Classic Cobalt',
          emerald: 'Aurora Emerald',
          amber: 'Royal Gold',
          violet: 'Regal Violet',
          monthly: 'Dynamic Monthly Color'
        };
        toast.show('Theme Settings', `Background Theme changed to: ${names[next] || next}`, 'info');
        break;
      }
      case 'font-picker': {
        const nextFont = appState.cycleFontPreset();
        const fontNames: Record<string, string> = {
          rodin: 'PS3 Rodin Clean (Plus Jakarta Sans)',
          inter: 'High-Contrast Crisp (Inter)',
          exo: 'Console Geometric (Exo 2)',
          rajdhani: 'Classic Tech (Rajdhani)'
        };
        toast.show('Typography Settings', `Display Font: ${fontNames[nextFont] || nextFont}`, 'info');
        break;
      }
      case 'wave-speed-toggle': {
        const nextSpeed = appState.cycleWaveSpeed();
        toast.show('Display Settings', `Wave Motion Speed: ${nextSpeed.toUpperCase()}`, 'info');
        break;
      }
      case 'particle-toggle': {
        const active = appState.toggleParticles();
        toast.show('Display Settings', `Ambient Particles: ${active ? 'ENABLED' : 'DISABLED'}`, 'info');
        break;
      }
      case 'sound-toggle': {
        const active = appState.toggleSound();
        toast.show('Audio Utility', `Sound Effects: ${active ? 'ENABLED' : 'MUTED'}`, 'info');
        break;
      }
      case 'clock-toggle': {
        const is24h = appState.toggleClockFormat();
        toast.show('Date & Time Utility', `Clock Display: ${is24h ? '24-HOUR' : '12-HOUR (AM/PM)'}`, 'info');
        break;
      }
      default:
        toast.show('System Settings', 'Option updated successfully', 'check');
        break;
    }
  }

  public handleBack() {
    if (detailsModal.getIsOpen()) {
      detailsModal.close();
    } else {
      sound.playBack();
    }
  }

  public handleOptions() {
    if (detailsModal.getIsOpen()) return;
    const item = this.currentItem();
    if (item) {
      detailsModal.open(item, this.currentCategory().label);
    }
  }

  // --- Rendering UI ---
  private renderHorizontalBar() {
    this.horizontalBarEl.innerHTML = '';
    XMB_CATEGORIES.forEach((cat, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'xmb-category-item';
      itemEl.dataset.index = String(index);
      itemEl.innerHTML = `
        <div class="category-icon-wrapper" aria-label="${cat.label}">
          ${cat.iconSvg}
        </div>
        <span class="category-label">${cat.label}</span>
      `;

      itemEl.addEventListener('click', () => {
        this.setCategory(index);
      });

      this.horizontalBarEl.appendChild(itemEl);
    });

    this.updateCategoryPositions();
  }

  private updateCategoryPositions() {
    const items = this.horizontalBarEl.querySelectorAll<HTMLElement>('.xmb-category-item');
    const viewportWidth = this.horizontalBarEl.clientWidth || window.innerWidth;
    const maxSteps = Math.max(1, XMB_CATEGORIES.length - 1);

    // Center the active category in the viewport while scaling spacing so every
    // category across the bar stays fully visible without clipping at the edges.
    const availableHalf = Math.max(240, viewportWidth / 2 - 78);
    const itemSpacing = Math.max(88, Math.min(132, Math.floor(availableHalf / maxSteps)));

    items.forEach((el, index) => {
      const diff = index - this.selectedCategoryIndex;
      const x = diff * itemSpacing;
      el.style.transform = `translateX(calc(-50% + ${x}px))`;

      if (diff === 0) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }

  private renderVerticalColumn() {
    this.verticalColumnEl.innerHTML = '';
    const items = this.currentCategory().items;

    items.forEach((item, index) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'xmb-sub-row';
      rowEl.dataset.index = String(index);

      const badgeHtml = item.badge ? `<span class="row-badge">${item.badge}</span>` : '';

      rowEl.innerHTML = `
        <div class="row-icon-box">${item.iconSvg || SVG_FALLBACK}</div>
        <div class="row-text-content">
          <div class="row-title-line">
            <span class="row-title">${item.title}</span>
            ${badgeHtml}
          </div>
          ${item.subtitle ? `<span class="row-subtitle">${item.subtitle}</span>` : ''}
        </div>
      `;

      rowEl.addEventListener('click', () => {
        this.setItem(index);
      });

      this.verticalColumnEl.appendChild(rowEl);
    });

    this.updateVerticalPositions();
  }

  private updateVerticalPositions() {
    const rows = this.verticalColumnEl.querySelectorAll<HTMLElement>('.xmb-sub-row');
    // Dynamically clear the horizontal category bar regardless of viewport height
    const aboveBarGap = Math.max(220, Math.round(window.innerHeight * 0.23) + 64);

    rows.forEach((el, index) => {
      const diff = index - this.selectedItemIndex;

      if (diff === 0) {
        // Selected focal item: anchored comfortably below the horizontal category bar
        el.style.transform = `translateY(0px)`;
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        el.classList.add('selected');
      } else if (diff > 0) {
        // Items BELOW the selected item (spaced downwards)
        const yOffset = 78 + (diff - 1) * 56;
        el.style.transform = `translateY(${yOffset}px)`;
        const opacity = Math.max(0.28, 0.82 - (diff - 1) * 0.14);
        el.style.opacity = String(opacity);
        el.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
        el.classList.remove('selected');
      } else {
        // Items ABOVE the selected item:
        // Positioned cleanly ABOVE the horizontal category bar
        const k = -diff; // 1, 2, 3...
        const yOffset = -aboveBarGap - (k - 1) * 54;
        el.style.transform = `translateY(${yOffset}px)`;
        const opacity = Math.max(0.24, 0.78 - (k - 1) * 0.18);
        el.style.opacity = String(opacity);
        el.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
        el.classList.remove('selected');
      }
    });
  }

  private updateXmbDisplay() {
    this.updateCategoryPositions();
    this.renderVerticalColumn();
  }

  private updateVerticalSelection() {
    this.updateVerticalPositions();
  }
}

const SVG_FALLBACK = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`;

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new XMBApplication();
});
