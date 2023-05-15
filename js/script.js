const inputBill = document.querySelector("#input-bill")
const inputNumberOfPeople = document.querySelector("#input-number-of-people")

inputBill.addEventListener("input", fInputBill);
inputNumberOfPeople.addEventListener("input", fInputNumberOfPeople);

let inputValue =  0.0;
let numberOfPeopleValue = 1

function fInputBill() {
    inputValue = parseFloat(inputBill.value)
    console.log(inputValue);
}

function fInputNumberOfPeople() {
    numberOfPeopleValue = parseFloat(inputNumberOfPeople.value)
    console.log(numberOfPeopleValue);
}