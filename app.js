// Dropdown button click event
const dropdownButton = document.getElementById("dropdown-btn");
dropdownButton.addEventListener("click",()=>{
    let dropdownContent = document.getElementById("dropdown-container");
    let completeCircle = document.getElementById("complete-circle");
    if (dropdownContent.style.display == "flex") {
      dropdownContent.style.display = "none";
      completeCircle.style.display="none";
    } else {
      dropdownContent.style.display = "flex";
      completeCircle.style.display="block";
    }
})