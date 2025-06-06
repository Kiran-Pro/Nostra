//Offer

var offer = document.getElementById("offer");

offer.addEventListener(
  "click",

  function () {
    offer.style.display = "none";
  }
);

//heart
var empty_hearts = document.querySelectorAll(".empty_heart");

empty_hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.src.includes("blackheart.png")) {
      heart.src = "./assets/icons/redheart.png";
    } else {
      heart.src = "./assets/icons/blackheart.png";
    }
  });
});

//sidebar

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  if (!menu || !mobileMenu || !closeBtn) {
    console.error("Some menu elements are missing");
    return;
  }

  menu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
});

//image slide

const carouselWrapper = document.getElementById("carouselWrapper");
const totalSlides = carouselWrapper.children.length;
let currentIndex = 0;

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("carouselNext").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.getElementById("carouselPrev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});
