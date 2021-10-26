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
  var gameMode=0;

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


const firstRow = document.getElementById("first-row");
const rockHandImage = document.getElementById("rock-hand");
const paperHandImage = document.getElementById("paper-hand");
const scissorsHandImage = document.getElementById("scissors-hand");
let playerChoose = "none";
var aiScore =0;
let playerScore=0;
const result = document.getElementById("result");
const aiScoreTable = document.getElementById("ai-score");
const playerScoreTable = document.getElementById("player-score");
const nextRoundButton = document.getElementById("next-round-btn");
const handResultRow =document.getElementById("hand-result-row");

//Change image display function
function imageDisplaysNone() {
  rockHandImage.style.display="none";
  paperHandImage.style.display="none";
  scissorsHandImage.style.display="none";
}
function imageDisplaysBlock() {
  rockHandImage.style.display="block";
  paperHandImage.style.display="block";
  scissorsHandImage.style.display="block";
}


rockHandImage.addEventListener("click",gameRock);
function gameRock(){
  imageDisplaysNone();
  playerChoose="1";
  console.log(playerChoose);
  const hand1 = document.createElement("img");
  hand1.src="./assets/images/rock-hand3.png";
  hand1.className="hand1";
  firstRow.appendChild(hand1);
  const hand1Mirror = document.createElement("img");
  hand1Mirror.className="hand1-mirror";
  hand1Mirror.src="./assets/images/rock-hand3-mirror.png"
  firstRow.appendChild(hand1Mirror);
  aiChoose = Math.floor(Math.random() * 3)+1;
  setTimeout(()=>{
    hand1.style.display="none";
    hand1Mirror.style.display="none";
    if(aiChoose==1) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/rock-hand3.png"
      aiResult.className="ai-result-rock";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==2) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/paper-hand3.png"
      aiResult.className="ai-result-paper";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==3) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/scissors-hand3.png"
      aiResult.className="ai-result-scissors";
      handResultRow.appendChild(aiResult);
    }
    const handResult = document.createElement("img");
    handResult.src="./assets/images/rock-hand3-mirror.png"
    handResult.className="hand-result";
    handResultRow.appendChild(handResult);
    if(playerChoose==aiChoose) {
      result.innerHTML="DRAW";
      result.style.color="#000",
      result.style.display="flex";
    }
    else if (aiChoose==2) {
      if(gameMode==1){
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore+=2;
        aiScoreTable.innerHTML=aiScore;
      }
      else {
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore++;
        aiScoreTable.innerHTML=aiScore;
      }
    }
    else if (aiChoose==3) {
      if(gameMode==1){
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore+=2;
        playerScoreTable.innerHTML=playerScore;
      }
      else {
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore++;
        playerScoreTable.innerHTML=playerScore;
      }    
    }
    nextRoundButton.style.display="block";
    nextRoundButton.addEventListener("click",againGame);
    function againGame(){
      result.style.display="none";
      nextRoundButton.style.display="none";
      handResult.style.display="none";
      handResultRow.innerHTML="";
      imageDisplaysBlock();
    }
  },1600);
}

