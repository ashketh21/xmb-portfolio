import { AppSettings, FontPreset, ThemePreset } from '../types';

const STORAGE_KEY = 'ak_xmb_settings_v2';

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'obsidian',
  fontPreset: 'rajdhani',
  waveSpeed: 'normal',
  waveSharpness: 1.0,
  particlesEnabled: true,
  soundEnabled: true,
  masterVolume: 0.85,
  clock24Hour: false,
};

type Listener = (settings: AppSettings) => void;

class StateManager {
  private settings: AppSettings;
  private listeners: Set<Listener> = new Set();

  constructor() {
    this.settings = this.load();
  }

  private load(): AppSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
      }
    } catch (e) {
      console.warn('Failed to load settings from localStorage', e);
    }
    return { ...DEFAULT_SETTINGS };
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Failed to save settings to localStorage', e);
    }
  }

  public getSettings(): AppSettings {
    return { ...this.settings };
  }

  public update(partial: Partial<AppSettings>) {
    this.settings = { ...this.settings, ...partial };
    this.save();
    this.notify();
  }

  public cycleTheme(): ThemePreset {
    const themes: ThemePreset[] = ['ruby', 'obsidian', 'cobalt', 'emerald', 'amber', 'violet', 'monthly'];
    const idx = themes.indexOf(this.settings.theme);
    const nextTheme = themes[(idx + 1) % themes.length];
    this.update({ theme: nextTheme });
    return nextTheme;
  }

  public cycleFontPreset(): FontPreset {
    const fonts: FontPreset[] = ['rodin', 'inter', 'exo', 'rajdhani'];
    const idx = fonts.indexOf(this.settings.fontPreset);
    const nextFont = fonts[(idx + 1) % fonts.length];
    this.update({ fontPreset: nextFont });
    return nextFont;
  }

  public cycleWaveSpeed(): 'slow' | 'normal' | 'fast' {
    const speeds: ('slow' | 'normal' | 'fast')[] = ['slow', 'normal', 'fast'];
    const idx = speeds.indexOf(this.settings.waveSpeed);
    const nextSpeed = speeds[(idx + 1) % speeds.length];
    this.update({ waveSpeed: nextSpeed });
    return nextSpeed;
  }

  public toggleParticles(): boolean {
    const next = !this.settings.particlesEnabled;
    this.update({ particlesEnabled: next });
    return next;
  }

  public toggleSound(): boolean {
    const next = !this.settings.soundEnabled;
    this.update({ soundEnabled: next });
    return next;
  }

  public toggleClockFormat(): boolean {
    const next = !this.settings.clock24Hour;
    this.update({ clock24Hour: next });
    return next;
  }

  public subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.getSettings()));
  }
}

export const appState = new StateManager();
