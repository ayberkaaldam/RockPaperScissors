// Dropdown button click event
const dropdownButton = document.getElementById("dropdown-btn");
dropdownButton.addEventListener("click",()=>{
    let dropdownContent = document.getElementById("dropdown-container");
    if (dropdownContent.style.display == "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
})