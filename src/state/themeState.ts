import { AppSettings, FontPreset, ThemePreset, WaveSpeed } from '../types';

const STORAGE_KEY = 'ak_xmb_settings_v2';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'obsidian',
  fontPreset: 'rajdhani',
  waveSpeed: prefersReducedMotion ? 'static' : 'normal',
  waveSharpness: 1.0,
  particlesEnabled: !prefersReducedMotion,
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

  public cycleWaveSpeed(): WaveSpeed {
    const speeds: WaveSpeed[] = ['static', 'slow', 'normal', 'fast'];
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

  public cycleVolume(): { enabled: boolean; volume: number } {
    const steps = [0, 0.35, 0.7, 1.0];
    const current = this.settings.soundEnabled ? this.settings.masterVolume : 0;
    const nearestIdx = steps.reduce((bestIdx, val, i) =>
      Math.abs(val - current) < Math.abs(steps[bestIdx] - current) ? i : bestIdx
    , 0);
    const nextVol = steps[(nearestIdx + 1) % steps.length];
    const enabled = nextVol > 0;
    this.update({
      soundEnabled: enabled,
      masterVolume: enabled ? nextVol : 0,
    });
    return { enabled, volume: nextVol };
  }

  public toggleSound(): boolean {
    const next = !this.settings.soundEnabled;
    this.update({ soundEnabled: next, masterVolume: next && this.settings.masterVolume === 0 ? 0.7 : this.settings.masterVolume });
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
