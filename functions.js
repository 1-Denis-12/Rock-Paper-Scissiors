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

function getHumanChoice() {
    answer = false
    var yourChoice = prompt("Select r for Rock, p for Papper, or s for Scissiors")
    while (answer != true){
    if (yourChoice == "r") {
        answer = true
    }
    else if (yourChoice == "p") {
        answer = true
    } 
    else if (yourChoice == "s") {
        answer = true
        console.log(yourChoice)
    }
    else yourChoice = prompt("Error - Select r for Rock, p for Papper, or s for Scissiors")
    }   
    return yourChoice;
}

var human_score = 0;
var computer_score = 0;

function getResult(computerChoice, yourChoice) {
    var result
    if (computerChoice == "r" && yourChoice == "r" || computerChoice == "p" && yourChoice == "p" || computerChoice == "s" && yourChoice == "s") {
        result = "it's a Tie"
    }
    else if(computerChoice == "r" && yourChoice == "s" || computerChoice == "p" && yourChoice == "r" || computerChoice == "s" && yourChoice == "p") {
        result = "You lost"
        computer_score++
    }
    else if (computerChoice == "r" && yourChoice == "p" || computerChoice == "p" && yourChoice == "s" || computerChoice == "s" && yourChoice == "r") {
        result = "you Win!!!"
        human_score++
    }
    console.log(result);
    prompt(result + " The Score is you: " + human_score + "computer: " + computer_score + " press any button to continue")
    getResult(getComputerChoice(), getHumanChoice())
}