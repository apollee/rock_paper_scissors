function computerPlay(){
	let computerChoice;
    let playNumber = Math.random();
        
    if(playNumber <= 0.33){
        computerChoice = "rock";
    }
    else if(playNumber <= 0.66){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playerPlay(){
    let playerChoice = window.prompt("Choose between rock, paper or scissors","rock");
    return playerChoice;
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "It's a tie! No one wins";
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
        return "You win this round! " + playerChoice + " beats " + computerChoice + " .";
    }
    else{
        return "You lose this round! " + computerChoice +  " beats " + playerChoice + " .";
    }
}

function deleteButtonPlay(){
  document.getElementById("buttonPlay").style.visibility = "hidden";
}

function deleteImagePutin(){
  document.getElementById("putinTrump").style.visibility = "hidden";
}

function createButton(option){
  var newButton = document.createElement("button");
  var textButton = document.createTextNode(option);     
  newButton.appendChild(textButton);     
  newButton.id = "button" + option;
  document.body.appendChild(newButton); 
}

function textChoose(){
  var paragraph = document.createElement("h2");
  var text = document.createTextNode("MAKE YOUR MOVE");
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

deleteImagePutin();
textChoose();
createButton("ROCK");
