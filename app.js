// Dropdown button click event
let dropdownButton = document.getElementById("dropdown-btn");
dropdownButton.addEventListener("click",dropdownEventDefault);

// Dropdown event
let dropdownContent = document.getElementById("dropdown-container");
let completeCircle = document.getElementById("complete-circle");
function dropdownEventDefault() {
  if (dropdownContent.style.display == "flex") {
    dropdownContent.style.display = "none";
    completeCircle.style.display="none";
  } 
  else {
    dropdownContent.style.display = "flex";
    completeCircle.style.display="block";  
    completeCircle.style.zIndex="1";
    }  
} 

//Click on Rock Character
let rockLogo = document.getElementById("rock-bg");
rockLogo.addEventListener("click", changeNeonTextRock);
rockLogo.addEventListener("click", changeBackgroundColorRock);
rockLogo.addEventListener("click",changeCharacterLogoRock);
rockLogo.addEventListener("click",dropdownEventDefault);
rockLogo.addEventListener("click",changeGameModeRock);



//Click on Paper Character
const paperLogo = document.getElementById("paper-bg");
paperLogo.addEventListener("click", changeNeonTextPaper);
paperLogo.addEventListener("click", changeBackgroundColorPaper);
paperLogo.addEventListener("click", changeCharacterLogoPaper);
paperLogo.addEventListener("click", dropdownEventDefault);
paperLogo.addEventListener("click",changeGameModePaper);


//Click on Scissors Character
const scissorsLogo = document.getElementById("scissors-bg");
scissorsLogo.addEventListener("click",changeNeonTextScissors);
scissorsLogo.addEventListener("click", changeBackgroundColorScissors);
scissorsLogo.addEventListener("click", changeCharacterLogoScissors);
scissorsLogo.addEventListener("click", dropdownEventDefault);
scissorsLogo.addEventListener("click",changeGameModeScissors);


//Click on Default Character
const defaultLogo = document.getElementById("default-logo");
defaultLogo.addEventListener("click", changeNeonTextDefault);
defaultLogo.addEventListener("click",changeBackgroundColorDefault);



//Change character logo
const dropdownFirstItem= document.getElementById("dropdown-first-item");
const dropdownSecondItem= document.getElementById("dropdown-second-item");
const dropdownThirdItem= document.getElementById("dropdown-third-item");
function changeCharacterLogoRock() {
  dropdownButton.innerHTML =`<img class="logo-image" style="z-index:2" id="rock-bg" src="./assets/images/rock-logo.png"></div>`
  dropdownFirstItem.style.display="none";
  dropdownSecondItem.style.display="flex";
  dropdownThirdItem.style.display="flex";
}
function changeCharacterLogoPaper() {
  dropdownButton.innerHTML=`<img class="logo-image" style="z-index:2" id="paper-bg" src="./assets/images/paper-logo.png">`;
  dropdownFirstItem.style.display="flex";
  dropdownSecondItem.style.display="none";
  dropdownThirdItem.style.display="flex";
}
function changeCharacterLogoScissors() {
  dropdownButton.innerHTML=`<img class="logo-image" style="z-index:2;background-color:#01cae6" id="paper-bg" src="./assets/images/scissors-logo.png">`;
  dropdownFirstItem.style.display="flex";
  dropdownSecondItem.style.display="flex";
  dropdownThirdItem.style.display="none";
}


// Neon Text Changer
const rockText = document.getElementById("rock-text"); 
function changeNeonTextRock() {   
  rockText.style.textShadow = "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #ee3393,0 0 82px #ee3393,0 0 92px #ee3393,0 0 102px #ee3393,0 0 151px #ee3393";
  paperText.style.textShadow="";
  scissorsText.style.textShadow="";
}
const paperText = document.getElementById("paper-text");
function changeNeonTextPaper() {
  paperText.style.textShadow ="0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #f9ca00,0 0 82px #f9ca00,0 0 92px #f9ca00,0 0 102px #f9ca00,0 0 151px #f9ca00";
  rockText.style.textShadow="";
  scissorsText.style.textShadow="";
}
const scissorsText = document.getElementById("scissors-text");
function changeNeonTextScissors() {
  scissorsText.style.textShadow ="0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #01cae6,0 0 82px #01cae6,0 0 92px #01cae6,0 0 102px #01cae6,0 0 151px #01cae6";
  rockText.style.textShadow="";
  paperText.style.textShadow="";
}
function changeNeonTextDefault() {
  rockText.style.textShadow="";
  paperText.style.textShadow="";
  scissorsText.style.textShadow="";
}


//Change Background Color
function changeBackgroundColorRock(){
  document.body.style.backgroundColor="#ee3390";
}
function changeBackgroundColorPaper() {
  document.body.style.backgroundColor="#f9ca00";
}
function changeBackgroundColorScissors() {
  document.body.style.backgroundColor="#01cae6";
}
function changeBackgroundColorDefault() {
  document.body.style="#000";
}

//Game Mode Change
let gameMode =0;

function changeGameModeRock () {
  gameMode =1 ;
  console.log(gameMode);
}
function changeGameModePaper () {
  gameMode=2;
  console.log(gameMode);
}
function changeGameModeScissors() {
  gameMode =3;
  console.log(gameMode);
}