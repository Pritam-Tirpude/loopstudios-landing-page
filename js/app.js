const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const mobileImg = document.querySelector(".mobile-img");
const navLinksLI = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  if (navLinks.classList.contains("open")) {
    mobileImg.src = "./images/icon-close.svg";
  } else {
    mobileImg.src = "./images/icon-hamburger.svg";
  }

  navLinksLI.forEach((link) => {
    link.classList.toggle("animate");
  });
});
