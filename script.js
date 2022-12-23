
const choises = ["Rock", "Paper", "Scisors"];

function getComputerChoise(){
    return choises[Math.floor(Math.random()*choises.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
        console.log(`Try Again! ${playerSelection} is equal ${computerSelection}`);
    }else
    if(playerSelection=='Rock' && computerSelection=='Scisors' || playerSelection=='Paper'&&computerSelection=='Rock' || playerSelection=='Scisors'&&computerSelection=='Paper'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }else{
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game(){
    for(let i = 0; i < 5; i ++)
    {
        let playerSelection = window.prompt("Type your choice", "");
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        // let playerSelection = getComputerChoise();
        let computerSelection = getComputerChoise();
        playRound(playerSelection, computerSelection);
    }
    
}

game();
