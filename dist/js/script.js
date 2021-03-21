const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuLinks = menu.querySelectorAll('.menu__list a');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

const close = () => {
  menu.classList.remove('active');
};

closeElem.addEventListener('click', close);
menuLinks.forEach((link) => {
  link.addEventListener('click', close);
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

const form = document.getElementById('my-form');
const overlay = document.querySelector('.overlay');
const modal = document.getElementById('thanks');
const closeModal = document.querySelector('.modal__close');

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('my-form-status');
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      overlay.style.display = 'block';
      modal.style.display = 'block';
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);

closeModal.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});
