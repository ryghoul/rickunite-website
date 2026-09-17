document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("landing-gate");
  if (!gate) return;

  const html = document.documentElement;
  const enterBtn = document.getElementById("enter-site-btn");

  // === ENTER SITE ===
  enterBtn?.addEventListener("click", () => {
    gate.classList.add("gate-hidden");
    html.classList.remove("gate-locked");
  });

  gate.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && gate.classList.contains("gate-hidden")) {
      gate.style.display = "none";
    }
  });
});
