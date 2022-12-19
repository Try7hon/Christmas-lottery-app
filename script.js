'use strict';

const dateLottery = document.querySelector('date');
const nameShow = document.querySelector('.winner-name-plain');
const shiftShow = document.querySelector('.winner-shift-plain');
const positionShow = document.querySelector('.winner-position-plain');
const giftShow = document.querySelector('.winner-gift-plain');
const span = document.querySelector('span');
const btn = document.querySelector('.searching-winner');

const dominik = ['Dominik', 'Yellow', 'Lineleader'];
const albert = ['Albert', 'Yellow', 'Lineleader'];
const patrycja = ['Patrycja', 'Yellow', 'Lineleader'];
const regan = ['Regan', 'Orange', 'Lineleader'];
const kamila = ['Kamila', 'Blue', 'QC'];
const piotrek = ['Piotrek', 'Blue', 'Store operator'];
const darek = ['Darek', 'Blue', 'truck driver'];
const rui = ['Rui', 'Yellow', 'truck driver'];
const kamil = ['Kamil', 'Continental', 'Dispatch operative'];
const workers = [dominik, albert, patrycja, regan, kamila, piotrek, darek, rui, kamil];
const gifts = [
	'Voucher amazon for £25',
	'Perfume set',
	'Voucher morrison for £25',
	'Coffe maker',
	'Free trip for two to London for weekend',
	'Box of fruit',
	'E-voucher for £25',
	'Love2shop voucher for £25',
	'Bottle of Prosseco',
];

const winner = [];
const lottery = workers[Math.floor(Math.random(workers) * workers.length)];
const searchWinner = () => {
	if (winner.length <= 0) {
		winner.push(workers[Math.floor(Math.random(workers) * workers.length)]);
		console.log(winner.flat());
		showWinner();
		showGift();
	} else {
		console.log(`okej`);
		showWinner();
		showGift();
		winner.shift();
		winner.push(workers[Math.floor(Math.random(workers) * workers.length)]);
		console.log(winner.flat());
	}
};
const showWinner = () => {
	nameShow.textContent = `${winner[0].slice(0, 1)}`;
	positionShow.textContent = `${winner[0].slice(2, 3)}`;
	shiftShow.textContent = `${winner[0].slice(1, 2)}`;
};
const showGift = () => {
	giftShow.innerHTML = gifts[Math.floor(Math.random(gifts) * gifts.length)];
};

btn.addEventListener('click', searchWinner);
const christmasDate = 25;
const date = new Date();
let day = date.getDate();
const diffDays = Math.round(christmasDate - day);
const showDate = () => {
	span.innerHTML = `${diffDays}`;
};
showDate();
console.log(diffDays);
