export interface NavigationHandler {
  isActive: () => boolean;
  onNextCategory: () => void;
  onPrevCategory: () => void;
  onNextItem: () => void;
  onPrevItem: () => void;
  onSelect: () => void;
  onBack: () => void;
  onOptions: () => void;
}

export class InputManager {
  private handler: NavigationHandler;

  // Touch & wheel gesture tracking
  private touchStartX = 0;
  private touchStartY = 0;
  private touchThreshold = 45;
  private lastWheelTime = 0;

  constructor(handler: NavigationHandler) {
    this.handler = handler;
    this.bindKeyboard();
    this.bindTouch();
    this.bindWheel();
  }

  private bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (!this.handler.isActive()) return;

      // Ignore navigation keys while typing in an input or textarea,
      // except Escape which cleanly closes the modal.
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === 'input' || targetTag === 'textarea') {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.handler.onBack();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          this.handler.onNextCategory();
          break;

        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          this.handler.onPrevCategory();
          break;

        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          this.handler.onNextItem();
          break;

        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          this.handler.onPrevItem();
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();
          this.handler.onSelect();
          break;

        case 'Escape':
        case 'Backspace':
          e.preventDefault();
          this.handler.onBack();
          break;

        case 'o':
        case 'O':
        case 't':
        case 'T':
          e.preventDefault();
          this.handler.onOptions();
          break;
      }
    });
  }

  private bindTouch() {
    window.addEventListener('touchstart', (e) => {
      if (!this.handler.isActive()) return;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (!this.handler.isActive()) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - this.touchStartX;
      const dy = touchEndY - this.touchStartY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > this.touchThreshold) {
        if (dx > 0) {
          this.handler.onPrevCategory();
        } else {
          this.handler.onNextCategory();
        }
      } else if (Math.abs(dy) > this.touchThreshold) {
        if (dy > 0) {
          this.handler.onPrevItem();
        } else {
          this.handler.onNextItem();
        }
      }
    }, { passive: true });
  }

  private bindWheel() {
    window.addEventListener('wheel', (e) => {
      if (!this.handler.isActive()) return;
      const now = performance.now();
      if (now - this.lastWheelTime < 160) return;

      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX) && Math.abs(e.deltaY) > 12) {
        this.lastWheelTime = now;
        if (e.deltaY > 0) {
          this.handler.onNextItem();
        } else {
          this.handler.onPrevItem();
        }
      } else if (Math.abs(e.deltaX) > 22) {
        this.lastWheelTime = now;
        if (e.deltaX > 0) {
          this.handler.onNextCategory();
        } else {
          this.handler.onPrevCategory();
        }
      }
    }, { passive: true });
  }
}
