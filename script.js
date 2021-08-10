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

game();