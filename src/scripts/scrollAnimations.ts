import { animate, inView, stagger } from 'motion';

// Registry of cleanup functions for Astro view transitions
let cleanups: Array<() => void> = [];

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/**
 * 1. HERO REVEAL ORCHESTRATION
 * Staged entrance: Name first -> Role & description next -> Location & CTAs with subtle stagger
 */
function initHeroMotion(reducedMotion: boolean) {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const badge = document.getElementById('hero-badge');
  const title = document.getElementById('hero-title');
  const role = document.getElementById('hero-role-wrapper') || document.getElementById('hero-typewriter');
  const desc = document.getElementById('hero-desc');
  const location = document.getElementById('hero-location');
  const actions = document.getElementById('hero-actions');
  const portrait = document.getElementById('hero-portrait');

  if (reducedMotion) {
    [badge, title, role, desc, location, actions, portrait].forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
    return;
  }

  // 1. Availability badge
  if (badge) {
    animate(badge, { opacity: [0, 1], y: [10, 0] }, { duration: 0.45, ease: EASE_EDITORIAL });
  }

  // 2. Name first (slight upward move, smooth fade)
  if (title) {
    animate(title, { opacity: [0, 1], y: [16, 0] }, { duration: 0.55, delay: 0.08, ease: EASE_EDITORIAL });
  }

  // 3. Role & description next
  if (role) {
    animate(role, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: 0.18, ease: EASE_EDITORIAL });
  }
  if (desc) {
    animate(desc, { opacity: [0, 1], y: [14, 0] }, { duration: 0.5, delay: 0.24, ease: EASE_EDITORIAL });
  }

  // 4. Location and CTA buttons with subtle stagger
  if (location) {
    animate(location, { opacity: [0, 1], y: [10, 0] }, { duration: 0.45, delay: 0.3, ease: EASE_EDITORIAL });
  }

  if (actions) {
    const buttons = actions.children;
    if (buttons.length > 0) {
      animate(
        buttons,
        { opacity: [0, 1], y: [12, 0] },
        { delay: stagger(0.08, { start: 0.36 }), duration: 0.45, ease: EASE_EDITORIAL }
      );
    }
  }

  // 5. Hero Portrait Frame
  if (portrait) {
    animate(portrait, { opacity: [0, 1], y: [16, 0], scale: [0.98, 1] }, { duration: 0.65, delay: 0.2, ease: EASE_EDITORIAL });
  }
}

/**
 * 2. SECTION REVEALS WITH MOTION inView()
 * Staggers sections and editorial cards subtly as they scroll into view
 */
