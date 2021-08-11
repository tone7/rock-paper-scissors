let round = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choice;
    let number = Math.floor(Math.random()*3);
    switch(number){
        case 0: choice = "Rock";
        break;
        case 1: choice = "Paper";
        break;
        case 2: choice = "Scissors";
        break;
        default:break;
    }
    return choice;
}

function game(){
    let player = 0;
    let computer = 0;
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?", "Fountain");
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection, i);
        switch(winner){
            case "Player": player++;
            break;
            case "Computer": computer++;
            break;
            case "Error": i--;
            break;
            default:break;
        }
    }
    if(player > computer){
        alert("You WON the entire game! Congratulations");
    }else if(computer > player){
        alert("You LOSE the entire game! Sorry");
    }else{
        alert("DRAW! Cooool");
    }

}

function splitString(str){
    let str_split = str.split('');
    for(let i = 0; i < str.length; i++){
        if(i == 0){
            if(str.charAt(i) == str.charAt(i).toLowerCase()){                 
                str_split[i] = str.charAt(i).toUpperCase(); 
            }
        }else{
            if(str.charAt(i) == str.charAt(i).toUpperCase()){
                str_split[i] = str.charAt(i).toLowerCase();
            }
        }
    }

    str = str_split.join('');
    return str;
}

function playRound(playerSelection, computerSelection, round){

    playerSelection = splitString(playerSelection);

    if(playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors"){
        alert("Please enter Rock, Paper or Scissors! Nothing else");
        return "Error";
    }else{
        if(playerSelection == computerSelection){
            alert(`${round}. Round: No Winner! Both choosed ${playerSelection}`);
            return "Nobody";
        }else if(playerSelection == "Rock"){
            if(computerSelection == "Paper"){
                alert(`${round}. Round: You Lose! ${computerSelection} beats ${playerSelection}`);
                return "Computer";
            }else if(computerSelection == "Scissors"){
                alert(`${round}. Round: You Won! ${playerSelection} beats ${computerSelection}`);
                return "Player";
            }
        }else if(playerSelection == "Paper"){
            if(computerSelection == "Scissors"){
                alert(`${round}. Round: You Lose! ${computerSelection} beats ${playerSelection}`);
                return "Computer";
            }else if(computerSelection == "Rock"){
                alert(`${round}. Round: You Won! ${playerSelection} beats ${computerSelection}`);
                return "Player";
            }
        }else{
            if(computerSelection == "Rock"){
                alert(`${round}. Round: You Lose! ${computerSelection} beats ${playerSelection}`);
                return "Computer";
            }else if(computerSelection == "Paper"){
                alert(`${round}. Round: You Won! ${playerSelection} beats ${computerSelection}`);
                return "Player";
            }
        }
    }
}

function rock(){
    round++;
    document.getElementById("round").innerHTML = `Round ${round}`;
    let choice = computerPlay();
    switch(choice){
        case "Rock": document.getElementById("result").innerHTML = `Tie! Both picked ${choice}`;
        break;
        case "Paper": document.getElementById("result").innerHTML = `You Lose! ${choice} beats Rock`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(computerScore == 5){
            alert(`You lost the entire game ${computerScore} : ${playerScore}  :(`);
            computerScore = 0;
            playerScore = 0;
            round = 0;
            document.getElementById("result").innerHTML = `Lets Go!`;
            document.getElementById("round").innerHTML = `Round ${round}`;
            document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        }
        break;
        case "Scissors": document.getElementById("result").innerHTML = `You Won! Rock beats ${choice}`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(playerScore == 5){
            alert(`You won the entire game ${playerScore} : ${computerScore}  :)`);
            computerScore = 0;
            playerScore = 0;
            round = 0;
            document.getElementById("result").innerHTML = `Lets Go!`;
            document.getElementById("round").innerHTML = `Round ${round}`;
            document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        }
        break;
    }
}

function paper(){
    round++;
    document.getElementById("round").innerHTML = `Round ${round}`;
    let choice = computerPlay();
    switch(choice){
        case "Paper": document.getElementById("result").innerHTML = `Tie! Both picked ${choice}`;
        break;
        case "Scissors": document.getElementById("result").innerHTML = `You Lose! ${choice} beats Paper`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(computerScore == 5){
            alert(`You lost the entire game ${computerScore} : ${playerScore}  :(`);
            computerScore = 0;
            playerScore = 0;
            round = 0;
            document.getElementById("result").innerHTML = `Lets Go!`;
            document.getElementById("round").innerHTML = `Round ${round}`;
            document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        }
        break;
        case "Rock": document.getElementById("result").innerHTML = `You Won! Paper beats ${choice}`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(playerScore == 5){
            alert(`You won the entire game ${playerScore} : ${computerScore}  :)`);
            computerScore = 0;
            playerScore = 0;
            round = 0;
            document.getElementById("result").innerHTML = `Lets Go!`;
            document.getElementById("round").innerHTML = `Round ${round}`;
            document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        }
        break;
    }
}

function scissors(){
    round++;
    document.getElementById("round").innerHTML = `Round ${round}`;
    let choice = computerPlay();
    switch(choice){
        case "Scissors": document.getElementById("result").innerHTML = `Tie! Both picked ${choice}`;
        break;
        case "Rock": document.getElementById("result").innerHTML = `You Lose! ${choice} beats Scissors`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(computerScore == 5){
            alert(`You lost the entire game ${computerScore} : ${playerScore}  :(`);
            computerScore = 0;
            playerScore = 0;
            round = 0; 
        }
        break;
        case "Paper": document.getElementById("result").innerHTML = `You Won! Scissors beats ${choice}`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        if(playerScore == 5){
            alert(`You won the entire game ${playerScore} : ${computerScore}  :)`);
            computerScore = 0;
            playerScore = 0;
            round = 0;
            document.getElementById("result").innerHTML = `Lets Go!`;
            document.getElementById("round").innerHTML = `Round ${round}`;
            document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`; 
        }
        break;
    }
}

function clickStartButtonListener(){
    document.getElementById("startGame").style.display="none";
    document.getElementById("newGame").style.display="flex";
    document.getElementById("container").style.display="flex";
    document.getElementById("container2").style.display="flex";
}

function clickNewButtonListener(){
    document.getElementById("result").innerHTML = `Lets Go!`;
    round = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("round").innerHTML = `Round ${round}`;
    document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
}

//game();