export const initScrollAnimations = () => {
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   const targets = document.querySelectorAll('.reveal-on-scroll, .line-reveal');
   if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
   }

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add('is-revealed');
               observer.unobserve(entry.target);
            }
         });
      },
      {
         rootMargin: '0px 0px -40px 0px',
         threshold: 0.05,
      }
   );

   targets.forEach((el) => observer.observe(el));

   // Fallback for browsers without animation-timeline: scroll()
   if (!CSS.supports || !CSS.supports('animation-timeline', 'scroll()')) {
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
         let ticking = false;
         window.addEventListener(
            'scroll',
            () => {
               if (!ticking) {
                  window.requestAnimationFrame(() => {
                     const h = document.documentElement.scrollHeight - window.innerHeight;
                     const progress = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
                     progressBar.style.transform = `scaleX(${progress})`;
                     ticking = false;
                  });
                  ticking = true;
               }
            },
            { passive: true }
         );
      }
   }
};

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
   initScrollAnimations();
}
