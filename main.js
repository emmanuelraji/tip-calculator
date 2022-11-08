// SELECTORS
const billAmount = document.querySelector('#bill-amount')
const billAmountDiv = document.querySelector('#bill-amount-div')
const numOfPeople = document.querySelector('#number-of-people')
const peopleAmountDiv = document.querySelector('#people-amount-div')
const peopleError = document.querySelector('#people-error')
const customTip = document.querySelector('#custom')
const tipTotal = document.querySelector('#tip-total')
const peopleTotal = document.querySelector('#people-total')
const buttons = document.querySelectorAll(".grid-button")
const resetBtn = document.querySelector('#reset')

// GLOBAL VARIABLES
let totalBill = 0

// EVENT LISTENERS
buttons.forEach((button, key) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active")
    const tipBtnValue = parseInt(button.value)
    const { bill, numPeople } = parseUserInput()
    if (!isNaN(bill)) {
      calculateTip(tipBtnValue)
      totalBill = calculateTip(tipBtnValue) + bill
    }
    if (!button.classList.contains("active")) {
      tipTotal.textContent = "$0.00"
    }
    if (numPeople !== 0 && !isNaN(numPeople)) {
      totalPerPerson()
    }
    buttons.forEach((element, id) => {
      if (id !== key) {
        element.classList.remove("active")
      }
    })
  })
})

billAmount.addEventListener("focus", () => {
  billAmountDiv.classList.add("blue-highlight")
})

billAmount.addEventListener("blur", () => {
  billAmountDiv.classList.remove("blue-highlight")
  const { bill } = parseUserInput()
  if (bill !== 0 && !isNaN(bill)) {
    customTip.disabled = false
    numOfPeople.disabled = false
    buttons.forEach(button => button.disabled = false)
  } else {
    reset()
  }
})

customTip.addEventListener("focus", () => {
  tipTotal.textContent = "$0.00"
  buttons.forEach(button => button.classList.remove("active"))
})

customTip.addEventListener("blur", () => {
  const { custom } = parseUserInput()
  if (!isNaN(custom) && custom !== 0) {
    calculateTip(custom)
  }
})

numOfPeople.addEventListener("focus", () => {
  peopleAmountDiv.classList.remove("orange-highlight")
  peopleError.style.display = "none"
  peopleAmountDiv.classList.add("blue-highlight")
})

numOfPeople.addEventListener("blur", () => {
  peopleAmountDiv.classList.remove("blue-highlight")
  const { numPeople } = parseUserInput()
  if (numPeople === 0) {
    peopleAmountDiv.classList.add("orange-highlight")
    peopleError.style.display = "block"
    peopleTotal.textContent = "$0.00"
    resetBtn.disabled = true
  }
  if (isNaN(numPeople)) {
    peopleTotal.textContent = "$0.00"
    resetBtn.disabled = true
  }
  if (!isNaN(numPeople) && numPeople !== 0) {
    totalPerPerson()
    resetBtn.disabled = false
  }
})

resetBtn.addEventListener("click", () => {
  reset()
})

// FUNCTIONS
function parseUserInput() {
  const bill = parseInt(billAmount.value)
  const numPeople = parseInt(numOfPeople.value)
  const custom = parseInt(customTip.value)
  
  return { bill, numPeople, custom }
}

function calculateTip(tipValue) {
  const { bill } = parseUserInput()
  const total = bill * (tipValue / 100)
  tipTotal.textContent = `$${total}`
  return total
}

function totalPerPerson() {
  const { numPeople } = parseUserInput()
  peopleTotal.textContent = `$${(totalBill / numPeople).toFixed(2)}`
}

function reset() {
  numOfPeople.value = ""
  billAmount.value = ""
  peopleTotal.textContent = "$0.00"
  tipTotal.textContent = "$0.00"
  peopleAmountDiv.classList.remove("orange-highlight")
  peopleError.style.display = "none"
  customTip.disabled = true
  numOfPeople.disabled = true
  resetBtn.disabled = true
  buttons.forEach(button => {
    button.disabled = true
    button.classList.remove("active")
    tipTotal.textContent = "$0.00"
  })
}
