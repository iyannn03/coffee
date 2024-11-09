// scripts.js
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#product-modal');

openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});