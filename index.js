// chrome://extensions/
let myLeads = []

// Turns the myLeads string into an array
// myLeads = JSON.parse(myLeads)

// Turns the array into a string again
// myLeads = JSON.stringify(myLeads)

// localStorage.clear()

const inputEL = document.getElementById("inputEl")
const inputBtnn = document.getElementById("inputBtn")
const delBtnn = document.getElementById("delBtn")
const tabBtnn = document.getElementById("tabBtn")

const ulEL = document.getElementById("ulEl")

const leadsLocalStorage = JSON.parse (localStorage.getItem("myLeads"))

if(leadsLocalStorage) {
        myLeads = leadsLocalStorage
        render(myLeads)
}

function render(leads) {
    let listItems = ""
    for(let x = 0; x < leads.length; x++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[x] + "'>" + myLeads[x] + "</a></li>"
        // Used template string downstairs instead to make it easier to read
        listItems += `
            <li>
                <a target='_blank' href='${leads[x]}'>
                ${leads[x]}
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

// localStorage.setItem("hisName", "Yugi")

// let name = localStorage.getItem("hisName")
// console.log(name)

// localStorage.clear()

inputBtnn.addEventListener("click", function(){
        myLeads.push(inputEL.value)
        inputEL.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

})

console.log( localStorage.getItem("myLeads") )

delBtnn.addEventListener("click", function(){
        localStorage.clear()
        myLeads = []
        render(myLeads)
})

tabBtnn.addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})



