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

//checkbox

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const products = document.querySelectorAll(".product");

function updateFilter() {
  let selectedOccasion = null;
  let selectedColor = null;
  let selectedArrival = null;

  for (let i = 0; i < checkboxes.length; i++) {
    const cb = checkboxes[i];
    if (cb.checked) {
      if (cb.id === "party" || cb.id === "beach") selectedOccasion = cb.id;
      else if (["red", "blue", "white", "green"].includes(cb.id))
        selectedColor = cb.id;
      else if (cb.id === "new" || cb.id === "old") selectedArrival = cb.id;
    }
  }

  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    const occasion = prod.getAttribute("data-occasion");
    const color = prod.getAttribute("data-color");
    const arrival = prod.getAttribute("data-arrival");

    const show =
      (selectedOccasion === null || selectedOccasion === occasion) &&
      (selectedColor === null || selectedColor === color) &&
      (selectedArrival === null || selectedArrival === arrival);

    prod.style.display = show ? "" : "none";
  }
}

checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    if (!cb.checked) return;

    if (cb.id === "party" || cb.id === "beach") {
      checkboxes.forEach((other) => {
        if (other !== cb && (other.id === "party" || other.id === "beach"))
          other.checked = false;
      });
    } else if (["gray", "blue", "white", "green"].includes(cb.id)) {
      checkboxes.forEach((other) => {
        if (
          other !== cb &&
          ["gray", "blue", "white", "green"].includes(other.id)
        )
          other.checked = false;
      });
    } else if (cb.id === "new" || cb.id === "old") {
      checkboxes.forEach((other) => {
        if (other !== cb && (other.id === "new" || other.id === "old"))
          other.checked = false;
      });
    }
    updateFilter();
  });
});

updateFilter();

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

const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");
const track = document.getElementById("carouselWrapper");

let currentSlide = 0;
const maxSlides = 3;

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % maxSlides;
  track.style.marginLeft = `-${currentSlide * 100}vw`;
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
  track.style.marginLeft = `-${currentSlide * 100}vw`;
});
