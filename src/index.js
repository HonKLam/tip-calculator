const btnList = [5, 10, 15, 25, 50];
let percentage;

const inputMoneyEl = document.getElementById("input-money-el");
const inputPeopleEl = document.getElementById("input-people-el");

const totalEl = document.getElementById("total-el");
const perPersonEl = document.getElementById("perperson-el");

const resetButtonEl = document.getElementById("reset-btn");

function createVariables() {
  let elementList = [];
  for (let i of btnList) {
    elementList.push(document.getElementById("btn-" + i));
  }
  return elementList;
}

function setPercentage(id) {
  switch (id) {
    case "btn-5":
      percentage = 0.05;
      break;
    case "btn-10":
      percentage = 0.1;
      break;
    case "btn-15":
      percentage = 0.15;
      break;
    case "btn-25":
      percentage = 0.25;
      break;
    case "btn-50":
      percentage = 0.5;
      break;
  }
}

function calcMoney(money, people) {
  let total = (money * percentage).toFixed(2);
  let perPerson = (total / people).toFixed(2);

  if (total === "NaN" || perPerson === "NaN") {
    total = "0.00";
    perPerson = "0.00";
  }

  resetButtonEl.disabled = false;

  totalEl.textContent = `$${total}`;
  perPersonEl.textContent = `$${perPerson}`;
}

function handleButtons() {
  for (let i of list) {
    i.addEventListener("click", function () {
      let id = i.getAttribute("id");

      setPercentage(id);

      for (let k of list) {
        k.style.backgroundColor = "#05484e";
      }
      calcMoney(inputMoneyEl.value, inputPeopleEl.value);
      i.style.backgroundColor = "#27c1ab";
    });
  }
}

const list = createVariables();
handleButtons();

inputMoneyEl.addEventListener("input", function () {
  calcMoney(inputMoneyEl.value, inputPeopleEl.value);
});

inputPeopleEl.addEventListener("input", function () {
  calcMoney(inputMoneyEl.value, inputPeopleEl.value);
});

resetButtonEl.addEventListener("click", function () {
  // it works for this small app -> otherwise just clear inputs
  location.reload();
});
