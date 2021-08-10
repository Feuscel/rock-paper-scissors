const choice = ["Rock", "Paper", "Scissors"];
let scorePlayer = 0;
let scoreComputer = 0;


function computerPlay (){
    randomPlay = Math.floor(Math.random() * 3);
    return choice[randomPlay];
}

function capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection){
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
    const equality = lowerComputerSelection === lowerPlayerSelection;
    const playerWin = (lowerPlayerSelection === "paper"    && lowerComputerSelection === "rock") || 
                      (lowerPlayerSelection === "scissors" && lowerComputerSelection === "paper") || 
                      (lowerPlayerSelection === "rock"     && lowerComputerSelection === "scissors"); 
    if (equality)
        return "Equality";
    if (playerWin){
        scorePlayer++;
        return "You win ! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) ;
    }
    scoreComputer++;
    return "You lose ! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
}

function game(playerSelection){
    let resultRound = playRound(playerSelection, computerPlay());
    let divResultRound = document.getElementById("result");
    let winner = document.getElementById("winner");
    let divScoreComputer = document.getElementById("scoreComputer"); 
    let divScorePlayer = document.getElementById("scorePlayer"); 
    divScoreComputer.innerHTML = "Score Computer = " + scoreComputer;
    divScorePlayer.innerHTML = "Score Player = " + scorePlayer;
    divResultRound.innerHTML = resultRound;
    // console.log("player : " + scorePlayer + " computer : " + scoreComputer);
    if (restartGame()){
        if (scoreComputer === 5)
            winner.innerHTML = "Computer Win !!";
        else if (scorePlayer === 5)
            winner.innerHTML = "Player Win !!";
        scoreComputer = 0, scorePlayer = 0;
    }

}

function restartGame(){
    if (scoreComputer === 5 || scorePlayer === 5)
        return true;
    return false;
}

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");


rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));

