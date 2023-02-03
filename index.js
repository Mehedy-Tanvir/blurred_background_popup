const btnJoin = document.querySelector('.btn');
const container = document.querySelector('.container');
const popupContainer = document.querySelector('.popup-container');
const close = document.querySelector('.close-icon');
const popupButton = document.querySelector('.popup-btn');

btnJoin.addEventListener('click', () => {
    popupContainer.classList.remove('active');
    container.classList.add('active');
    btnJoin.style.disabled = true;
});
close.addEventListener('click', () => {
    popupContainer.classList.add('active');
    container.classList.remove('active');
    btnJoin.style.disabled = false;
});
popupButton.addEventListener('click', () => {
    popupContainer.classList.add('active');
    container.classList.remove('active');
    btnJoin.style.disabled = false;
});

