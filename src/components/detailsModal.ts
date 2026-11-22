import { XmbSubItem } from '../types';
import { sound } from '../audio/soundEngine';
import { toast } from './notificationToast';

export class DetailsModal {
  private modal: HTMLElement | null;
  private backdrop: HTMLElement | null;
  private closeBtn: HTMLElement | null;
  private titleEl: HTMLElement | null;
  private subtitleEl: HTMLElement | null;
  private categoryEl: HTMLElement | null;
  private descEl: HTMLElement | null;
  private tagsEl: HTMLElement | null;
  private dateEl: HTMLElement | null;
  private dateRowEl: HTMLElement | null;
  private typeEl: HTMLElement | null;
  private developerRowEl: HTMLElement | null;
  private actionsEl: HTMLElement | null;
  private extraEl: HTMLElement | null;

  private isOpen = false;

  constructor() {
    this.modal = document.getElementById('detail-modal');
    this.backdrop = this.modal?.querySelector('.modal-backdrop') || null;
    this.closeBtn = document.getElementById('modal-close-btn');

    this.titleEl = document.getElementById('modal-title');
    this.subtitleEl = document.getElementById('modal-subtitle');
    this.categoryEl = document.getElementById('modal-category');
    this.descEl = document.getElementById('modal-description');
    this.tagsEl = document.getElementById('modal-tags');
    this.dateEl = document.getElementById('modal-date');
    this.dateRowEl = document.getElementById('modal-date-row');
    this.typeEl = document.getElementById('modal-type');
    this.developerRowEl = document.getElementById('modal-developer-row');
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

    if (this.categoryEl) this.categoryEl.textContent = categoryLabel.toUpperCase();
    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.subtitleEl) this.subtitleEl.textContent = item.subtitle || categoryLabel;
    
    // Overview text
    const overview = item.details?.overview || item.description;
    if (this.descEl) this.descEl.textContent = overview;

    // Extra highlights / coursework
    if (this.extraEl) {
      this.extraEl.innerHTML = '';

      if (item.details?.highlights && item.details.highlights.length > 0) {
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

      // If this is the contact message form
      if (item.id === 'contact-message') {
        const form = document.createElement('form');
        form.className = 'ps3-message-form';
        form.innerHTML = `
          <div class="form-row">
            <label>Recipient:</label>
            <input type="text" value="Ashvin Kethiswaran (Online)" readonly />
          </div>
          <div class="form-row">
            <label>Your Name / Email:</label>
            <input id="sender-input" type="text" placeholder="e.g. recruiter@company.com" required />
          </div>
          <div class="form-row">
            <label>Message Content:</label>
            <textarea id="message-text" rows="3" placeholder="Hi Ashvin, loved your XMB portfolio! Let's talk..." required></textarea>
          </div>
          <button id="send-msg-btn" type="submit" class="modal-action-btn primary">
            <span>✉ Send Message</span>
          </button>
        `;
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = (document.getElementById('sender-input') as HTMLInputElement)?.value;
          const msg = (document.getElementById('message-text') as HTMLTextAreaElement)?.value;
          window.location.href = `mailto:ashvinkethiswaran@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(email)}&body=${encodeURIComponent(msg)}`;
          toast.show('Message Dispatched', 'Opening default mail client for Ashvin', 'check');
          this.close();
        });
        this.extraEl.appendChild(form);
      }
    }

    // Tags
    if (this.tagsEl) {
      this.tagsEl.innerHTML = '';
      const tags = item.tags || item.details?.skillsUsed || [];
      if (tags.length > 0) {
        tags.forEach((t) => {
          const tag = document.createElement('span');
          tag.className = 'modal-tag-chip';
          tag.textContent = t;
          this.tagsEl?.appendChild(tag);
        });
      } else {
        const tag = document.createElement('span');
        tag.className = 'modal-tag-chip';
        tag.textContent = 'AK Portfolio';
        this.tagsEl.appendChild(tag);
      }
    }

    // Sidebar metadata
    if (this.dateRowEl && this.dateEl) {
      if (item.date) {
        this.dateEl.textContent = item.date;
        this.dateRowEl.style.display = 'flex';
      } else {
        this.dateRowEl.style.display = 'none';
      }
    }
    if (this.typeEl) this.typeEl.textContent = item.details?.role || categoryLabel;
    if (this.developerRowEl) {
      const hideDeveloper = ['skills', 'education', 'experience'].includes(categoryLabel.toLowerCase());
      this.developerRowEl.style.display = hideDeveloper ? 'none' : 'flex';
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

      const closeActionBtn = document.createElement('button');
      closeActionBtn.className = 'modal-action-btn tertiary';
      closeActionBtn.textContent = '○ Return to XMB';
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
