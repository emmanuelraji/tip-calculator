const billAmount = document.querySelector('#bill-amount')
const billAmountDiv = document.querySelector('#bill-amount-div')
const numOfPeople = document.querySelector('#number-of-people')
const tipTotal = document.querySelector('#tip-total')
const peopleTotal = document.querySelector('#people-total')

let bill = 0
let people = 0

const name = "43"

billAmount.addEventListener("focus", () => {
  billAmountDiv.classList.add("blue-highlight")
})

billAmount.addEventListener("blur", () => {
  billAmountDiv.classList.remove("blue-highlight")
  console.log(billAmount)
  if (!isNaN(parseInt(name))) {
    bill = billAmount.value
  } else {
  
  }
})

function calculateTip() {

}

function totalPerPerson() {

}