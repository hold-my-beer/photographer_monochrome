const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.nav-list');
const navImg = document.querySelector('.nav-img');
const navListLis = document.querySelectorAll('.nav-list-li');
const navListUl = document.querySelector('.nav-list-ul');

/* EVENTS */
navButton.addEventListener('click', () => {
	toggleButton();
	toggleMenu();
});

navListUl.addEventListener('click', (e) => {
	toggleButton();
	toggleMenu();
});

/* Show Menu */
const toggleButton = () => {
	navButton.classList.toggle('open');
}

const toggleMenu = () => {
	navList.classList.toggle('show');
	navImg.classList.toggle('show');
}