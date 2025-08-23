// GAME
function playGame(pick){
    let humanScore = 0;
    let botScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice){
        console.log('TIE!!!')
        } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        console.log('Human Wins!')
        humanScore += 1;
        } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        console.log('Human Wins!')
        humanScore += 1;
        } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        console.log('Human Wins!')
        humanScore += 1;
        } else {
        console.log('BOT Wins!')
        botScore += 1;
        }
        console.log(`Human: ${humanScore} BOT: ${botScore}`) 
    }

    choices = ["rock", "paper", "scissors"]
    // function getHumanChoice(){
    //     return prompt('Enter your choice: ');
    //     }
    function getComputerChoice() {
            randomChoice = Math.floor(Math.random() * choices.length)
            return choices[randomChoice]
        }
    
    // while (humanScore < 5 || botScore < 5){
    
    
    let computerSelection = getComputerChoice();
    
    playRound(pick, computerSelection);

    //     playRound(humanSelection, computerSelection);
    //     if (humanScore == 5) {
    //         console.log('Champion: HUMAN')
    //         return;
    //     }
    //     if (botScore == 5) {
    //         console.log('Champion: BOT')
    //         return;
    //     }
    // }
}
let human_Pick = '';
// Page
const choice_Button = document.getElementById("parent-button");

choice_Button.addEventListener('click', (e) => {
    if(e.target.classList.contains('rock-btn')){
        human_Pick = "rock";
    }else if(e.target.classList.contains('paper-btn')) {
        human_Pick = "paper"
    }else {
        human_Pick = "scissors";
    }
    playGame(human_Pick);
})
