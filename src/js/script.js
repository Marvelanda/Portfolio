const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const percents = document.querySelectorAll('.instruments__charts-percentage');
const charts = document.querySelectorAll('.instruments__charts-item__filler');

for (let i = 0; i < percents.length; i++) {
  charts[i].style.width = percents[i].textContent;

  if (parseInt(percents[i].textContent) > 100) {
    charts[i].style.width = 100 + '%';
  } else if (parseInt(percents[i].textContent) < 0) {
    charts[i].style.width = 0 + '%';
  }
}
