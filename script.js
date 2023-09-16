const bill = document.querySelector('#bill');
const tipAmount = document.querySelector('#tip');
const custom = document.querySelector('#customTip');
const numperofpeople = document.querySelector('#numberPeople');
const error = document.querySelector('.error');
const total = document.querySelector('#total');

let nsbah = custom/100;
let tot = nsbah*bill ;
let Amount= tot/ numperofpeople ;


tipAmount.textContent =  `$ ${Amount} `;
total.textContent =  `$ ${tot}`;


if(numperofpeople < 1 ) {
    error.style.display = 'block';
};

document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});
