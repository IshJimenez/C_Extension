let myLeads = ["www.ask1.com", "www.ask2.com", "www.ask3.com"]
const inputEL = document.getElementById("inputEl")
const inputBtnn = document.getElementById("inputBtn")

inputBtnn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

for(let x = 0; x < myLeads.length; x++) {
    console.log(myLeads[x])
}