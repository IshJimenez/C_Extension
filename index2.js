
// Some side practice 

// let contaiN = document.getElementById("contain")

// contaiN.innerHTML = "<button onclick='buy()'>BUY</button>"

// contaiN.addEventListener("click", function() {
//     console.log("Hey you just bought me oh")
// })

// function buy() {MSN00001
//     contaiN.innerHTML += "<p>Hey you just bought Me !</p>"
// }

// template strings/literals

const recipient = "James"

const sender = "Kaiba"

// Refactor the email string to use template strings
let email = "Hey " + recipient + "! How is it going? Cheers "

// With the ` you have the ability to be able to seperate on seperate lines
email = `Hey ${recipient},

thats my million dollar check,

yells ${sender}!!`
console.log(email)

const wel = document.getElementById("welcome-el")

function greetUser(greet,name, emogi) {
wel.textContent = `${greet} , ${name} and Mukuba not Tea ${emogi}`
}

greetUser("Greetings", "Joey", "👋")

// Create a function, add(), that adds two numbers together and returns the sum

function add(x, num2){
    return x + num2;
}

console.log( add(3,4)    ) // should log 7
console.log( add(9, 102) ) // should log 111

// Create a function, getFirst(arr), that returns the first item in the array
// Call it with an array as an argument to verify that it works

function getFirst(arr){
    return arr[0]
}

let fcard = getFirst(['first', 'second', 'third'])

console.log(fcard)


// SETTING THE STAGE
const player = "Yugi"
const opponent = "Kaiba"
const game = "Duel"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game}!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes