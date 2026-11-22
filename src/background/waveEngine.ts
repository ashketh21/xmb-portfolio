import { vertexShaderSource, fragmentShaderSource } from './waveShader';
import { ThemePreset } from '../types';

export interface ThemeColors {
  bgTop: [number, number, number];
  bgBottom: [number, number, number];
  waveColor: [number, number, number];
}

export const THEME_PALETTES: Record<Exclude<ThemePreset, 'monthly'>, ThemeColors> = {
  cobalt: {
    bgTop: [0.11, 0.38, 0.56],       // Photo 2: Rich Oceanic PS3 Cyan-Blue
    bgBottom: [0.025, 0.11, 0.20],   // Photo 2: Deep Midnight PS3 Navy
    waveColor: [0.70, 0.92, 1.00],   // Photo 2: Luminous Silvery Cyan Ribbon
  },
  ruby: {
    bgTop: [0.72, 0.08, 0.12],      // Rich Ruby Crimson
    bgBottom: [0.32, 0.02, 0.05],   // Deep Wine Red
    waveColor: [0.95, 0.70, 0.75],  // Luminous Rose Ribbon
  },
  obsidian: {
    bgTop: [0.12, 0.13, 0.17],      // Sleek Midnight Charcoal
    bgBottom: [0.03, 0.03, 0.05],   // Deep Obsidian Black
    waveColor: [0.75, 0.82, 0.92],  // Cool Silver Ribbon
  },
  emerald: {
    bgTop: [0.04, 0.42, 0.22],      // Aurora Emerald
    bgBottom: [0.01, 0.16, 0.08],   // Forest Shadow
    waveColor: [0.68, 0.98, 0.80],  // Mint Glow Ribbon
  },
  amber: {
    bgTop: [0.62, 0.36, 0.06],      // Royal Gold
    bgBottom: [0.26, 0.13, 0.02],   // Deep Bronze
    waveColor: [1.00, 0.90, 0.65],  // Golden Shimmer Ribbon
  },
  violet: {
    bgTop: [0.18, 0.03, 0.24],      // Photo 3: Authentic Startup Royal Violet
    bgBottom: [0.06, 0.01, 0.09],   // Photo 3: Deep Dark Plum
    waveColor: [0.85, 0.65, 0.98],  // Photo 3: Silky Lilac Wave Ribbon
  },
};

export class WaveEngine {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext | null = null;
  private program: WebGLProgram | null = null;

  // Uniform locations
  private uTimeLoc: WebGLUniformLocation | null = null;
  private uResolutionLoc: WebGLUniformLocation | null = null;
  private uBgTopLoc: WebGLUniformLocation | null = null;
  private uBgBottomLoc: WebGLUniformLocation | null = null;
  private uWaveColorLoc: WebGLUniformLocation | null = null;
  private uSpeedMultLoc: WebGLUniformLocation | null = null;
  private uAmpMultLoc: WebGLUniformLocation | null = null;
  private uSharpnessMultLoc: WebGLUniformLocation | null = null;

  // Current and target colors for smooth transitions (Starts with PS3 violet coldboot)
  private currentColors: ThemeColors = { ...THEME_PALETTES.violet };
  private targetColors: ThemeColors = { ...THEME_PALETTES.violet };

  private speedMultiplier = 1.0;
  private ampMultiplier = 1.0;
  private sharpnessMultiplier = 1.0;
  private isRunning = false;
  private startTime = performance.now();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  private init() {
    this.gl = this.canvas.getContext('webgl', { alpha: false, antialias: true, depth: false });
    if (!this.gl) {
      console.warn('WebGL not supported, attempting experimental-webgl');
      this.gl = (this.canvas.getContext('experimental-webgl') as WebGLRenderingContext) || null;
    }

    if (!this.gl) {
      console.error('WebGL is not available in this environment.');
      return;
    }

    const gl = this.gl;
    const vs = this.compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = this.compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vs || !fs) return;