function initSectionReveals(reducedMotion: boolean) {
  const handledElements = new Set<Element>();

  // If reduced motion is active, ensure immediate visibility
  if (reducedMotion) {
    const targets = document.querySelectorAll('.reveal-on-scroll, .line-reveal');
    targets.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('is-revealed');
      }
    });
    return;
  }

  // 2a. ABOUT SECTION (Stagger About Me, Work Ethic, Personal Details)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const heading = aboutSection.querySelector(':scope > div:first-child');
    const cards = aboutSection.querySelectorAll('.grid > div');

    if (heading) handledElements.add(heading);
    cards.forEach((c) => handledElements.add(c));

    const stopAbout = inView(
      aboutSection,
      () => {
        if (heading) {
          animate(heading, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        }
        if (cards.length) {
          animate(
            cards,
            { opacity: [0, 1], y: [24, 0] },
            { delay: stagger(0.12, { start: 0.1 }), duration: 0.5, ease: EASE_EDITORIAL }
          );
        }
      },
      { amount: 0.15 }
    );
    cleanups.push(stopAbout);
  }

  // 2b. PROJECTS SECTION (Heading + Carousel Container)
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    const heading = projectsSection.querySelector(':scope > div:first-child');
    const carouselWrapper = document.getElementById('projects-carousel-wrapper');

    if (heading) handledElements.add(heading);
    if (carouselWrapper) handledElements.add(carouselWrapper);

    const stopProjects = inView(
      projectsSection,
      () => {
        if (heading) {
          animate(heading, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        }
        if (carouselWrapper) {
          animate(carouselWrapper, { opacity: [0, 1], y: [20, 0] }, { duration: 0.55, delay: 0.12, ease: EASE_EDITORIAL });
        }
      },
      { amount: 0.12 }
    );
    cleanups.push(stopProjects);
  }

  // 2c. EXPERIENCE SECTION (Editorial Timeline Progressive Entrance)
  const expSection = document.getElementById('experience');
  if (expSection) {
    const heading = expSection.querySelector(':scope > div:first-child');
    const timelineItems = expSection.querySelectorAll('.relative.border-l > div');

    if (heading) handledElements.add(heading);
    timelineItems.forEach((item) => handledElements.add(item));

    const stopExp = inView(
      expSection,
      () => {
        if (heading) {
          animate(heading, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        }
        if (timelineItems.length) {
          animate(
            timelineItems,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.12, { start: 0.1 }), duration: 0.5, ease: EASE_EDITORIAL }
          );
        }
      },
      { amount: 0.15 }
    );
    cleanups.push(stopExp);
  }

  // 2d. SKILLS SECTION (Staggered Skill Group Cards)
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const heading = skillsSection.querySelector(':scope > div:first-child');
    const cards = skillsSection.querySelectorAll('.grid > div');

    if (heading) handledElements.add(heading);
    cards.forEach((c) => handledElements.add(c));

    const stopSkills = inView(
      skillsSection,
      () => {
        if (heading) {
          animate(heading, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        }
        if (cards.length) {
          animate(
            cards,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.06, { start: 0.1 }), duration: 0.45, ease: EASE_EDITORIAL }
          );
        }
      },
      { amount: 0.15 }
    );
    cleanups.push(stopSkills);
  }

  // 2e. CONTACT SECTION (Stagger Direct Details & Contact Form)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const heading = contactSection.querySelector(':scope > div:first-child');
    const columns = contactSection.querySelectorAll('.grid > div');

    if (heading) handledElements.add(heading);
    columns.forEach((col) => handledElements.add(col));

    const stopContact = inView(
      contactSection,
      () => {
        if (heading) {
          animate(heading, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        }
        if (columns.length) {
          animate(
            columns,
            { opacity: [0, 1], y: [24, 0] },
            { delay: stagger(0.12, { start: 0.1 }), duration: 0.5, ease: EASE_EDITORIAL }
          );
        }
      },
      { amount: 0.15 }
    );
    cleanups.push(stopContact);
  }

  // 2f. GENERIC REVEAL TARGETS (On other pages or unhandled sections)
  const genericTargets = document.querySelectorAll('.reveal-on-scroll, .line-reveal');
  genericTargets.forEach((el) => {
    if (handledElements.has(el)) return;

    const stopGeneric = inView(
      el,
      () => {
        animate(el, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_EDITORIAL });
        el.classList.add('is-revealed');
      },
      { amount: 0.15 }
    );
    cleanups.push(stopGeneric);
  });
}

/**
 * 3. SCROLL PROGRESS BAR FALLBACK
 */
function initProgressBarFallback() {
  if (!CSS.supports || !CSS.supports('animation-timeline', 'scroll()')) {
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const progress = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
            progressBar.style.transform = `scaleX(${progress})`;
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }
  }
}

/**
 * MASTER INITIALIZATION
 */
export const initMotionAnimations = () => {
  // Clean up any previously attached Motion inView observers before re-initialization
  cleanups.forEach((fn) => {
    try {
      fn();
    } catch (_) {}
  });
  cleanups = [];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeroMotion(prefersReducedMotion);
  initSectionReveals(prefersReducedMotion);
  initProgressBarFallback();
};

// Lifecycle Hooks (supports initial load and Astro ViewTransitions)
document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((fn) => {
    try {
      fn();
    } catch (_) {}
  });
  cleanups = [];
});

document.addEventListener('astro:page-load', initMotionAnimations);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotionAnimations);
} else {
  initMotionAnimations();
}
