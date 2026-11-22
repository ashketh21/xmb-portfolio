import { sound } from '../audio/soundEngine';

export class NotificationToast {
  private container: HTMLElement | null;

  constructor() {
    this.container = document.getElementById('toast-container');
  }

  public show(title: string, message: string, iconType: 'trophy' | 'info' | 'check' | 'mail' = 'info') {
    if (!this.container) return;

    if (iconType === 'trophy') {
      sound.playTrophy();
    } else {
      sound.playSelect();
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

    // Auto dismiss after 3.8s
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 500);
    }, 3800);
  }
}

export const toast = new NotificationToast();
