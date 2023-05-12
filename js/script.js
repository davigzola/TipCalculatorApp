var bill = document.querySelector(".bill input[type=number]");

var numberOfPeople = document.querySelector(".number-of-people input[type=number]");

var selectTip = document.querySelector(".tip");

var tipAmount = document.querySelector(".cyan-box-tip-amount span");

var totalAmount = document.querySelector(".cyan-box-total span");

bill.onchange = ()=> {
    var billValue = bill.value;
    sessionStorage.setItem("billValue", billValue);
    console.log(billValue);
}

selectTip.onchange = ()=> {
    var selectedTip = document.querySelector("input[type = radio]:checked").value;
    sessionStorage.setItem("selectedTip", selectedTip);
    console.log(selectedTip);
}

numberOfPeople.onchange = ()=> {
    var numberOfPeopleValue = numberOfPeople.value;
    sessionStorage.setItem("numberOfPeopleValue",  numberOfPeopleValue);
    console.log(numberOfPeopleValue);
}

var billValue = sessionStorage.getItem("billValue");

var selectedTip = sessionStorage.getItem("selectedTip");

var numberOfPeopleValue = sessionStorage.getItem("numberOfPeopleValue");