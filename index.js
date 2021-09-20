// chrome://extensions/
let myLeads = []
const inputEL = document.getElementById("inputEl")
const inputBtnn = document.getElementById("inputBtn")

const ulEL = document.getElementById("ulEl")

inputBtnn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    console.log(myLeads)
    inputEL.value = ""
    renderLeads()

})

function renderLeads() {
    let listItems = ""
    for(let x = 0; x < myLeads.length; x++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[x] + "'>" + myLeads[x] + "</a></li>"
        // Used template string downstairs instead to make it easier to read
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[x]}'>
                ${myLeads[x]}
                </a>
            </li>
        `

    ////    ulEL.innerHTML += "<li>" + myLeads[x] + "</li>"

    //// - ALTERNATIVE WAY TO APPEND - ////
            //// const li = document.createElement("li") 
            //// li.textContent = myLeads[x]
            //// ulEL.append(li)
}
ulEL.innerHTML = listItems
}



// let contaiN = document.getElementById("contain")

// contaiN.innerHTML = "<button onclick='buy()'>BUY</button>"

// contaiN.addEventListener("click", function() {
//     console.log("Hey you just bought me oh")
// })

// function buy() {
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

