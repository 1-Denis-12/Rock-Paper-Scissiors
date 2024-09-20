const btn = document.querySelectorAll("button");
const scoreBoard = document.querySelector("#score")

btn.forEach((button) =>{
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id)        
})
})

function getComputerChoice() {
    var computerChoice
    random_number = (Math.random()* 100);

    if (random_number < 33.33) {
        computerChoice = "r";
    }
    else if (random_number > 33.33 && random_number < 66.66) {
        computerChoice = "p";
    }
    else {
        computerChoice = "s";
    }

    return computerChoice;
}


var human_score = 0;
var computer_score = 0;

function playRound(computerChoice, yourChoice) {
    var result
    if (computerChoice == "r" && yourChoice == "rock-button" || computerChoice == "p" && yourChoice == "paper-button" || computerChoice == "s" && yourChoice == "scissiors-button") {
        result = "it's a Tie " + "the Score is you:" + human_score + " Computer: " + computer_score 
    }
    else if(computerChoice == "r" && yourChoice == "scissiors-button" || computerChoice == "p" && yourChoice == "rock-button" || computerChoice == "s" && yourChoice == "paper-button") {
        result = "You lost " + "the Score is you:" + human_score + " Computer: " + computer_score 
        computer_score++
    }
    else if (computerChoice == "r" && yourChoice == "paper-button" || computerChoice == "p" && yourChoice == "scissiors-button" || computerChoice == "s" && yourChoice == "rock-button") {
        result = "you Win!!! " + "the Score is you:" + human_score + " Computer: " + computer_score 
        human_score++
    }

    if (human_score == 5) {
        result = "Game Over!! you win!!! The final score is" + human_score + "--" + computer_score;
        human_score = 0
        computer_score = 0
    }
    else if (computer_score == 5) {
        result = "Game Over!! you lose): The final score is: " + human_score + " -- " + computer_score;
        human_score = 0 
        computer_score = 0
    }
    scoreBoard.textContent = result
}