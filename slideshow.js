document.querySelectorAll("[data-slides]").forEach(slideshow => {
  const slides = slideshow.querySelectorAll(".slide");
  let index = 0;

  const showSlide = (i) => {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  };

  slideshow.querySelector("[data-next]")?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  slideshow.querySelector("[data-prev]")?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
});
