window.onload = function () {
    const filterTextButtons = document.getElementById("telephonebutton");
    const filterDiv = document.getElementById("button-menu")[0];
    let isVisible = false;
 
    filterTextButtons.addEventListener("click", function() {
      if(isVisible) {
          filterDiv.className="button-menu header-button";
          isVisible=false;
       
      }
      else{
          filterDiv.className="button-menu"
          isVisible=true;
         
      }
    });
  };