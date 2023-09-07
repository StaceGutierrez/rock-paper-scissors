
const gamePieces = ["rock", "paper", "scissors"]
const userOptionShow = document.getElementById('userChoice')
const compOptionShow = document.getElementById('compChoice')
const result = document.getElementById('results')
const userRoundShow = document.getElementById("user-score")
const compRoundShow = document.getElementById("comp-score")
const possibleChoices = document.querySelectorAll('button')
const possibleChoicesC = document.querySelectorAll('button')


let userChoice
let compChoice
let compScore = 0
let userScore = 0

compRoundShow.innerHTML = compScore
userRoundShow.innerHTML = userScore


//click trigger and variable assignment of userChoice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {userChoice = e.target.id
    userOptionShow.innerHTML = "You have Chosen: " + userChoice
    generateCompOption()
    getResult()
    games()
    }))
    
//click trigger for compChoice    
possibleChoicesC.forEach(possibleChoicesC => possibleChoicesC.addEventListener('click', (e) => {compChoice = e.target.id}))


const generateCompOption = () => {
    randomChoice = gamePieces[Math.floor(Math.random() * gamePieces.length)]
    // randomly chooses number and sets random choice to value at indexed value
    compOption = randomChoice
    // Pass randomChoice to compOption 
    compOptionShow.innerHTML = "The computer chose: " + compOption
}


// matches userOption and compOption to determine winner
const getResult = () => {
    switch (userOption + compOption) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result.innerHTML = "You Win!"
            break
        case "rockspaper":
        case "paperscissors":
        case "scissorsrock":
            result.innerHTML = "Computer Wins!"
            break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        result.innerHTML = "It's a Draw"
        break
    }
}
console.log(result)
console.log(document.getElementsByClassName(".results").data)

// const games = () => {
//     if ( result === "You Lose!") {
//         alert("you lose!");
        
//     } else if (result === "You Win!") {
//         alert("You Win!");
//     } 

// }
// console.log(compScore)
// console.log(userScore)
