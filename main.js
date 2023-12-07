window.onload = function () {
  const filterTextButtons = document.getElementById("filter-text");
  const filterDiv = document.getElementsByClassName("filter-hidden")[0];
  let isVisible = true;

  filterTextButtons.addEventListener("click", function () {
    if (isVisible) {
      filterDiv.className = "filter-hidden";
      isVisible = false;
    } else {
      filterDiv.className = "inside-filter";
      isVisible = true;
    }
  });
};
