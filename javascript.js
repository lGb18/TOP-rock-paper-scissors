function playGame(){
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
    function getHumanChoice(){
        return prompt('Enter your choice: ');
        }
    function getComputerChoice() {
            choices = ["rock", "paper", "scissors"]
            randomChoice = Math.floor(Math.random() * choices.length)
            return choices[randomChoice]
        }
           
    while (humanScore < 5 || botScore < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        if (humanScore == 5) {
            console.log('Champion: HUMAN')
            return;
        }
        if (botScore == 5) {
            console.log('Champion: BOT')
            return;
        }
    }
}
playGame();
