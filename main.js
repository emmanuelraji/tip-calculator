// SELECTORS

const billAmount = document.querySelector('#bill-amount')
const billAmountDiv = document.querySelector('#bill-amount-div')
const numOfPeople = document.querySelector('#number-of-people')
const peopleAmountDiv = document.querySelector('#people-amount-div')
const peopleError = document.querySelector('#people-error')
const tipTotal = document.querySelector('#tip-total')
const peopleTotal = document.querySelector('#people-total')
const buttons = document.querySelectorAll(".grid-button")


buttons.forEach((button, key) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active")
    buttons.forEach((element, id) => {
      if (id !== key) {
        element.classList.remove("active")
      }
    })
  })
})

// EVENT LISTENERS

billAmount.addEventListener("focus", () => {
  billAmountDiv.classList.add("blue-highlight")
})

billAmount.addEventListener("blur", () => {
  billAmountDiv.classList.remove("blue-highlight")
})

numOfPeople.addEventListener("focus", () => {
  peopleAmountDiv.classList.remove("orange-highlight")
  peopleError.style.display = "none"
  peopleAmountDiv.classList.add("blue-highlight")
})

numOfPeople.addEventListener("blur", () => {
  peopleAmountDiv.classList.remove("blue-highlight")
  const numPeople = parseInt(numOfPeople.value)
  if (numPeople === 0) {
    peopleAmountDiv.classList.add("orange-highlight")
    peopleError.style.display = "block"
  }
})

// FUNCTIONS

function calculateTip() {
  //isNaN
}

function totalPerPerson() {

}
