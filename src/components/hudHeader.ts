import { appState } from '../state/themeState';

export class HudHeader {
  private timeEl: HTMLElement | null;
  private dateEl: HTMLElement | null;
  private tickerTextEl: HTMLElement | null;
  private timerId: number | null = null;

  constructor() {
    this.timeEl = document.getElementById('hud-time');
    this.dateEl = document.getElementById('hud-date');
    this.tickerTextEl = document.getElementById('hud-ticker-text');
    this.startClock();
    appState.subscribe(() => this.updateClock());
  }

  public showWelcome(visible: boolean = true) {
    if (this.tickerTextEl) {
      if (visible) {
        this.tickerTextEl.classList.add('visible');
      } else {
        this.tickerTextEl.classList.remove('visible');
      }
    }
  }

  private startClock() {
    this.updateClock();
    this.timerId = window.setInterval(() => this.updateClock(), 1000);
  }

  private updateClock() {
    const now = new Date();
    const settings = appState.getSettings();

    // Time string
    if (this.timeEl) {
      if (settings.clock24Hour) {
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        this.timeEl.textContent = `${hh}:${mm}`;
      } else {
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
        const mm = String(now.getMinutes()).padStart(2, '0');
        this.timeEl.textContent = `${hours}:${mm} ${ampm}`;
      }
    }

    // Date string (e.g., 10/10 SAT)
    if (this.dateEl) {
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const dow = daysOfWeek[now.getDay()];
      this.dateEl.textContent = `${month}/${day} ${dow}`;
    }
  }

  public destroy() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }
}
