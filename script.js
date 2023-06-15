let rock = document.querySelector('#rockBtn')
let paper = document.querySelector('#paperBtn')
let scissors = document.querySelector('#scissorsBtn')
let winner = document.querySelector('#winnerBtn')
let display = document.querySelector('.display')
let playAgain = document.querySelector('#playAgainBtn')


const options = ["rock", "paper", "scissors"]
let computerChoice = options[Math.floor(Math.random() * options.length)]

let playerChoice = null;
rock.addEventListener('click', function () {
    return playerChoice = "rock";
})

paper.addEventListener('click', function () {
    return playerChoice = "paper";
})

scissors.addEventListener('click', function () {
    return playerChoice = "scissors";
})

winner.addEventListener('click', function () {
    let result = 0;
    if ((playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors")) {
        result = "Player Wins!";
    } else if ((playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock")) {
        result = "Computer Wins!";
    } else {
        result = "Its a Tie!";
    }

    display.innerHTML = `<div><p>Results: ${result}</p> <p> Player Choice: ${playerChoice} </p> <p>Computer Choice: ${computerChoice}</p></div>`;
    display.style.color = 'white';
})

playAgain.addEventListener('click', function() {
    computerChoice = options[Math.floor(Math.random() * options.length)]
    playerChoice = 0;
    display.innerHTML = `<div><p>Results: </p> <p> Player Choice: </p> <p>Computer Choice: </p></div>`;
})



