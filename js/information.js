// FOR CHANGING COLOR OF DELIVERY OPTIONS WHEN SELECTED //

const postAgentRadio = document.getElementById("postAgentRadio");
const postAgentContainer = document.getElementById("postAgentContainer");

postAgentRadio.addEventListener("click", function () {
  homeDeliveryContainer.classList.remove("selectedradio");
  postAgentContainer.classList.toggle("selectedradio", this.checked);
});

const homeDeliveryRadio = document.getElementById("homeDeliveryRadio");
const homeDeliveryContainer = document.getElementById("homeDeliveryContainer");

homeDeliveryRadio.addEventListener("click", function () {
  postAgentContainer.classList.remove("selectedradio");
  homeDeliveryContainer.classList.toggle("selectedradio", this.checked);
});
