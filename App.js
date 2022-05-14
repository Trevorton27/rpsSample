const userRock = 2;
const userPaper = 3;
const userScissors = 5;
const compRock = 7;
const compPaper = 11;
const compScissors = 17;

function play(){
const rock = document.getElementById("rockBtn").addEventListener('click', playGame(userRock));
const paper = document.getElementById("paperBtn").addEventListener('click', playGame);
const scissors = document.getElementById("scissorsBtn").addEventListener('click', playGame);
//const user = document.getElementById("user-choice");
}

const rockRock = userRock - compRock; //-5
const rockPaper = userRock - compPaper; // -9
const rockScissors = userRock - compScissors; //-15
const paperRock = userRock - compScissors; // -4
const paperPaper = userPaper - compPaper; // -8
const paperScissors = userPaper - compScissors; // -14
const scissorsRock = userScissors - compRock; // -2
const scissorsPaper = userScissors - compPaper; // -6
const scissorsScissors = userScissors - compScissors; // -12

function playGame(choice){
    
    if (choice == userRock){
        console.log(1);

    }


    
   


//make an array and have program pull out a random el

}