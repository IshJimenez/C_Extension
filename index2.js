
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

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function display(arr){
    for(let x=0; x < arr.length; x++){
    console.log(arr[x])
}
}

display(myCourses)

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out


localStorage.setItem("hisname", "Exodia")

let name = localStorage.getItem("hisname")
console.log(name)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const jButtonn = document.getElementById("jButton")

jButtonn.addEventListener("click", function(){
    console.log(data[0].score)
})

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let nase = `The ${arr.length} ${desc} are ` 
    const lastIndex = arr.length - 1
    for (let x=0; x<arr.length; x++) {
        if (x === lastIndex){
            nase += arr[x] 
        } else {
            nase += arr[x] + ", "
        }
    }
    return nase
}




const sente = generateSentence("largest countries", ["China", "India", "USA"])
console.log(sente)

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const containerr = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function see(){
    let imgsDom = ""
    for(let x=0; x<imgs.length; x++){
        imgsDom += `<img alt="cool cats" class="team-img" src="${imgs[x]}">`
    }
    containerr.innerHTML = imgsDom
}

see()