    this.program = gl.createProgram();
    if (!this.program) return;

    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(this.program));
      return;
    }

    gl.useProgram(this.program);

    // Uniform locations
    this.uTimeLoc = gl.getUniformLocation(this.program, 'uTime');
    this.uResolutionLoc = gl.getUniformLocation(this.program, 'uResolution');
    this.uBgTopLoc = gl.getUniformLocation(this.program, 'uBgTop');
    this.uBgBottomLoc = gl.getUniformLocation(this.program, 'uBgBottom');
    this.uWaveColorLoc = gl.getUniformLocation(this.program, 'uWaveColor');
    this.uSpeedMultLoc = gl.getUniformLocation(this.program, 'uSpeedMult');
    this.uAmpMultLoc = gl.getUniformLocation(this.program, 'uAmpMult');
    this.uSharpnessMultLoc = gl.getUniformLocation(this.program, 'uSharpnessMult');

    // Quad buffer
    const posAttr = gl.getAttribLocation(this.program, 'aVertexPosition');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const verts = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.start();
  }

  private compileShader(type: number, src: string): WebGLShader | null {
    if (!this.gl) return null;
    const s = this.gl.createShader(type);
    if (!s) return null;
    this.gl.shaderSource(s, src);
    this.gl.compileShader(s);
    if (!this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', this.gl.getShaderInfoLog(s));
      this.gl.deleteShader(s);
      return null;
    }
    return s;
  }

  public resize() {
    if (!this.gl) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);

    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }
  }

  public setTheme(theme: ThemePreset) {
    if (theme === 'monthly') {
      const month = new Date().getMonth(); // 0-11
      const monthMap: ThemePreset[] = [
        'obsidian', // Jan (Silver)
        'amber',    // Feb
        'emerald',  // Mar
        'ruby',     // Apr
        'emerald',  // May
        'violet',   // Jun
        'cobalt',   // Jul
        'cobalt',   // Aug
        'violet',   // Sep
        'ruby',     // Oct (Matches reference screenshot!)
        'amber',    // Nov
        'ruby'      // Dec
      ];
      this.setTheme(monthMap[month] || 'ruby');
      return;
    }

    const palette = THEME_PALETTES[theme] || THEME_PALETTES.ruby;
    this.targetColors = {
      bgTop: [...palette.bgTop],
      bgBottom: [...palette.bgBottom],
      waveColor: [...palette.waveColor],
    };
  }

  public setSpeed(speed: 'slow' | 'normal' | 'fast') {
    if (speed === 'slow') this.speedMultiplier = 0.6;
    else if (speed === 'fast') this.speedMultiplier = 1.6;
    else this.speedMultiplier = 1.0;
  }

  public setSharpness(sharpness: number) {
    this.sharpnessMultiplier = Math.max(0.5, Math.min(2.0, sharpness));
  }

  private lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  private lerpColor(curr: [number, number, number], target: [number, number, number], t: number): [number, number, number] {
    return [
      this.lerp(curr[0], target[0], t),
      this.lerp(curr[1], target[1], t),
      this.lerp(curr[2], target[2], t),
    ];
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    const render = () => {
      if (!this.isRunning) return;
      this.renderFrame();
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  public stop() {
    this.isRunning = false;
  }

  private renderFrame() {
    if (!this.gl || !this.program) return;

    // Smooth color interpolation
    const ease = 0.05;
    this.currentColors.bgTop = this.lerpColor(this.currentColors.bgTop, this.targetColors.bgTop, ease);
    this.currentColors.bgBottom = this.lerpColor(this.currentColors.bgBottom, this.targetColors.bgBottom, ease);
    this.currentColors.waveColor = this.lerpColor(this.currentColors.waveColor, this.targetColors.waveColor, ease);

    const elapsed = (performance.now() - this.startTime) * 0.001;

    this.gl.uniform1f(this.uTimeLoc, elapsed);
    this.gl.uniform2f(this.uResolutionLoc, this.canvas.width, this.canvas.height);
    this.gl.uniform3fv(this.uBgTopLoc, this.currentColors.bgTop);
    this.gl.uniform3fv(this.uBgBottomLoc, this.currentColors.bgBottom);
    this.gl.uniform3fv(this.uWaveColorLoc, this.currentColors.waveColor);
    this.gl.uniform1f(this.uSpeedMultLoc, this.speedMultiplier);
    this.gl.uniform1f(this.uAmpMultLoc, this.ampMultiplier);
    this.gl.uniform1f(this.uSharpnessMultLoc, this.sharpnessMultiplier);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}