paperHandImage.addEventListener("click",gamePaper);
function gamePaper() {
  imageDisplaysNone();
  playerChoose="2";
  console.log(playerChoose);
  const hand1 = document.createElement("img");
  hand1.src="./assets/images/rock-hand3.png";
  hand1.className="hand1";
  firstRow.appendChild(hand1);
  const hand1Mirror = document.createElement("img");
  hand1Mirror.className="hand1-mirror";
  hand1Mirror.src="./assets/images/rock-hand3-mirror.png"
  firstRow.appendChild(hand1Mirror);
  aiChoose = Math.floor(Math.random() * 3)+1;
  setTimeout(()=>{
    hand1.style.display="none";
    hand1Mirror.style.display="none";
    if(aiChoose==1) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/rock-hand3.png"
      aiResult.className="ai-result-rock";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==2) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/paper-hand3.png"
      aiResult.className="ai-result-paper";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==3) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/scissors-hand3.png"
      aiResult.className="ai-result-scissors";
      handResultRow.appendChild(aiResult);
    }
    const handResult = document.createElement("img");
    handResult.src="./assets/images/paper-hand3-mirror.png"
    handResult.className="hand-result-paper";
    handResultRow.appendChild(handResult);
    if(playerChoose==aiChoose) {
      result.innerHTML="DRAW";
      result.style.color="#000",
      result.style.display="flex";
    }
    else if (aiChoose==3) {
      if(gameMode==2){
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore+=2;
        aiScoreTable.innerHTML=aiScore;
      }
      else {
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore++;
        aiScoreTable.innerHTML=aiScore;
      }
    }
    else if (aiChoose==1) {
      if(gameMode==2){
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore+=2;
        playerScoreTable.innerHTML=playerScore;
      }
      else {
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore++;
        playerScoreTable.innerHTML=playerScore;
      }        
    }
      nextRoundButton.style.display="block";
      nextRoundButton.addEventListener("click",againGame);
      function againGame(){
        result.style.display="none";
        nextRoundButton.style.display="none";
        handResult.style.display="none";
        handResultRow.innerHTML="";
        imageDisplaysBlock();
      }
  },1600);
}

scissorsHandImage.addEventListener("click",gameScissors);
function gameScissors() {
  imageDisplaysNone();
  playerChoose="3";
  console.log(playerChoose);
  const hand1 = document.createElement("img");
  hand1.src="./assets/images/rock-hand3.png";
  hand1.className="hand1";
  firstRow.appendChild(hand1);
  const hand1Mirror = document.createElement("img");
  hand1Mirror.className="hand1-mirror";
  hand1Mirror.src="./assets/images/rock-hand3-mirror.png"
  firstRow.appendChild(hand1Mirror);
  aiChoose = Math.floor(Math.random() * 3)+1;
  setTimeout(()=>{
    hand1.style.display="none";
    hand1Mirror.style.display="none";
    if(aiChoose==1) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/rock-hand3.png"
      aiResult.className="ai-result-rock";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==2) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/paper-hand3.png"
      aiResult.className="ai-result-paper";
      handResultRow.appendChild(aiResult);
    }
    else if(aiChoose==3) {
      const aiResult = document.createElement("img");
      aiResult.src="./assets/images/scissors-hand3.png"
      aiResult.className="ai-result-scissors";
      handResultRow.appendChild(aiResult);
    }
    const handResult = document.createElement("img");
    handResult.src="./assets/images/scissors-hand3-mirror.png"
    handResult.className="hand-result-scissors";
    handResultRow.appendChild(handResult);
    if(playerChoose==aiChoose) {
      result.innerHTML="DRAW";
      result.style.color="#000",
      result.style.display="flex";
    }
    else if (aiChoose==1) {
      if(gameMode==3){
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore+=2;
        aiScoreTable.innerHTML=aiScore;
      }
      else  {
        result.innerHTML="LOSE";
        result.style.color="#FF0000";
        result.style.display="flex";
        aiScore++;
        aiScoreTable.innerHTML=aiScore;
      }
    }
    else if (aiChoose==2) {
      if(gameMode==3){
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore+=2;
        playerScoreTable.innerHTML=playerScore;
      }
      else {
        result.innerHTML="WIN";
        result.style.color="#008000";
        result.style.display="flex";
        playerScore++;
        playerScoreTable.innerHTML=playerScore;
      }
    }
    nextRoundButton.style.display="block";
    nextRoundButton.addEventListener("click",againGame);
    function againGame(){
      result.style.display="none";
      nextRoundButton.style.display="none";
      handResult.style.display="none";
      handResultRow.innerHTML="";
      imageDisplaysBlock();
    }
  },1600); 
}

