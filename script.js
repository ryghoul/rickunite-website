document.addEventListener("DOMContentLoaded", () => {
  // === SCROLL NAVBAR BEHAVIOR ===
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (!navbar) return;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
    lastScrollY = currentScrollY;
  });

  // === BACKGROUND VIDEO LOOP ===
  const vid = document.getElementById('background-video');
  if (vid) {
    vid.addEventListener('ended', () => {
      vid.currentTime = 0;
      vid.play();
    });
  }

  // === SCROLL-TOGGLE SCROLLED CLASS ===
  const heroHeight = document.querySelector('.video-wrapper')?.offsetHeight || 300;
  window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // === RESUME MODAL ===
  const resumeIcons  = document.querySelectorAll('.resume-icon');
  const resumeModal  = document.getElementById('resume-modal');
  const resumeClose  = document.querySelector('.resume-modal-close');

  resumeIcons.forEach(icon => {
    icon.addEventListener('click', e => {
      e.preventDefault();
      resumeModal.classList.add('active');
    });
  });

  resumeClose?.addEventListener('click', () => {
    resumeModal.classList.remove('active');
  });

  resumeModal?.addEventListener('click', e => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
    }
  });

  // === RESUME ACCORDION ===
  document.querySelectorAll('.resume-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
      document.querySelectorAll('.resume-item').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
    });
  });

  // === PROJECT MODALS ===
  document.querySelectorAll('.project-card').forEach(card => {
    const modalId = card.dataset.modalId;
    const modal   = document.getElementById(modalId);
    const content = modal?.querySelector('.modal-content');
    const close   = modal?.querySelector('.modal-close');

    if (!modal || !content || !close) return;

    card.addEventListener('click', () => {
      modal.classList.add('active');
    });

    content.addEventListener('click', e => e.stopPropagation());

    close.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // === SECTION FADE-IN ON SCROLL ===
  const sections = document.querySelectorAll('.about-section, .education-section, .work-section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => sectionObserver.observe(sec));

  // === PROJECT SECTION FADE-IN ===
  const projectsSection = document.querySelector('.projects-section');
  const projObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectsSection.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (projectsSection) {
    projObserver.observe(projectsSection);
  }
});
