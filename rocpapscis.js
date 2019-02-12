function computerPlay(){
	let computerChoice;
    let playNumber = Math.random();
        
    if(playNumber <= 0.33){
        computerChoice = "ROCK";
    }
    else if(playNumber <= 0.66){
        computerChoice = "PAPER";
    }
    else{
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function choiceRock(){
  deleteButtonsChoice();
  deleteMakeMoveT();
  let computerChoice = computerPlay();
  let result = playRound("ROCK", computerChoice);
  finalChoices("ROCK", computerChoice);
  winner(result);
}

function choicePaper(){
  deleteButtonsChoice();
  deleteMakeMoveT();
  let computerChoice = computerPlay();
  let result = playRound("PAPER", computerChoice);
  finalChoices("PAPER", computerChoice);
  winner(result);
}

function choiceScissors(){
  deleteButtonsChoice();
  deleteMakeMoveT();
  let computerChoice = computerPlay();
  let result = playRound("SCISSORS", computerChoice);
  finalChoices("SCISSORS", computerChoice);
  winner(result);
}


function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "TIE";
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
        return "PLAYER";
    }
    else{
        return "COMPUTER";
    }
}

function deleteHome(){
  deleteButtonPlay();
  deleteImagePutin();
  textChoose();
  createButton("ROCK");
  createButton("PAPER");
  createButton("SCISSORS");
}

function deleteButtonPlay(){
  document.getElementById("buttonPlay").style.visibility = "hidden";
}

function deleteImagePutin(){
  document.getElementById("putinTrump").style.visibility = "hidden";
}

function deleteButtonsChoice(){
  document.getElementById("buttonROCK").style.visibility = "hidden";
document.getElementById("buttonPAPER").style.visibility = "hidden";
document.getElementById("buttonSCISSORS").style.visibility = "hidden";
}

function deleteMakeMoveT(){
  document.getElementById("makeMoveT").style.visibility = "hidden";
}

function createButton(option){
  var newButton = document.createElement("button");
  var textButton = document.createTextNode(option);     
  newButton.appendChild(textButton);     
  newButton.id = "button" + option;
  newButton.className = "buttonChoice";
  document.body.appendChild(newButton); 
}

function textChoose(){
  var paragraph = document.createElement("h2");
  var text = document.createTextNode("MAKE YOUR MOVE");
  paragraph.id = "makeMoveT";
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

function finalChoices(playerMove, computerMove){
  var yourChoice = document.createElement("h2");
  var text = document.createTextNode("YOUR MOVE: " + playerMove);
  yourChoice.id = "yourChoiceT";
  yourChoice.appendChild(text);
  document.body.appendChild(yourChoice);
  
  var computerChoice = document.createElement("h2");
  var textComp = document.createTextNode("COMPUTER MOVE: " + computerMove);
  computerChoice.id = "computerChoiceT";
  computerChoice.appendChild(textComp);
  document.body.appendChild(computerChoice);
}

function winner(result){
  /*does calculations*/
  var winnerGame = document.createElement("h2"); 
  /*if(playerWins){
      var text = document.createTextNode("CONGRATULATIONS, YOU WON!");
  }else if(computerWins){
      var text = document.createTextNode("...I GUESS THE COMPUTER IS SMARTER, YOU LOST!");  
  }else{
      var text = document.createTextNode("OH...THATS A TIE");
  }
  */
  var text = document.createTextNode("...I GUESS THE COMPUTER IS SMARTER, YOU LOST!");
  winnerGame.id = "winnerT";
  winnerGame.appendChild(text);
  document.body.appendChild(winnerGame);
}

function game(){
  var btn = document.getElementById("buttonPlay");
  btn.addEventListener('click', deleteHome);  
}


game();


/*deleteButtonPlay();
deleteImagePutin();
textChoose();
createButton("ROCK");
createButton("PAPER");
createButton("SCISSORS");
deleteButtonsChoice();
deleteMakeMoveT();
finalChoices("ROCK", "SCISSORS");
winner("ROCK", "SCISSORS");*/


