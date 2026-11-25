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
import { trophyManager } from './components/trophyManager';
import { AppSettings, XmbCategory, XmbSubItem } from './types';

const THEME_SWATCHES: Record<string, { label: string; color: string }> = {
  obsidian: { label: 'Obsidian', color: '#8fa3bf' },
  ruby: { label: 'Ruby', color: '#e11d48' },
  cobalt: { label: 'Cobalt', color: '#38bdf8' },
  emerald: { label: 'Emerald', color: '#10b981' },
  amber: { label: 'Royal Gold', color: '#f59e0b' },
  violet: { label: 'Violet', color: '#a855f7' },
  monthly: { label: 'Monthly', color: '#f472b6' },
};

const FONT_LABELS: Record<string, string> = {
  rajdhani: 'Rajdhani',
  rodin: 'Rodin Clean',
  inter: 'Inter Crisp',
  exo: 'Exo 2',
};

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
  private hudEnterLabelEl: HTMLElement | null = null;

  constructor() {
    this.initDOM();
    this.initEngines();
    this.renderHorizontalBar();
    this.renderVerticalColumn();
    this.updateFooterHint();
    this.initInput();
    this.bindHudShortcuts();

    trophyManager.trackCategoryVisit(this.currentCategory().id, XMB_CATEGORIES.length);
    trophyManager.subscribe(() => {
      if (this.currentCategory().id === 'profile') {
        this.renderVerticalColumn();
      }
    });

    window.addEventListener('resize', () => {
      this.updateCategoryPositions();
      this.updateVerticalPositions();
    });
  }

  private initDOM() {
    this.horizontalBarEl = document.getElementById('horizontal-bar') as HTMLElement;
    this.verticalColumnEl = document.getElementById('vertical-column') as HTMLElement;
    this.hudEnterLabelEl = document.getElementById('hud-enter-label');
  }

  private bindHudShortcuts() {
    const profileBtn = document.getElementById('hud-profile-btn');
    const contactBtn = document.getElementById('hud-contact-btn');

    profileBtn?.addEventListener('click', () => {
      const idx = XMB_CATEGORIES.findIndex((c) => c.id === 'profile');
      if (idx >= 0) this.setCategory(idx);
    });

    contactBtn?.addEventListener('click', () => {
      const idx = XMB_CATEGORIES.findIndex((c) => c.id === 'contact');
      if (idx >= 0) this.setCategory(idx);
    });
  }

  private initEngines() {
    const waveCanvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    this.waveEngine = new WaveEngine(waveCanvas);

    const particleCanvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    this.particleField = new ParticleField(particleCanvas);

    this.hudHeader = new HudHeader();

    // Boot sequence
    this.bootSequence = new BootSequence(() => {
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

      document.body.className = `theme-${settings.theme} font-${settings.fontPreset}`;

      // Keep live Settings value pills synced in place
      if (this.currentCategory().id === 'settings') {
        this.renderVerticalColumn();
      }
    });

    // Initial environment settings
    const settings = appState.getSettings();
    this.waveEngine.setSpeed(settings.waveSpeed);
    this.particleField.setEnabled(settings.particlesEnabled);
    sound.setMuted(!settings.soundEnabled);
    sound.setVolume(settings.masterVolume);
    document.body.className = `theme-${settings.theme} font-${settings.fontPreset}`;
  }

  private syncThemeWithAppState() {
    const settings = appState.getSettings();
    this.waveEngine.setTheme(settings.theme);
    this.waveEngine.setSpeed(settings.waveSpeed);
    this.particleField.setEnabled(settings.particlesEnabled);
    sound.setMuted(!settings.soundEnabled);
    sound.setVolume(settings.masterVolume);
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
        toast.show('System Reboot', 'Restarting System...', 'info', 'reboot');
        setTimeout(() => {
          this.hudHeader.showWelcome(false);
          this.waveEngine.setTheme('obsidian');
          this.bootSequence.restart();
        }, 600);
        break;

      case 'copy':
        if (action.payload) {
          this.copyToClipboard(action.payload);
        }
        break;

      case 'download': {
        toast.show('Save Data Utility', 'Downloading Ashvin_Kethiswaran_Resume.pdf', 'info', 'resume');
        trophyManager.unlock('save-data');
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
          toast.show('Opening Link', item.subtitle || item.title, 'info', `link-${item.id}`);
          if (this.currentCategory().id === 'contact') {
            trophyManager.unlock('new-connection');
          }
          window.open(action.payload, '_blank', 'noopener,noreferrer');
        }
        break;
    }
  }

  private copyToClipboard(text: string) {
    const onSuccess = () => {
      toast.show('Clipboard Utility', `Copied: ${text}`, 'check', 'clipboard');
      trophyManager.unlock('new-connection');
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(onSuccess)
        .catch(() => this.fallbackCopy(text, onSuccess));
    } else {
      this.fallbackCopy(text, onSuccess);
    }
  }

  private fallbackCopy(text: string, onSuccess: () => void) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      onSuccess();
    } catch {
      toast.show('Clipboard Utility', `Email: ${text}`, 'info', 'clipboard');
    }
  }

  private handleSettingAction(settingKey: string) {
    switch (settingKey) {
      case 'theme-picker': {
        const next = appState.cycleTheme();
        const names: Record<string, string> = {
          ruby: 'Ruby Crimson',
          obsidian: 'Midnight Obsidian',
          cobalt: 'PlayStation Cobalt',
          emerald: 'Aurora Emerald',
          amber: 'Royal Gold',
          violet: 'Regal Violet',
          monthly: 'Dynamic Monthly Color',
        };
        toast.show('Theme Settings', `Background: ${names[next] || next}`, 'info', 'setting-theme');
        trophyManager.unlock('wave-alchemist');
        break;
      }
      case 'font-picker': {
        const nextFont = appState.cycleFontPreset();
        const fontNames: Record<string, string> = {
          rodin: 'PS3 Rodin Clean (Plus Jakarta Sans)',
          inter: 'High-Contrast Crisp (Inter)',
          exo: 'Console Geometric (Exo 2)',
          rajdhani: 'Classic Tech (Rajdhani)',
        };
        toast.show('Typography Settings', `Font: ${fontNames[nextFont] || nextFont}`, 'info', 'setting-font');
        trophyManager.unlock('wave-alchemist');
        break;
      }
      case 'wave-speed-toggle': {
        const nextSpeed = appState.cycleWaveSpeed();
        toast.show('Display Settings', `Wave Speed: ${nextSpeed.toUpperCase()}`, 'info', 'setting-speed');
        break;
      }
      case 'particle-toggle': {
        const active = appState.toggleParticles();
        toast.show('Display Settings', `Ambient Particles: ${active ? 'ON' : 'OFF'}`, 'info', 'setting-particles');
        break;
      }
      case 'sound-toggle': {
        const { enabled, volume } = appState.cycleVolume();
        const label = enabled ? `${Math.round(volume * 100)}%` : 'MUTED';
        toast.show('Audio Utility', `Sound Volume: ${label}`, 'info', 'setting-sound');
        break;
      }
      case 'clock-toggle': {
        const is24h = appState.toggleClockFormat();
        toast.show('Date & Time Utility', `Clock: ${is24h ? '24-HOUR' : '12-HOUR (AM/PM)'}`, 'info', 'setting-clock');
        break;
      }
      default:
        toast.show('System Settings', 'Option updated', 'check', 'setting-generic');
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

  // --- Helper: Live Settings Badge HTML ---
  private getSettingValueHtml(item: XmbSubItem, settings: AppSettings): string {
    if (item.action.type !== 'setting') return '';
    switch (item.action.payload) {
      case 'theme-picker': {
        const info = THEME_SWATCHES[settings.theme] || THEME_SWATCHES.obsidian;
        return `<span class="row-setting-value"><span class="setting-swatch" style="background:${info.color}"></span>${info.label}</span>`;
      }
      case 'font-picker':
        return `<span class="row-setting-value">${FONT_LABELS[settings.fontPreset] || settings.fontPreset}</span>`;
      case 'wave-speed-toggle':
        return `<span class="row-setting-value">${settings.waveSpeed.toUpperCase()}</span>`;
      case 'particle-toggle':
        return `<span class="row-setting-value">${settings.particlesEnabled ? 'ON' : 'OFF'}</span>`;
      case 'sound-toggle':
        return `<span class="row-setting-value">${settings.soundEnabled ? `${Math.round(settings.masterVolume * 100)}%` : 'MUTED'}</span>`;
      case 'clock-toggle':
        return `<span class="row-setting-value">${settings.clock24Hour ? '24H' : '12H'}</span>`;
      default:
        return '';
    }
  }

  // --- Helper: Context-Aware Footer Action Hint ---
  private updateFooterHint() {
    if (!this.hudEnterLabelEl) return;
    const item = this.currentItem();
    if (!item) return;

    switch (item.action.type) {
      case 'copy':
        this.hudEnterLabelEl.textContent = 'Copy Email';
        break;
      case 'link':
        this.hudEnterLabelEl.textContent = 'Open Link';
        break;
      case 'download':
        this.hudEnterLabelEl.textContent = 'Download PDF';
        break;
      case 'setting':
        this.hudEnterLabelEl.textContent = 'Cycle Option';
        break;
      case 'reboot':
        this.hudEnterLabelEl.textContent = 'Restart';
        break;
      case 'modal':
        this.hudEnterLabelEl.textContent = item.id === 'contact-message' ? 'Compose' : 'Open Details';
        break;
      default:
        this.hudEnterLabelEl.textContent = 'Select';
        break;
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

    // Match classic PS3 XMB proportions: active rail at ~29vw from the left,
    // spreading remaining categories smoothly across the right ~65% of the viewport.
    const availableRight = Math.max(360, viewportWidth * 0.65);
    const itemSpacing = Math.max(110, Math.min(188, Math.floor(availableRight / maxSteps)));

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
    const cat = this.currentCategory();
    const items = cat.items;
    const settings = appState.getSettings();
    const showMiniTags = ['projects', 'experience', 'skills'].includes(cat.id);

    items.forEach((item, index) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'xmb-sub-row';
      rowEl.dataset.index = String(index);

      const settingValHtml = this.getSettingValueHtml(item, settings);
      const isTrophyRow = item.id === 'profile-trophies';
      const dynamicBadge = isTrophyRow
        ? `${trophyManager.getUnlockedCount()} / ${trophyManager.getTotalCount()}`
        : item.badge;
      const dynamicSubtitle = isTrophyRow
        ? `${trophyManager.getUnlockedCount()} / ${trophyManager.getTotalCount()} Trophies Unlocked (${trophyManager.getProgressPercent()}%)`
        : item.subtitle;

      const isLiveBadge = dynamicBadge?.toLowerCase() === 'live demo';
      const badgeHtml = settingValHtml
        ? settingValHtml
        : dynamicBadge
        ? `<span class="row-badge${isLiveBadge ? ' badge-live' : ''}">${dynamicBadge}</span>`
        : '';

      const hasLogo = Boolean(item.image);
      const isEmblem = !hasLogo && Boolean(item.iconSvg && item.iconSvg.includes('viewBox="0 0 48 48"'));
      const imgStyle = item.imageScale ? ` style="transform: scale(${item.imageScale});"` : '';
      const iconContent = hasLogo
        ? `<img src="${item.image}" alt="${item.title} logo" class="row-logo-img"${imgStyle} />`
        : (item.iconSvg || SVG_FALLBACK);
      const iconBoxClass = hasLogo ? 'row-icon-box has-logo' : isEmblem ? 'row-icon-box is-emblem' : 'row-icon-box';

      const miniTagsHtml =
        showMiniTags && item.tags && item.tags.length > 0
          ? `<div class="row-mini-tags">${item.tags
              .slice(0, 4)
              .map((t) => `<span class="row-mini-chip">${t}</span>`)
              .join('')}</div>`
          : '';

      rowEl.innerHTML = `
        <div class="${iconBoxClass}">${iconContent}</div>
        <div class="row-text-content">
          <div class="row-title-line">
            <span class="row-title">${item.title}</span>
            ${badgeHtml}
          </div>
          ${dynamicSubtitle ? `<span class="row-subtitle">${dynamicSubtitle}</span>` : ''}
          ${miniTagsHtml}
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
    // Position previous items cleanly ABOVE the 15vh horizontal category bar
    const aboveBarGap = Math.max(215, Math.round(window.innerHeight * 0.21) + 56);
    const hasExtraRowContent = ['projects', 'experience', 'skills'].includes(this.currentCategory().id);
    const firstBelowGap = hasExtraRowContent ? 128 : 108;

    rows.forEach((el, index) => {
      const diff = index - this.selectedItemIndex;

      if (diff === 0) {
        // Selected focal item: anchored comfortably below the horizontal category bar
        el.style.transform = `translateY(0px)`;
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        el.classList.add('selected');
      } else if (diff > 0) {
        // Items BELOW the selected item (airy PS3 spacing)
        const yOffset = firstBelowGap + (diff - 1) * 70;
        el.style.transform = `translateY(${yOffset}px)`;
        const opacity = Math.max(0.24, 0.62 - (diff - 1) * 0.12);
        el.style.opacity = String(opacity);
        el.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
        el.classList.remove('selected');
      } else {
        // Items ABOVE the selected item:
        // Positioned cleanly ABOVE the horizontal category bar
        const k = -diff; // 1, 2, 3...
        const yOffset = -aboveBarGap - (k - 1) * 58;
        el.style.transform = `translateY(${yOffset}px)`;
        const opacity = Math.max(0.22, 0.58 - (k - 1) * 0.15);
        el.style.opacity = String(opacity);
        el.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
        el.classList.remove('selected');
      }
    });
  }

  private updateXmbDisplay() {
    this.updateCategoryPositions();
    this.renderVerticalColumn();
    this.updateFooterHint();
    trophyManager.trackCategoryVisit(this.currentCategory().id, XMB_CATEGORIES.length);
  }

  private updateVerticalSelection() {
    this.updateVerticalPositions();
    this.updateFooterHint();
  }
}

const SVG_FALLBACK = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`;

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new XMBApplication();
});
