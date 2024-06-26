let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice,) => {
    
    //genrate comp choice
    const compChoice = getCompChoice();
   

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});