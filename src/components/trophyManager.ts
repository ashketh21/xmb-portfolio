import { toast } from './notificationToast';

const TROPHY_STORAGE_KEY = 'ak_xmb_trophies_v1';

export interface TrophyDef {
  id: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  title: string;
  description: string;
  hint: string;
}

export interface TrophyStatus extends TrophyDef {
  unlocked: boolean;
}

const TROPHY_CATALOG: TrophyDef[] = [
  {
    id: 'wave-alchemist',
    tier: 'Bronze',
    title: 'Wave Alchemist',
    description: 'Customized the XMB background theme or display font.',
    hint: 'Change the theme or font in Settings.',
  },
  {
    id: 'save-data',
    tier: 'Silver',
    title: 'Save Data Accessed',
    description: 'Downloaded Ashvin’s official Resume PDF.',
    hint: 'Download the Resume PDF from Profile or Experience.',
  },
  {
    id: 'new-connection',
    tier: 'Silver',
    title: 'New Connection',
    description: 'Copied Ashvin’s email, opened a social profile, or sent a message.',
    hint: 'Use any option in the Contact column.',
  },
  {
    id: 'full-xmb-sync',
    tier: 'Gold',
    title: 'Full XMB Sync',
    description: 'Explored all 7 columns of the XMB portfolio.',
    hint: 'Visit every column across the horizontal XMB bar.',
  },
  {
    id: 'completionist',
    tier: 'Platinum',
    title: 'Portfolio Completionist',
    description: 'Unlocked every exploration trophy on the portfolio.',
    hint: 'Unlock all other trophies to earn Platinum.',
  },
];

type TrophyListener = () => void;

class TrophyManager {
  private unlocked: Set<string> = new Set();
  private visitedCategories: Set<string> = new Set();
  private listeners: Set<TrophyListener> = new Set();

  constructor() {
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem(TROPHY_STORAGE_KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          arr.forEach((id) => {
            if (typeof id === 'string') this.unlocked.add(id);
          });
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  private save() {
    try {
      localStorage.setItem(TROPHY_STORAGE_KEY, JSON.stringify([...this.unlocked]));
    } catch {
      // Ignore storage errors
    }
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  public subscribe(fn: TrophyListener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  public unlock(id: string) {
    if (this.unlocked.has(id)) return;
    const def = TROPHY_CATALOG.find((t) => t.id === id);
    if (!def) return;

    this.unlocked.add(id);
    this.save();
    toast.show(`Trophy Unlocked (${def.tier})`, `${def.title} — ${def.description}`, 'trophy', `trophy-${id}`);
    this.notify();

    // Auto-unlock Platinum once all non-Platinum trophies are earned
    if (id !== 'completionist') {
      const baseTrophies = TROPHY_CATALOG.filter((t) => t.id !== 'completionist');
      if (baseTrophies.every((t) => this.unlocked.has(t.id))) {
        window.setTimeout(() => this.unlock('completionist'), 1200);
      }
    }
  }

  public trackCategoryVisit(categoryId: string, totalCategories: number) {
    this.visitedCategories.add(categoryId);
    if (this.visitedCategories.size >= totalCategories) {
      this.unlock('full-xmb-sync');
    }
  }

  public getAllTrophies(): TrophyStatus[] {
    return TROPHY_CATALOG.map((def) => ({
      ...def,
      unlocked: this.unlocked.has(def.id),
    }));
  }

  public getUnlockedCount(): number {
    return this.unlocked.size;
  }

  public getTotalCount(): number {
    return TROPHY_CATALOG.length;
  }

  public getProgressPercent(): number {
    return Math.round((this.getUnlockedCount() / this.getTotalCount()) * 100);
  }
}

export const trophyManager = new TrophyManager();
