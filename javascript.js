// GAME
let humanScore = 0;
let botScore = 0;

const h1Score = document.getElementById("humScore");
const b2Score = document.getElementById("botScore")
const winnerDisplay = document.querySelector(".roundWinner");
const championDisplay = document.getElementById("champion");
const playerPicks = document.querySelector(".playerChoices");
const ruleS = document.querySelector(".ruling");
const gameRule = ruleS.textContent;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        playerPicks.textContent = `${humanChoice.toUpperCase()} negates ${computerChoice.toUpperCase()}`;
        winnerDisplay.textContent = "TIE! Let's try again!"
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        playerPicks.textContent = `${humanChoice.toUpperCase()} beats SCISSORS`;
        winnerDisplay.textContent = "Monkey WON. Lucky!"
        humanScore += 1;
        h1Score.textContent = humanScore;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        playerPicks.textContent = `${humanChoice.toUpperCase()} beats PAPER`;
        winnerDisplay.textContent = "Monkey WON. Lucky!"
        humanScore += 1;
        h1Score.textContent = humanScore;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        playerPicks.textContent = `${humanChoice.toUpperCase()} beats ROCK`;
        winnerDisplay.textContent = "Monkey WON. Lucky!"
        humanScore += 1;
        h1Score.textContent = humanScore;
    } else {
        playerPicks.textContent = `${humanChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}`
        winnerDisplay.textContent = "BOT WON. Seriously?"
        botScore += 1;
        b2Score.textContent = botScore;
    }
}

choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
        randomChoice = Math.floor(Math.random() * choices.length)
        return choices[randomChoice]
    }   

function winner(){
    if (humanScore == 5) {
        championDisplay.textContent = "CHAMPION: HUMAN";
        humanScore = 0;
        botScore = 0;
        h1Score.textContent = humanScore;
        b2Score.textContent = botScore;
        return;
    }
    if (botScore == 5) {
        championDisplay.textContent = "CHAMPION: BOT";
        humanScore = 0;
        botScore = 0;
        h1Score.textContent = humanScore;
        b2Score.textContent = botScore;
        
        return;
    }
    championDisplay.textContent = gameRule;
}

// Page
const choice_Button = document.getElementById("parent-button");

let human_Pick = '';
choice_Button.addEventListener('click', (e) => {
    if(e.target.classList.contains('rock-btn')){
        human_Pick = "rock";
        computerSelection = getComputerChoice();
    }else if(e.target.classList.contains('paper-btn')) {
        human_Pick = "paper";
        computerSelection = getComputerChoice();
    }else if(e.target.classList.contains('scissors-btn')){
        human_Pick = "scissors";
        computerSelection = getComputerChoice();
    }else {
        pass
    }
    console.log(human_Pick);
    playRound(human_Pick, computerSelection);
    winner();
    
})


