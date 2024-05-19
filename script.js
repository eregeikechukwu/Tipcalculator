'use strict';
const buttons = document.querySelectorAll('.select-tip__button');

const billInput = document.querySelector('.billInput');

const peopleInput = document.querySelector('.inputPeople');
const errorMessage = document.querySelector('.errorMessage');
const amountTip = document.querySelector('.amountTip');
const amountPeople = document.querySelector('.amountPeople');

const reset = document.querySelector('.reset__button');

const mq = window.matchMedia('(max-width:600px)');

const output = document.querySelector('.output');

const handleMq = event => {
  if (event.matches) {
    output.style.marginTop = '53rem';
  }
};

let value = 0;

buttons.forEach(button =>
  button.addEventListener('click', function () {
    value = button.value;
    console.log(value);

    event.preventDefault();
    errorMessage.style.display = 'inline';
    if (billInput.value === '' || peopleInput.value === '') {
      document.querySelector('.input__bill__input__icon').style.top = '20%';

      handleMq(mq);
    } else {
      errorMessage.style.display = 'none';
      functionality();
      document.querySelector('.input__bill__input__icon').style.top = '50%';
    }
  })
);

const functionality = function () {
  const total = parseFloat(billInput.value) * parseFloat(peopleInput.value);
  //   console.log(total);
  const tip = total * (value / 100);
  console.log(tip);
  amountTip.textContent = tip.toFixed(2);

  const totalWT = tip + total;
  console.log(totalWT);
  amountPeople.textContent = totalWT.toFixed(2);
};

reset.addEventListener('click', function () {
  amountTip.textContent = '0.00';
  amountPeople.textContent = ' 0.00';
  billInput.value = '';
  peopleInput.value = '';
  errorMessage.style.display = 'none';
  document.querySelector('.input__bill__input__icon').style.top = '50%';
});
