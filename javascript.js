
const gamePieces = ["rock", "paper", "scissors"]
const userOptionShow = document.createElement('h2')
const compOptionShow = document.createElement('h2')
const result = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userOptionShow, compOptionShow, result)

let userOption
let compOption


const userSelect = document.getElementById("userDropdown"); 
//pulls user selection from dropdown list
userSelect.onchange = function() { 
    //looks for change in user selection
    let selectedIndex = userSelect.selectedIndex;
    // Sets selectedIndex to index number
    userOption = userSelect.options[userSelect.selectedIndex].text;
    // set userOption to value indexed from user.Select
    userOptionShow.innerHTML = "You have chosen: " + userOption;
    generateCompOption()
    getResult()
}

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
            result.innerHTML = "You Lose!"
            break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        result.innerHTML = "It's a Draw"
        break
    }
}
