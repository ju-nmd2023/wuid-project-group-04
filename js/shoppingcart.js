// FUNCTIONING DROPDOWN //

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

// VALIDATING DISCOUNT CODE //

document
  .getElementById("addDiscountButton")
  .addEventListener("click", validateDiscountCode);

function validateDiscountCode() {
  const discountCodeInput = document.getElementById("discountInput");
  const discountCode = discountCodeInput.value;
  if (discountCode === "VETTOCHETIKETT10") {
    discountCodeInput.classList.remove("redborder");
  } else {
    discountCodeInput.classList.add("redborder");
  }
}
