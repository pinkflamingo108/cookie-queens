// Screen display

const iconSelect = document.querySelector(".icon");
const navSelect = document.querySelector(".nav-container");
const navLinks = document.querySelector(".nav-links");

iconSelect.addEventListener("click", function () {
  navSelect.classList.toggle("absolute");
  navLinks.classList.toggle("absolute");
  iconSelect.style.position = "absolute";
  iconSelect.style.paddingRight = "21px";
});

// Nested Navbar

const listItems = document.querySelector(".list-items");
const subMenu1 = document.querySelector(".sub-menu-1");

listItems.addEventListener("mouseover", clickMenu);
listItems.addEventListener("click", clickMenu);

function clickMenu(e) {
  if (subMenu1.style.display === "none") {
    subMenu1.style.display = "block";
    subMenu1.style.opacity = ".92";
  } else {
    subMenu1.style.display = "none";
  }

  e.preventDefault();
}

// slider

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;

let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", (e) => {
  nextSlide();
});

prev.addEventListener("click", (e) => {
  prevSlide();
});

// Auto Slide

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
