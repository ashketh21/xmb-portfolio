/**
 * Ambient PS3 Sparkle & Dust Particle System
 * Simulates the subtle glowing micro-motes floating gracefully across the XMB wave.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alphaPhase: number;
  alphaSpeed: number;
}

export class ParticleField {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private numParticles = 65;
  private isEnabled = true;
  private isRunning = false;
  private mouseX = -1000;
  private mouseY = -1000;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    this.initParticles();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    this.start();
  }

  public resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stop();
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    } else {
      this.start();
    }
  }

  private initParticles() {
    this.particles = [];
    const w = this.canvas.width || window.innerWidth;
    const h = this.canvas.height || window.innerHeight;

    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 + 0.15, // gentle rightward drift
        vy: -0.2 - Math.random() * 0.45,         // gentle upward float
        radius: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.25,
        alphaPhase: Math.random() * Math.PI * 2,
        alphaSpeed: Math.random() * 0.02 + 0.01,
      });
    }
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    const loop = () => {
      if (!this.isRunning) return;
      this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  public stop() {
    this.isRunning = false;
  }

  private render() {
    if (!this.ctx) return;
    if (!this.isEnabled) return;

    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alphaPhase += p.alphaSpeed;

      // Subtle mouse avoidance
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100 && dist > 0) {
        p.x += (dx / dist) * 0.8;
        p.y += (dy / dist) * 0.8;
      }

      // Wrap around edges
      if (p.y < -10) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }
      if (p.x > w + 10) {
        p.x = -10;
      } else if (p.x < -10) {
        p.x = w + 10;
      }

      const currentAlpha = Math.max(0.05, p.baseAlpha + Math.sin(p.alphaPhase) * 0.25);

      // Radial glow gradient
      const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
      grad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
      grad.addColorStop(0.4, `rgba(255, 240, 245, ${currentAlpha * 0.5})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}
