import { XmbSubItem } from '../types';
import { sound } from '../audio/soundEngine';
import { toast } from './notificationToast';
import { trophyManager } from './trophyManager';

const CATEGORY_COPY: Record<
  string,
  { sectionHeading: string; dateLabel: string; typeLabel: string; tagsHeading: string }
> = {
  profile: {
    sectionHeading: 'About',
    dateLabel: 'Timeline',
    typeLabel: 'Role',
    tagsHeading: 'Core Focus',
  },
  skills: {
    sectionHeading: 'Skill Breakdown & Evidence',
    dateLabel: 'Timeline',
    typeLabel: 'Domain',
    tagsHeading: 'Technologies & Tools',
  },
  education: {
    sectionHeading: 'Academic Overview',
    dateLabel: 'Timeline',
    typeLabel: 'Program / Credential',
    tagsHeading: 'Focus Areas',
  },
  experience: {
    sectionHeading: 'Role & Impact',
    dateLabel: 'Tenure',
    typeLabel: 'Role',
    tagsHeading: 'Technologies & Tools',
  },
  projects: {
    sectionHeading: 'Overview & Architecture',
    dateLabel: 'Released / Date',
    typeLabel: 'Role',
    tagsHeading: 'Technologies & Tools',
  },
  contact: {
    sectionHeading: 'Compose Message',
    dateLabel: 'Status',
    typeLabel: 'Channel',
    tagsHeading: 'Details',
  },
  settings: {
    sectionHeading: 'Setting Details',
    dateLabel: 'Updated',
    typeLabel: 'Category',
    tagsHeading: 'Options',
  },
};

export class DetailsModal {
  private modal: HTMLElement | null;
  private backdrop: HTMLElement | null;
  private closeBtn: HTMLElement | null;
  private discIconEl: HTMLElement | null;
  private titleEl: HTMLElement | null;
  private subtitleEl: HTMLElement | null;
  private categoryEl: HTMLElement | null;
  private sectionHeadingEl: HTMLElement | null;
  private descEl: HTMLElement | null;
  private tagsEl: HTMLElement | null;
  private tagsWrapperEl: HTMLElement | null;
  private tagsHeadingEl: HTMLElement | null;
  private dateEl: HTMLElement | null;
  private dateLabelEl: HTMLElement | null;
  private dateRowEl: HTMLElement | null;
  private typeRowEl: HTMLElement | null;
  private typeEl: HTMLElement | null;
  private typeLabelEl: HTMLElement | null;
  private infoBoxEl: HTMLElement | null;
  private orgRowEl: HTMLElement | null;
  private orgEl: HTMLElement | null;
  private metricRowEl: HTMLElement | null;
  private metricEl: HTMLElement | null;
  private developerRowEl: HTMLElement | null;
  private extraInfoEl: HTMLElement | null;
  private actionsEl: HTMLElement | null;
  private extraEl: HTMLElement | null;

  private isOpen = false;

  constructor() {
    this.modal = document.getElementById('detail-modal');
    this.backdrop = this.modal?.querySelector('.modal-backdrop') || null;
    this.closeBtn = document.getElementById('modal-close-btn');

    this.discIconEl = document.getElementById('modal-disc-icon');
    this.titleEl = document.getElementById('modal-title');
    this.subtitleEl = document.getElementById('modal-subtitle');
    this.categoryEl = document.getElementById('modal-category');
    this.sectionHeadingEl = document.getElementById('modal-section-heading');
    this.descEl = document.getElementById('modal-description');
    this.tagsEl = document.getElementById('modal-tags');
    this.tagsWrapperEl = document.getElementById('modal-tags-wrapper');
    this.tagsHeadingEl = document.getElementById('modal-tags-heading');
    this.dateEl = document.getElementById('modal-date');
    this.dateLabelEl = document.getElementById('modal-date-label');
    this.dateRowEl = document.getElementById('modal-date-row');
    this.typeEl = document.getElementById('modal-type');
    this.typeLabelEl = document.getElementById('modal-type-label');
    this.typeRowEl = this.typeEl?.parentElement || null;
    this.infoBoxEl = this.modal?.querySelector('.modal-info-box') || null;
    this.orgRowEl = document.getElementById('modal-org-row');
    this.orgEl = document.getElementById('modal-org');
    this.metricRowEl = document.getElementById('modal-metric-row');
    this.metricEl = document.getElementById('modal-metric');
    this.developerRowEl = document.getElementById('modal-developer-row');
    this.extraInfoEl = document.getElementById('modal-extra-info');
    this.actionsEl = document.getElementById('modal-actions');
    this.extraEl = document.getElementById('modal-details-extra');

    this.bindEvents();
  }

  private bindEvents() {
    this.closeBtn?.addEventListener('click', () => this.close());
    this.backdrop?.addEventListener('click', () => this.close());
  }

