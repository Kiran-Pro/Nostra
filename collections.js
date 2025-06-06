//offer

var offer = document.getElementById("offer");

offer.addEventListener(
  "click",

  function () {
    offer.style.display = "none";
  }
);

//menu
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

//checkbox

// const checkboxes = document.querySelectorAll("input[type=checkbox]");
// const products = document.querySelectorAll(".product");

// function updateFilter() {
//   let selectedOccasion = null;
//   let selectedColor = null;
//   let selectedArrival = null;

//   for (let i = 0; i < checkboxes.length; i++) {
//     const cb = checkboxes[i];
//     if (cb.checked) {
//       if (cb.id === "party" || cb.id === "beach") selectedOccasion = cb.id;
//       else if (["red", "blue", "white", "green"].includes(cb.id))
//         selectedColor = cb.id;
//       else if (cb.id === "new" || cb.id === "old") selectedArrival = cb.id;
//     }
//   }

//   for (let i = 0; i < products.length; i++) {
//     const prod = products[i];
//     const occasion = prod.getAttribute("data-occasion");
//     const color = prod.getAttribute("data-color");
//     const arrival = prod.getAttribute("data-arrival");

//     const show =
//       (selectedOccasion === null || selectedOccasion === occasion) &&
//       (selectedColor === null || selectedColor === color) &&
//       (selectedArrival === null || selectedArrival === arrival);

//     prod.style.display = show ? "" : "none";
//   }
// }

// checkboxes.forEach((cb) => {
//   cb.addEventListener("change", () => {
//     if (!cb.checked) return;

//     if (cb.id === "party" || cb.id === "beach") {
//       checkboxes.forEach((other) => {
//         if (other !== cb && (other.id === "party" || other.id === "beach"))
//           other.checked = false;
//       });
//     } else if (["gray", "blue", "white", "green"].includes(cb.id)) {
//       checkboxes.forEach((other) => {
//         if (
//           other !== cb &&
//           ["gray", "blue", "white", "green"].includes(other.id)
//         )
//           other.checked = false;
//       });
//     } else if (cb.id === "new" || cb.id === "old") {
//       checkboxes.forEach((other) => {
//         if (other !== cb && (other.id === "new" || other.id === "old"))
//           other.checked = false;
//       });
//     }
//     updateFilter();
//   });
// });

// updateFilter();

//search filter

var search = document.getElementById("search");
var products = document.getElementById("product-container");

var productNameList = products.querySelectorAll(".product");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (count = 0; count < productNameList.length; count++) {
    if (
      productNameList[count]
        .querySelector("h2")
        .textContent.toUpperCase()
        .indexOf(enteredValue) < 0
    ) {
      productNameList[count].style.display = "none";
    } else {
      productNameList[count].style.display = "block";
    }
  }
});
