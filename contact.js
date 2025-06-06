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

//form validation

var userName = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var submit = document.getElementById("submit");

// Now the submit click handler:
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var nameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
  var subjectRegex = /^[A-Za-z\s]+$/;
  var messageRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(userName.value)) {
    document.querySelector(".nameError").style.display = "inline";
  } else {
    document.querySelector(".nameError").style.display = "none";
  }
  if (!emailRegex.test(email.value)) {
    document.querySelector(".emailError").style.display = "inline";
  } else {
    document.querySelector(".emailError").style.display = "none";
  }
  if (!subjectRegex.test(subject.value)) {
    document.querySelector(".subjectError").style.display = "inline";
  } else {
    document.querySelector(".subjectError").style.display = "none";
  }
  if (!messageRegex.test(message.value)) {
    document.querySelector(".messageError").style.display = "inline";
  } else {
    document.querySelector(".messageError").style.display = "none";
  }

  if (
    nameRegex.test(userName.value) &&
    emailRegex.test(email.value) &&
    subjectRegex.test(subject.value) &&
    messageRegex.test(message.value)
  ) {
    alert("Form submitted Successfully");
  }

  userName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
});

function formCheck() {
  if (
    userName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    subject.value.trim() !== "" &&
    message.value.trim() !== ""
  ) {
    submit.removeAttribute("style");
    submit.disabled = false;
  } else {
    submit.disabled = true;
    submit.setAttribute(
      "style",
      "background-color: #e5e7eb; color: #9ca3af; cursor: not-allowed; opacity: 0.6;"
    );
  }
}

userName.addEventListener("input", formCheck);
email.addEventListener("input", formCheck);
subject.addEventListener("input", formCheck);
message.addEventListener("input", formCheck);

formCheck();
