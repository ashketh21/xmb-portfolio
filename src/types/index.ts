export type CategoryId = 
  | 'settings' 
  | 'profile' 
  | 'skills' 
  | 'education' 
  | 'experience' 
  | 'projects' 
  | 'contact';

export interface XmbAction {
  type: 'modal' | 'link' | 'theme' | 'setting' | 'download' | 'copy' | 'reboot';
  payload?: any;
}

export interface XmbSubItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconSvg?: string;
  iconEmoji?: string;
  tags?: string[];
  date?: string;
  badge?: string;
  linkUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  action: XmbAction;
  details?: {
    overview?: string;
    highlights?: string[];
    role?: string;
    organization?: string;
    gradeOrMetric?: string;
    courses?: string[];
    skillsUsed?: string[];
    extraInfo?: Record<string, string>;
  };
}

export interface XmbCategory {
  id: CategoryId;
  label: string;
  iconSvg: string;
  items: XmbSubItem[];
}

export type ThemePreset = 'ruby' | 'obsidian' | 'cobalt' | 'emerald' | 'amber' | 'violet' | 'monthly';

export type FontPreset = 'rodin' | 'inter' | 'exo' | 'rajdhani';

export interface AppSettings {
  theme: ThemePreset;
  fontPreset: FontPreset;
  waveSpeed: 'slow' | 'normal' | 'fast';
  waveSharpness: number;
  particlesEnabled: boolean;
  soundEnabled: boolean;
  masterVolume: number; // 0.0 to 1.0
  clock24Hour: boolean;
}
