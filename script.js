document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (!navbar) return;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      navbar.classList.add("hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
});

const vid = document.getElementById('background-video');
vid.addEventListener('ended', () => { vid.currentTime = 0; vid.play(); });

const navbar = document.getElementById('navbar');
let lastY = window.pageYOffset;

window.addEventListener('scroll', () => {
const y = window.pageYOffset;
if (y > lastY && y > 60) {
  // scrolling down, hide navbar
  navbar.classList.add('hidden');
} else {
  // scrolling up, show it
  navbar.classList.remove('hidden');
}
lastY = y;
});

// grab your navbar and the height of the video section
const nav = document.getElementById('navbar');
const heroHeight = document.querySelector('.video-wrapper').offsetHeight;

window.addEventListener('scroll', () => {
if (window.scrollY > heroHeight) {
  nav.classList.add('scrolled');
} else {
  nav.classList.remove('scrolled');
}
});

// for every project-card:
document.querySelectorAll('.project-card').forEach(card => {
const modal = card.querySelector('.project-modal');
if (!modal) return;                    // skip cards without a modal

const content = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.modal-close');

// 1) open when you click the card (but *not* inside the modal-content)
card.addEventListener('click', e => {
  if (!e.target.closest('.modal-content')) {
    modal.classList.add('active');
  }
});

// 2) prevent clicks *inside* the white box from bubbling up
content.addEventListener('click', e => e.stopPropagation());

// 3) close on ×
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// 4) close when clicking outside the white box
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
});

document.querySelectorAll('.project-card').forEach(card => {
const modalId = card.dataset.modalId;
const modal   = document.getElementById(modalId);
const content = modal.querySelector('.modal-content');
const close   = modal.querySelector('.modal-close');

// open
card.addEventListener('click', () => {
  modal.classList.add('active');
});

// prevent clicks inside white box from bubbling to modal
content.addEventListener('click', e => e.stopPropagation());

// close on × or on overlay
close.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', () => modal.classList.remove('active'));
});

document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('.about-section, .education-section, .work-section');
const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => obs.observe(sec));
});

// at the bottom of script.js

// 1) grab the section
const projectsSection = document.querySelector('.projects-section');

// 2) set up an IntersectionObserver
const projObserver = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    projectsSection.classList.add('visible');
    obs.unobserve(entry.target);
  }
});
}, {
threshold: 0.1
});

// 3) start observing
projObserver.observe(projectsSection);


// Resume modal elements
const resumeIcon    = document.getElementById('resume-icon');
const resumeModal   = document.getElementById('resume-modal');
const resumeClose   = document.querySelector('.resume-modal-close');

// Open modal
resumeIcon.addEventListener('click', e => {
  e.preventDefault();
  resumeModal.classList.add('active');
});

// Close modal on “×”
resumeClose.addEventListener('click', () => {
  resumeModal.classList.remove('active');
});

// Close if clicking outside content
resumeModal.addEventListener('click', e => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove('active');
  }
});

// Accordion behavior for each résumé
document.querySelectorAll('.resume-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;

    // Toggle this one
    item.classList.toggle('open');

    // (Optional) Close the others
    document.querySelectorAll('.resume-item').forEach(other => {
      if (other !== item) other.classList.remove('open');
    });
  });
});

// open on card click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.modalId;              // data-modal-id="modal1"
    document.getElementById(id).classList.add('active');
  });
});

// close on × or backdrop click
document.querySelectorAll('.project-modal').forEach(modal => {
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
});