  public open(item: XmbSubItem, categoryLabel: string) {
    if (!this.modal) return;
    this.isOpen = true;
    sound.playSelect();

    const catKey = categoryLabel.toLowerCase();
    const copy = CATEGORY_COPY[catKey] || CATEGORY_COPY.projects;

    // Populate modal header icon (official logo or custom emblem)
    if (this.discIconEl) {
      this.discIconEl.innerHTML = '';
      this.discIconEl.className = 'modal-disc-icon';
      if (item.image) {
        this.discIconEl.classList.add('has-logo');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = `${item.title} logo`;
        if (item.imageScale) img.style.transform = `scale(${item.imageScale})`;
        this.discIconEl.appendChild(img);
      } else if (item.iconSvg) {
        this.discIconEl.innerHTML = item.iconSvg;
      }
    }

    if (this.categoryEl) this.categoryEl.textContent = categoryLabel.toUpperCase();
    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.subtitleEl) this.subtitleEl.textContent = item.subtitle || categoryLabel;
    if (this.sectionHeadingEl) this.sectionHeadingEl.textContent = copy.sectionHeading;
    if (this.tagsHeadingEl) this.tagsHeadingEl.textContent = copy.tagsHeading;
    if (this.dateLabelEl) this.dateLabelEl.textContent = copy.dateLabel;
    if (this.typeLabelEl) this.typeLabelEl.textContent = copy.typeLabel;

    // Overview text
    const overview = item.details?.overview || item.description;
    if (this.descEl) this.descEl.textContent = overview;

