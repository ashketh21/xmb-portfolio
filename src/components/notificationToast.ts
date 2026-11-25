import { sound } from '../audio/soundEngine';

export class NotificationToast {
  private container: HTMLElement | null;
  private activeByKey: Map<string, { el: HTMLElement; dismissTimer: number }> = new Map();

  constructor() {
    this.container = document.getElementById('toast-container');
  }

  public show(
    title: string,
    message: string,
    iconType: 'trophy' | 'info' | 'check' | 'mail' = 'info',
    dedupeKey?: string
  ) {
    if (!this.container) return;

    if (iconType === 'trophy') {
      sound.playTrophy();
    } else {
      sound.playSelect();
    }

    // Replace existing toast with the same dedupeKey in place to avoid stacking
    if (dedupeKey && this.activeByKey.has(dedupeKey)) {
      const existing = this.activeByKey.get(dedupeKey)!;
      window.clearTimeout(existing.dismissTimer);
      const titleNode = existing.el.querySelector('.toast-title');
      const msgNode = existing.el.querySelector('.toast-message');
      if (titleNode) titleNode.textContent = title;
      if (msgNode) msgNode.textContent = message;
      existing.dismissTimer = this.scheduleDismiss(existing.el, dedupeKey);
      return;
    }

    const toast = document.createElement('div');
    toast.className = `ps3-toast toast-${iconType}`;

    const iconSvg = iconType === 'trophy'
      ? '🏆'
      : iconType === 'check'
      ? '✓'
      : iconType === 'mail'
      ? '✉'
      : 'ℹ';

    const iconBox = document.createElement('div');
    iconBox.className = 'toast-icon-box';
    iconBox.textContent = iconSvg;

    const body = document.createElement('div');
    body.className = 'toast-body';

    const titleEl = document.createElement('div');
    titleEl.className = 'toast-title';
    titleEl.textContent = title;

    const msgEl = document.createElement('div');
    msgEl.className = 'toast-message';
    msgEl.textContent = message;

    body.appendChild(titleEl);
    body.appendChild(msgEl);
    toast.appendChild(iconBox);
    toast.appendChild(body);

    this.container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    const dismissTimer = this.scheduleDismiss(toast, dedupeKey);
    if (dedupeKey) {
      this.activeByKey.set(dedupeKey, { el: toast, dismissTimer });
    }
  }

  private scheduleDismiss(toastEl: HTMLElement, dedupeKey?: string): number {
    return window.setTimeout(() => {
      toastEl.classList.remove('visible');
      if (dedupeKey && this.activeByKey.get(dedupeKey)?.el === toastEl) {
        this.activeByKey.delete(dedupeKey);
      }
      window.setTimeout(() => {
        if (toastEl.parentElement) {
          toastEl.parentElement.removeChild(toastEl);
        }
      }, 500);
    }, 3400);
  }
}

export const toast = new NotificationToast();
