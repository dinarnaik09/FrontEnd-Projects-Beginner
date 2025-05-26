let userChoice;
let computerChoice;
let userScore = 0;
let compScore = 0;
let resetBtn = document.querySelector("button");
let result = document.querySelector("#result");
let userRes = document.querySelector("#userRes");
let compRes = document.querySelector("#compRes");
const choices = document.querySelectorAll("#rock,#paper,#scissor");

//RANDOM COMPUTER-GENERATED-CHOICE:
function compChoice(){
    let options = ["rock" , "paper" , "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}

//RESULT FUNCTIONS:
function draw(){
    result.innerText = "It was a draw!";
    result.style.backgroundColor = "indigo";
}

function userWin(){
    result.innerText = `You Won! ${userChoice} beats ${computerChoice}`;
    result.style.backgroundColor = "green";
    result.style.textTransform = "uppercase";
    userScore++;
    userRes.innerText = `USER : ${userScore}`;
}

function userLose(){
    result.innerText = `You Lost! ${computerChoice} beats ${userChoice}`;
    result.style.backgroundColor = "red";
    result.style.textTransform = "uppercase";
    compScore++;
    compRes.innerText = `COMPUTER : ${compScore}`;
}

//USER-CHOICE: USER-PLAY:
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.id;
        computerChoice = compChoice();
        //WINNING & LOSING CONDITIONS:
        if(userChoice === computerChoice){
            draw();
        }else if(userChoice === "rock" && computerChoice === "scissor" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissor" && computerChoice === "paper"){
            userWin();
        }else{
            userLose();
        }
    });
  });


//RESET BUTTON:
resetBtn.addEventListener("click" , () => {
    result.innerText = "PICK ANY ONE FROM THE ABOVE";
    result.style.backgroundColor = "indigo";
    userScore = 0;
    userRes.innerText = `USER : ${userScore}`;
    compScore = 0;
    compRes.innerText = `COMPUTER : ${compScore}`;
})




