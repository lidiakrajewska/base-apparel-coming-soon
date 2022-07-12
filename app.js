const emailForm = document.querySelector(".email-form");
const email = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon-wrapper");
const errorText = document.querySelector(".error--text");

email.addEventListener("input", check);

function check() {
  if (!email.value.includes("@")) {
    errorIcon.style.display = "flex";
    errorText.style.display = "block";
    emailForm.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
    emailForm.style.border = "1px solid hsl(0, 30%, 82%)";
  }
}
