function computerPlay(){
  let selection = ["ROCK", "PAPER", "SCISSORS"];
  let randomInt = Math.floor(Math.random() * 3);
  return selection[randomInt];
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
  else if((playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
  (playerChoice == "PAPER" && computerChoice == "ROCK") ||
  (playerChoice == "SCISSORS" && computerChoice == "PAPER")) {
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
  addEventListenerButtons();
}

function addEventListenerButtons(){
  var rock = document.getElementById("buttonROCK");
  rock.addEventListener('click', choiceRock); 
  var paper = document.getElementById("buttonPAPER");
  paper.addEventListener('click', choicePaper);
  var scissors = document.getElementById("buttonSCISSORS");
  scissors.addEventListener('click', choiceScissors);
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

function createButtonPlayAgain(){
  var newButton = document.createElement("button");
  var textButton = document.createTextNode("PLAY AGAIN");
  newButton.appendChild(textButton);
  newButton.id = "buttonAgain";
  document.body.appendChild(newButton);
  return newButton;
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
  var winnerGame = document.createElement("h2"); 
  if(result == "PLAYER"){
      var text = document.createTextNode("CONGRATULATIONS, YOU WON!");
  }else if(result == "COMPUTER"){
      var text = document.createTextNode("...I GUESS THE COMPUTER IS SMARTER, YOU LOST!");  
  }else{
      var text = document.createTextNode("OH...THATS A TIE");
  }
  winnerGame.id = "winnerT";
  winnerGame.appendChild(text);
  document.body.appendChild(winnerGame);
  var button = createButtonPlayAgain();
  button.addEventListener('click', playAgain);
}

function playAgain(){
  window.location.reload(true);
}

function game(){
  var btn = document.getElementById("buttonPlay");
  btn.addEventListener('click', deleteHome);    
}

game();


