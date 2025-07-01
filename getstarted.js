// Typing effect
const text = "Kempya Catering Service";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 100);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Fade in container
  document.querySelector(".container").classList.add("visible");

  // Start typing animation
  typeLetter();

  // Delay form animation
  const form = document.getElementById("contact-form");
  form.style.opacity = 0;
  setTimeout(() => {
    form.style.transition = "opacity 1s";
    form.style.opacity = 1;
  }, 2000);
});

