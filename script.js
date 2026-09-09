// Rock Paper Scissor

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDispay = document.getElementById("playerScoreDisplay");
const computerScoreDispay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice){
    const computerChoices = choices[Math.floor(Math.random() * 3)];
    //console.log(computerChoices);
    let result = "";
    if(playerChoice === computerChoices){
        result = "IT'S A TIE !";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoices === "scissors") ? "YOU WIN !" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoices === "rock") ? "YOU WIN !" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoices === "paper") ? "YOU WIN !" : "YOU LOSE";
                break;

            }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenText", "redText");   // for black color of tie

                                                 // if (result === "YOU WIN !") {
                                                                 //     resultDisplay.classList.add("greenText");
                                                                 //     playerScore++;
                                                                 //     playerScoreDispay.textContent = playerScore;
                                                                 //  }
                                                                 //  else if (result === "YOU LOSE") {
                                                                 //      resultDisplay.classList.add("redText");
                                                                 //      computerScore++;
                                                                 //      computerScoreDispay.textContent = computerScore;
                                                                 //  }
        switch(result){                                                          
         case "YOU WIN !":      
            resultDisplay.classList.add("greenText");

            playerScore++;
            playerScoreDispay.textContent = playerScore;

            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");

            computerScore++;
            computerScoreDispay.textContent = computerScore;

            break;
    }
    
}