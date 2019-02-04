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
    let = playerChoice = window.prompt("Choose between rock, paper or scissors","rock");
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
        
function game(){
    let numberGames = 0;
    let playWins = 0;
    while(numberGames != 5) {
        let compChoice = computerPlay();
        let playChoice = playerPlay();
        let result = playRound(playChoice, compChoice);
        console.log(result);
        if(result.substring(4,7) == "win"){
            playWins++;
        }
        numberGames++;
    } 
    if(playWins >= 3){
        return "You won the game! The results were " + playWins.toString() + " - " + (5 - playWins).toString();
    }
    else{
        return "You lost the game! The results were " + playWins.toString() + " - " + (5 - playWins).toString();
    }
}

console.log(game());
