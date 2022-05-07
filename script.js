var playerWins = 0;
var compWins = 0;

function rockPaperScissors() {
    var playerChoice = prompt("Pick Rock, Paper or Scissors using R, P or S");
    //check valid input
    if(playerChoice === 'R' || playerChoice === 'P' || playerChoice === 'S') {
        alert(`You chose ${playerChoice}`);
    }
    else {
        alert(`Invalid input`);
        return;
    }
    //choice array for computer
    var choices = ['R', 'P', 'S'];
    //pick random choice for computer
    var compChoice = choices[Math.floor(Math.random()*3)];      // Math.floor(Math.random()*3) returns a random integer from 0-2
    alert(`Computer chose ${compChoice}`);
    var resultCheck = checkWinner(playerChoice, compChoice);
    if(resultCheck !== undefined) {
        if(resultCheck) {
            //increment player wins, update the <p> object
            playerWins++;
            document.getElementById("player-wins").innerHTML = `Player wins: ${playerWins}`;
        }
        else if(!resultCheck) {
            //increment computer wins, update the <p> object
            compWins++;
            document.getElementById("computer-wins").innerHTML = `Computer wins: ${compWins}`;
        }
    }
}

function checkWinner(player, computer) {
    if(player === computer) {
        alert("DRAW");
        return undefined;
    }
    else if(player === 'R') {
        if(computer === 'P') {
            alert("You lost");
            return false;
        }
        else if(computer === 'S') {
            alert("You won!");
            return true;
        }
    }
    else if(player === 'P') {
        if(computer === 'S') {
            alert("You lost");
            return false;
        }
        else if(computer === 'R') {
            alert("You won!");
            return true;
        }
    }
    else if(player === 'S') {
        if(computer === 'R') {
            alert("You lost");
            return false;
        }
        else if(computer === 'P') {
            alert("You won!");
            return true;
        }
    }
    return undefined;
}