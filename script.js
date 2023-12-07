window.onload = function () {
    const filterTextButtons = document.getElementById("filter-text");
    const filterDiv = document.getElementById("inside-filter");
    let isVisible = false;
 
    filterTextButtons.addEventListener("click", function() {
      if(isVisible) {
          filterDiv.className="inside-filter filter-hidden";
          isVisible=false;
       
      }
      else{
          filterDiv.className="inside-filter"
          isVisible=true;
         
      }
    });
  };