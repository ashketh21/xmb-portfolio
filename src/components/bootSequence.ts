import { sound } from '../audio/soundEngine';
import { toast } from './notificationToast';

export class BootSequence {
  private bootScreen: HTMLElement | null;
  private xmbApp: HTMLElement | null;
  private enterBtn: HTMLElement | null;
  private isBooted: boolean = false;
  private onCompleteCallback?: () => void;

  constructor(onComplete?: () => void) {
    this.bootScreen = document.getElementById('boot-screen');
    this.xmbApp = document.getElementById('xmb-app');
    this.enterBtn = document.getElementById('boot-enter-btn');
    this.onCompleteCallback = onComplete;

    this.bindEvents();
  }

  public getIsBooted(): boolean {
    return this.isBooted;
  }

  private bindEvents() {
    if (this.enterBtn) {
      this.enterBtn.addEventListener('click', () => this.startBoot());
    }

    // Any key press starts boot if on boot screen
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.isBooted) {
        e.preventDefault();
        this.startBoot();
      }
    });

    // Any click on boot screen also starts
    if (this.bootScreen) {
      this.bootScreen.addEventListener('click', (e) => {
        if (!this.isBooted && e.target !== this.enterBtn) {
          this.startBoot();
        }
      });
    }
  }

  public startBoot() {
    if (this.isBooted) return;
    this.isBooted = true;

    // Trigger audio
    sound.init();
    sound.playBoot();

    if (this.bootScreen) {
      this.bootScreen.classList.add('booting');
      
      // Update button text to booting status
      const btnText = this.bootScreen.querySelector('.boot-btn-text');
      if (btnText) {
        btnText.textContent = 'SYSTEM INITIALIZING...';
      }
    }

    // Smooth transition into XMB
    setTimeout(() => {
      this.finishBoot();
    }, 800);
  }

  public finishBoot() {
    if (!this.bootScreen || !this.xmbApp) return;

    this.bootScreen.classList.add('boot-fade-out');
    
    // Fade in XMB
    this.xmbApp.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    this.xmbApp.style.opacity = '1';
    this.xmbApp.style.pointerEvents = 'all';

    setTimeout(() => {
      if (this.bootScreen) {
        this.bootScreen.style.display = 'none';
        this.bootScreen.classList.remove('active');
      }

      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }

      // Welcome toast notification
      setTimeout(() => {
        toast.show('AK System Software', 'Welcome to my portfolio', 'trophy');
      }, 600);
    }, 1200);
  }

  public restart() {
    if (!this.bootScreen || !this.xmbApp) return;
    this.isBooted = false;
    this.bootScreen.style.display = 'flex';
    this.bootScreen.classList.remove('boot-fade-out', 'booting');
    this.bootScreen.classList.add('active');
    this.xmbApp.style.opacity = '0';
    this.xmbApp.style.pointerEvents = 'none';

    const btnText = this.bootScreen.querySelector('.boot-btn-text');
    if (btnText) {
      btnText.textContent = 'PRESS ANY BUTTON TO START';
    }
  }
}
