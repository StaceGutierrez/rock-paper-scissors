const gamePieces = ['rock', 'paper', 'scissors'];
const roundCountDisplay = document.getElementById('round-counter');
const userScoreDisplay = document.getElementById('user-score');
const compScoreDisplay = document.getElementById('comp-score');
const compChoiceDisplay = document.getElementById('comp-choice')
const userBtn = document.querySelectorAll('button')
const result = document.getElementById('results')

let userScore = 0;
let compScore = 0;
let round = 0;
let userChoice = ''
let compChoice = ''

// listens for click of button to start game
userBtn.forEach(userBtn => userBtn.addEventListener('click', (e) => {
    userChoice = userBtn.value
    generateCompChoice()
    countRound()
    getResult()
    games()
    getWinner()

}));

const generateCompChoice = () => {
    randomChoice = gamePieces[Math.floor(Math.random() * gamePieces.length)]
    compChoiceDisplay.textContent = randomChoice
}

const countRound = () => {
    round += 1;
    roundCountDisplay.textContent = round;
}

const getResult = () => {
    switch (userChoice + randomChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result.innerHTML = "You Win!";
            break;
        case "rockspaper":
        case "paperscissors":
        case "scissorsrock":
            result.innerHTML = "Opponent Wins!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.innerHTML = "It's a Draw!";
            break;
    }
}

function games(result) {
    if (document.getElementById('results').innerHTML === "Opponent Wins!") {
        compScore+= 1;
        return compScoreDisplay.innerHTML = compScore;
    } else if (document.getElementById('results').innerHTML === "You Win!") {
        userScore+= 1;
        return userScoreDisplay.innerHTML = userScore;
    }
}


const getWinner = () => {
    if (compScore == 5) {
        alert("you lose");
    } else if (userScore == 5) {
        alert("you win");
    }

}