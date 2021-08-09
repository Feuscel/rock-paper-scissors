const choice = ["Rock", "Paper", "Scissors"];

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
        console.log("hello");
        return "Equality";
    if (playerWin)
        return "You win ! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) ;
    return "You lose ! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
}

function game(){
    for (let index = 0; index < 5; index++) {
        console.log("Choose your play!");
        console.log(playRound(prompt(), computerPlay()));
    }
}

game();