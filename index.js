const washBtn = document.getElementById("wash-btn")
const lawnBtn = document.getElementById("lawn-btn")
const weedsBtn = document.getElementById("weeds-btn")
const invoiceBtn = document.getElementById("invoice-btn")
const spanRemover1 = document.getElementById("remove1")
const spanRemover2 = document.getElementById("remove2")
const spanRemover3 = document.getElementById("remove3")
const total1 = document.getElementById("total1")
const total2 = document.getElementById("total2")
const total3 = document.getElementById("total3")
const textAmount = document.getElementById("total-amount")

let washSum = 0
let lawnSum = 0
let weedsSum = 0
let washAmount = 0
let lawnAmount = 0
let weedsAmount = 0
let amountArray = []


function summarize() {
    let totalAmount = 0
    textAmount.textContent = "$"
    for (let sum in amountArray) {
        totalAmount += amountArray[sum]
        console.log(amountArray)

    }
    textAmount.textContent += totalAmount
    console.log(totalAmount)
}

washBtn.addEventListener("click", function() {
    washAmount += 10
    amountArray.push(10)
    total1.textContent = ""
    washSum = washAmount
    
    total1.textContent += "$" + washSum
    summarize()
})

lawnBtn.addEventListener("click", function() {
    lawnAmount += 20
    amountArray.push(20)
    total2.textContent = ""
    lawnSum = lawnAmount

    total2.textContent += "$" + lawnSum
    summarize()
})

weedsBtn.addEventListener("click", function() {
    weedsAmount += 30
    amountArray.push(30)
    total3.textContent = ""
    weedsSum = weedsAmount

    total3.textContent += "$" + weedsSum
    summarize()
})


spanRemover1.addEventListener("click", function() {
    washSum -= 10
    amountArray.pop(10)
    total1.textContent = "$" + washSum
    summarize()
})

spanRemover2.addEventListener("click", function() {
    lawnSum -= 20
    amountArray.pop(20)
    total2.textContent = "$" + lawnSum
    summarize()
})

spanRemover3.addEventListener("click", function() {
    weedsSum -= 30
    amountArray.pop(30)
    total3.textContent = "$" + weedsSum
    summarize()
})

invoiceBtn.addEventListener("click", function() {
    total1.textContent = "$0"
    washAmount = 0
    total2.textContent = "$0"
    lawnAmount = 0
    total3.textContent = "$0"
    weedsAmount = 0
    amountArray = []
    textAmount.textContent = "$0"
})
