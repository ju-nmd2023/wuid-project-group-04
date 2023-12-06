// FUNCTIONING DROPDOWN //
window.onload = function () {};

document
  .getElementById("descriptionButton")
  .addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("dropdown-show-content");
  });

document
  .getElementById("careInstructionsButton")
  .addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("dropdown-show-content");
  });
