// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Hero button interaction
  const registerBtn = document.querySelector(".btn-primary");
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      alert("🎉 Thank you for registering! (This can link to a signup page)");
    });
  }

  // Play icon overlay (for video cards if you added them)
  const videoCards = document.querySelectorAll(".video-card");
  videoCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
});
