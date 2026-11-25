import { sound } from '../audio/soundEngine';

export class BootSequence {
  private bootScreen: HTMLElement | null;
  private xmbApp: HTMLElement | null;
  private isBooted: boolean = false;
  private isInputReady: boolean = false;
  private autoFinishTimer: number | null = null;
  private hideTimer: number | null = null;
  private inputReadyTimer: number | null = null;
  private onCompleteCallback?: () => void;

  constructor(onComplete?: () => void) {
    this.bootScreen = document.getElementById('boot-screen');
    this.xmbApp = document.getElementById('xmb-app');
    this.onCompleteCallback = onComplete;

    this.bindSkipEvents();
    this.startFadeIn();
  }

  public getIsBooted(): boolean {
    return this.isBooted && this.isInputReady;
  }

  private bindSkipEvents() {
    // Allow clicking or pressing any key to skip straight into the XMB
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.isBooted) {
        e.preventDefault();
        e.stopImmediatePropagation();
        sound.init();
        this.finishBoot();
      }
    });

    if (this.bootScreen) {
      this.bootScreen.addEventListener('click', (e) => {
        if (!this.isBooted) {
          e.stopPropagation();
          sound.init();
          this.finishBoot();
        }
      });
    }
  }

  private clearTimers() {
    if (this.autoFinishTimer !== null) {
      window.clearTimeout(this.autoFinishTimer);
      this.autoFinishTimer = null;
    }
    if (this.hideTimer !== null) {
      window.clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
    if (this.inputReadyTimer !== null) {
      window.clearTimeout(this.inputReadyTimer);
      this.inputReadyTimer = null;
    }
  }

  private startFadeIn() {
    if (!this.bootScreen) {
      this.finishBoot();
      return;
    }

    this.clearTimers();

    // Double rAF guarantees the browser paints the initial black veil + hidden lockup
    // before triggering the smooth CSS fade-in transitions.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.bootScreen?.classList.add('boot-reveal');
      });
    });

    // Hold gently after the slow staggered fade-in settles, then cross-fade into the XMB
    this.autoFinishTimer = window.setTimeout(() => {
      this.finishBoot();
    }, 5600);
  }

  public finishBoot() {
    if (this.isBooted || !this.bootScreen || !this.xmbApp) return;
    this.isBooted = true;
    this.clearTimers();

    // Sync background theme right as the XMB begins cross-fading in
    if (this.onCompleteCallback) {
      this.onCompleteCallback();
    }

    this.bootScreen.classList.add('boot-fade-out');

    // Smoothly fade & glide in XMB
    this.xmbApp.style.transition =
      'opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)';
    this.xmbApp.style.opacity = '1';
    this.xmbApp.style.transform = 'translateY(0)';
    this.xmbApp.style.pointerEvents = 'all';

    // Delay enabling XMB keyboard/touch input slightly so the skip keypress
    // or key-repeat cannot accidentally trigger the first item in Profile.
    this.inputReadyTimer = window.setTimeout(() => {
      this.isInputReady = true;
    }, 300);

    this.hideTimer = window.setTimeout(() => {
      if (this.bootScreen) {
        this.bootScreen.style.display = 'none';
        this.bootScreen.classList.remove('active');
      }
    }, 1800);
  }

  public restart() {
    if (!this.bootScreen || !this.xmbApp) return;
    this.clearTimers();
    this.isBooted = false;
    this.isInputReady = false;

    this.bootScreen.style.display = 'flex';
    this.bootScreen.classList.remove('boot-fade-out', 'boot-reveal');
    this.bootScreen.classList.add('active');

    this.xmbApp.style.transition = 'none';
    this.xmbApp.style.opacity = '0';
    this.xmbApp.style.transform = 'translateY(10px)';
    this.xmbApp.style.pointerEvents = 'none';

    this.startFadeIn();
  }
}