    // Extra highlights / coursework / contact form
    if (this.extraEl) {
      this.extraEl.innerHTML = '';

      // Live Portfolio Trophy Collection view
      if (item.id === 'profile-trophies') {
        const trophies = trophyManager.getAllTrophies();
        const unlockedCount = trophyManager.getUnlockedCount();
        const totalCount = trophyManager.getTotalCount();
        const pct = trophyManager.getProgressPercent();

        if (this.subtitleEl) {
          this.subtitleEl.textContent = `${unlockedCount} / ${totalCount} Trophies Unlocked (${pct}%)`;
        }
        if (this.descEl) {
          this.descEl.textContent =
            unlockedCount === totalCount
              ? 'All portfolio trophies unlocked — Platinum earned!'
              : 'Explore the XMB portfolio to unlock hidden PlayStation-style trophies:';
        }

        const progressWrap = document.createElement('div');
        progressWrap.className = 'trophy-progress-wrap';
        progressWrap.innerHTML = `
          <div class="trophy-progress-header">
            <span>Collection Progress</span>
            <strong>${pct}% (${unlockedCount}/${totalCount})</strong>
          </div>
          <div class="trophy-progress-track">
            <div class="trophy-progress-fill" style="width: ${pct}%"></div>
          </div>
        `;
        this.extraEl.appendChild(progressWrap);

        const list = document.createElement('div');
        list.className = 'trophy-list';
        const tierIcons: Record<string, string> = {
          Platinum: '🏆',
          Gold: '🥇',
          Silver: '🥈',
          Bronze: '🥉',
        };

        trophies.forEach((t) => {
          const card = document.createElement('div');
          card.className = `trophy-card ${t.unlocked ? 'unlocked' : 'locked'}`;

          const icon = document.createElement('div');
          icon.className = 'trophy-card-icon';
          icon.textContent = t.unlocked ? tierIcons[t.tier] || '🏆' : '🔒';

          const body = document.createElement('div');
          body.className = 'trophy-card-body';

          const titleRow = document.createElement('div');
          titleRow.className = 'trophy-card-title-row';

          const name = document.createElement('span');
          name.className = 'trophy-card-title';
          name.textContent = t.title;

          const tier = document.createElement('span');
          tier.className = `trophy-tier-pill tier-${t.tier.toLowerCase()}`;
          tier.textContent = t.unlocked ? `${t.tier} • Unlocked` : `${t.tier} • Locked`;

          titleRow.appendChild(name);
          titleRow.appendChild(tier);

          const desc = document.createElement('p');
          desc.className = 'trophy-card-desc';
          desc.textContent = t.unlocked ? t.description : t.hint;

          body.appendChild(titleRow);
          body.appendChild(desc);
          card.appendChild(icon);
          card.appendChild(body);
          list.appendChild(card);
        });
        this.extraEl.appendChild(list);
      } else if (item.id === 'contact-message') {
        const form = document.createElement('form');
        form.className = 'ps3-message-form';
        form.innerHTML = `
          <div class="form-row">
            <label>Recipient:</label>
            <input type="text" value="Ashvin Kethiswaran (ashvinkethiswaran@gmail.com)" readonly />
          </div>
          <div class="form-row">
            <label>Your Name / Email:</label>
            <input id="sender-input" type="text" placeholder="e.g. recruiter@company.com" required />
          </div>
          <div class="form-row">
            <label>Message Content:</label>
            <textarea id="message-text" rows="4" placeholder="Hi Ashvin, loved your XMB portfolio! Let's connect..." required></textarea>
          </div>
          <button id="send-msg-btn" type="submit" class="modal-action-btn primary">
            <span>✉ Send Message</span>
          </button>
        `;
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = (document.getElementById('sender-input') as HTMLInputElement)?.value.trim();
          const msg = (document.getElementById('message-text') as HTMLTextAreaElement)?.value.trim();
          if (!email || !msg) return;
          window.location.href = `mailto:ashvinkethiswaran@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(email)}&body=${encodeURIComponent(msg)}`;
          toast.show('Message Dispatched', 'Opening your mail client to send to Ashvin', 'mail', 'contact-msg');
          trophyManager.unlock('new-connection');
          this.close();
        });
        this.extraEl.appendChild(form);
        window.setTimeout(() => {
          (document.getElementById('sender-input') as HTMLInputElement | null)?.focus();
        }, 120);
      } else if (item.details?.highlights && item.details.highlights.length > 0) {
        const list = document.createElement('ul');
        list.className = 'modal-highlights-list';
        item.details.highlights.forEach((h) => {
          const li = document.createElement('li');
          li.textContent = h;
          list.appendChild(li);
        });
        this.extraEl.appendChild(list);
      }

      if (item.details?.courses && item.details.courses.length > 0) {
        const heading = document.createElement('h4');
        heading.className = 'modal-subheading';
        heading.textContent = 'Key Coursework';
        this.extraEl.appendChild(heading);

        const courseGrid = document.createElement('div');
        courseGrid.className = 'modal-course-grid';
        item.details.courses.forEach((c) => {
          const badge = document.createElement('span');
          badge.className = 'modal-course-badge';
          badge.textContent = c;
          courseGrid.appendChild(badge);
        });
        this.extraEl.appendChild(courseGrid);
      }
    }

    // Merge tags + details.skillsUsed (deduplicated) so nothing is silently shadowed
    // Hide Focus Areas section on Education modals
    if (this.tagsEl) {
      this.tagsEl.innerHTML = '';
      const mergedTags =
        catKey === 'education'
          ? []
          : Array.from(new Set([...(item.tags || []), ...(item.details?.skillsUsed || [])]));
      if (mergedTags.length > 0) {
        if (this.tagsWrapperEl) this.tagsWrapperEl.style.display = 'block';
        mergedTags.forEach((t) => {
          const tag = document.createElement('span');
          tag.className = 'modal-tag-chip';
          tag.textContent = t;
          this.tagsEl?.appendChild(tag);
        });
      } else {
        if (this.tagsWrapperEl) this.tagsWrapperEl.style.display = 'none';
      }
    }

    // Sidebar metadata (hidden on Projects & About This Site where info box isn't needed)
    const hideProjectMeta = catKey === 'projects' || item.id === 'profile-about-site';

    if (this.dateRowEl && this.dateEl) {
      if (!hideProjectMeta && item.date) {
        this.dateEl.textContent = item.date;
        this.dateRowEl.style.display = 'flex';
      } else {
        this.dateRowEl.style.display = 'none';
      }
    }

    if (this.typeRowEl && this.typeEl) {
      if (!hideProjectMeta) {
        this.typeEl.textContent = item.details?.role || categoryLabel;
        this.typeRowEl.style.display = 'flex';
      } else {
        this.typeRowEl.style.display = 'none';
      }
    }

    if (this.orgRowEl && this.orgEl) {
      if (!hideProjectMeta && item.details?.organization) {
        this.orgEl.textContent = item.details.organization;
        this.orgRowEl.style.display = 'flex';
      } else {
        this.orgRowEl.style.display = 'none';
      }
    }

    if (this.metricRowEl && this.metricEl) {
      if (!hideProjectMeta && catKey !== 'experience' && item.details?.gradeOrMetric) {
        this.metricEl.textContent = item.details.gradeOrMetric;
        this.metricRowEl.style.display = 'flex';
      } else {
        this.metricRowEl.style.display = 'none';
      }
    }

    // Developer row removed across all modals
    if (this.developerRowEl) {
      this.developerRowEl.style.display = 'none';
    }

    // Render extraInfo key/value rows in sidebar
    if (this.extraInfoEl) {
      this.extraInfoEl.innerHTML = '';
      const extraEntries = !hideProjectMeta && item.details?.extraInfo ? Object.entries(item.details.extraInfo) : [];
      extraEntries.forEach(([label, val]) => {
        const row = document.createElement('div');
        row.className = 'info-row';
        const l = document.createElement('span');
        l.className = 'info-label';
        l.textContent = label;
        const v = document.createElement('span');
        v.className = 'info-val';
        v.textContent = val;
        row.appendChild(l);
        row.appendChild(v);
        this.extraInfoEl?.appendChild(row);
      });
    }

    // Hide the entire info box container if every row inside is hidden
    if (this.infoBoxEl) {
      this.infoBoxEl.style.display = hideProjectMeta ? 'none' : 'flex';
    }

    // Action buttons
    if (this.actionsEl) {
      this.actionsEl.innerHTML = '';

      if (item.demoUrl) {
        const demoBtn = document.createElement('a');
        demoBtn.className = 'modal-action-btn primary';
        demoBtn.href = item.demoUrl;
        demoBtn.target = '_blank';
        demoBtn.rel = 'noopener noreferrer';
        demoBtn.innerHTML = `<span>▶ Launch Application</span>`;
        demoBtn.addEventListener('click', () => sound.playSelect());
        this.actionsEl.appendChild(demoBtn);
      }

      if (item.githubUrl) {
        const ghBtn = document.createElement('a');
        ghBtn.className = 'modal-action-btn secondary';
        ghBtn.href = item.githubUrl;
        ghBtn.target = '_blank';
        ghBtn.rel = 'noopener noreferrer';
        ghBtn.innerHTML = `<span>⎇ View Source Code</span>`;
        ghBtn.addEventListener('click', () => sound.playSelect());
        this.actionsEl.appendChild(ghBtn);
      }

      if (item.linkUrl && !item.demoUrl && !item.githubUrl) {
        const linkBtn = document.createElement('a');
        linkBtn.className = 'modal-action-btn primary';
        linkBtn.href = item.linkUrl;
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.innerHTML = `<span>↗ Open Resource</span>`;
        linkBtn.addEventListener('click', () => sound.playSelect());
        this.actionsEl.appendChild(linkBtn);
      }

      // Recruiter quick-action buttons on Profile main card
      if (item.id === 'profile-main') {
        const resumeBtn = document.createElement('a');
        resumeBtn.className = 'modal-action-btn primary';
        resumeBtn.href = '/resume.pdf';
        resumeBtn.download = 'Ashvin_Kethiswaran_Resume.pdf';
        resumeBtn.innerHTML = `<span>⬇ Download Resume (PDF)</span>`;
        resumeBtn.addEventListener('click', () => {
          toast.show('Save Data Utility', 'Downloading Ashvin_Kethiswaran_Resume.pdf', 'info', 'resume');
          trophyManager.unlock('save-data');
        });
        this.actionsEl.appendChild(resumeBtn);

        const liBtn = document.createElement('a');
        liBtn.className = 'modal-action-btn secondary';
        liBtn.href = 'https://www.linkedin.com/in/ashvinkethiswaran';
        liBtn.target = '_blank';
        liBtn.rel = 'noopener noreferrer';
        liBtn.innerHTML = `<span>↗ LinkedIn Profile</span>`;
        liBtn.addEventListener('click', () => {
          sound.playSelect();
          trophyManager.unlock('new-connection');
        });
        this.actionsEl.appendChild(liBtn);

        const ghBtn = document.createElement('a');
        ghBtn.className = 'modal-action-btn secondary';
        ghBtn.href = 'https://github.com/ashketh21';
        ghBtn.target = '_blank';
        ghBtn.rel = 'noopener noreferrer';
        ghBtn.innerHTML = `<span>⎇ GitHub (ashketh21)</span>`;
        ghBtn.addEventListener('click', () => sound.playSelect());
        this.actionsEl.appendChild(ghBtn);
      }

      // Experience modals get a quick Download Resume CTA
      if (catKey === 'experience') {
        const resumeBtn = document.createElement('a');
        resumeBtn.className = 'modal-action-btn secondary';
        resumeBtn.href = '/resume.pdf';
        resumeBtn.download = 'Ashvin_Kethiswaran_Resume.pdf';
        resumeBtn.innerHTML = `<span>⬇ Download Full Resume</span>`;
        resumeBtn.addEventListener('click', () => {
          toast.show('Save Data Utility', 'Downloading Ashvin_Kethiswaran_Resume.pdf', 'info', 'resume');
          trophyManager.unlock('save-data');
        });
        this.actionsEl.appendChild(resumeBtn);
      }

      const closeActionBtn = document.createElement('button');
      closeActionBtn.className = 'modal-action-btn tertiary';
      closeActionBtn.textContent = 'Return';
      closeActionBtn.addEventListener('click', () => this.close());
      this.actionsEl.appendChild(closeActionBtn);
    }

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  public close() {
    if (!this.isOpen || !this.modal) return;
    this.isOpen = false;
    sound.playBack();
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
  }

  public getIsOpen(): boolean {
    return this.isOpen;
  }
}

export const detailsModal = new DetailsModal();
