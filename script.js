console.log("JS loaded");
document.addEventListener('DOMContentLoaded', function() {
  // --- Hero Image Slider ---
  const heroImages = [
    "images/hero.jpg",      // default image
    "images/hero2.jpg",
    "images/hero3.jpg"
  ];
  let currentHero = 0;
  const heroImg = document.querySelector('.hero img');

  function showHeroImage(idx) {
    if (heroImg && heroImages[idx]) {
      heroImg.src = heroImages[idx];
    }
  }
  function nextHeroImage() {
    currentHero = (currentHero + 1) % heroImages.length;
    showHeroImage(currentHero);
  }
  if (heroImg) {
    heroImg.addEventListener('click', nextHeroImage);
    setInterval(nextHeroImage, 4000); // Change image every 4 seconds
  }

  // --- Join Now Button ---
  const joinBtn = document.getElementById('joinNow');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert("Welcome to Elite Gym! Let's get fit together 💪");
    });
  }

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
      // Simple email validation
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Thank you for contacting us!");
      contactForm.reset();
    });
  }
});