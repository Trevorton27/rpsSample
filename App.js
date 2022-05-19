const rock = document.getElementById("rockBtn").addEventListener('click', playRock);
const paper = document.getElementById("paperBtn").addEventListener('click', playPaper);
const scissors = document.getElementById("scissorsBtn").addEventListener('click', playScissors);
//201 w 152 h
let result = document.getElementById("winner");

let userScore = 0, compScore = 0;
let playerOne = document.getElementById("user-score");
let playerTwo = document.getElementById("computer-score");

const reset = document.getElementById("reset").addEventListener('click', resetGame);



function playRock(){
    let arr = ["Rock", "Paper", "Scissors"];
    let selection = arr.sort(() => 0.5 - Math.random())[0];
    let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerText = "Your Opponent Chose " + selection;

    const userChoice = document.getElementById("user-choice");
    userChoice.innerText = "You Chose Rock";
    if (selection === "Rock"){
        tie();
    }else if (selection === "Paper"){
        loser();
        compScore++;
        playerTwo.innerText = "Computer's Score: " + compScore;
        
    }else{
        winner();
        userScore++;
        playerOne.innerText = "Your Score: " + userScore;
    }
}

function playPaper(){
    let arr = ["Rock", "Paper", "Scissors"];
    let selection = arr.sort(() => 0.5 - Math.random())[0];
    let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerText = "Your Opponent Chose " + selection;

    const userChoice = document.getElementById("user-choice");
    userChoice.innerText = "You Chose Paper";
    if (selection === "Rock"){
        winner();
        userScore++
        playerOne.innerText = "Your Score: " + userScore;
    }else if (selection === "Paper"){
        tie();
    }else{
        loser();
        compScore++;
        playerTwo.innerText = "Computer's Score: " + compScore;
    }
}

function playScissors(){
    let arr = ["Rock", "Paper", "Scissors"];
    let selection = arr.sort(() => 0.5 - Math.random())[0];
    let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerText = "Your Opponent Chose " + selection;

    const userChoice = document.getElementById("user-choice");
    userChoice.innerText = "You Chose Scissors";
    if (selection === "Rock"){
        loser();
        compScore++;
        playerTwo.innerText = "Computer's Score: " + compScore;
        
    }else if (selection === "Paper"){
        winner();
        userScore++
        playerOne.innerText = "Your Score: " + userScore;
    }else{
        tie();
    }
}

function winner(){
    result.innerText = "You Win!";
}

function loser(){
    result.innerText = "You Lose..."
}

function tie(){
    result.innerText = "*Gasp* \nIt's a Tie!"
}

function resetGame(){
    document.getElementById("computer-choice").innerText = " ";
    document.getElementById("user-choice").innerText = " ";
    document.getElementById("winner").innerText = " ";
    resetSelection = selection;
}