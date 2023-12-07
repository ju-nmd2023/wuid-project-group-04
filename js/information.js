// FOR DROPDOWN MENU ON INFORMATION PAGE //

document.getElementById("select-delivery-location");
document.addEventListener("click", function () {
  this.nextElementSibling.classList.toggle("dropdown-show-content");
});

// function redirectToPurchase() {
//   window.location.href = "purchase.html";
// }

// function validateForm() {
//   var email = document.forms["purchaseForm"]["email"].value;
//   var name = document.forms["purchaseForm"]["name"].value;

//   if (email === "" || name === "") {
//     alert("All fields must be filled out");
//     return false;
//   }

//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     alert("Enter valid email");
//     return false;
//   }
//   return true;
// }

// document
//   .getElementById("paymentButton")
//   .addEventListener("click", validatePurchaseForm);

// function validatePurchaseForm() {
//   const emailInput = document.getElementById("emailInputField");
//   const email = emailInput.value;
//   if (email === "@ .") {
//     emailInput.classList.remove("redborder");
//   } else {
//     emailInput.classList.add("redborder");
//     alert("Error, use @");
//   }
// }
