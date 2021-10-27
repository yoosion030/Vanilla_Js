const showModal = document.getElementById('showModal');
const hideModal = document.getElementById('hideModal');
const modal = document.getElementById('modal');
const modalWrapper = document.getElementById('modalWrapper');

showModal.addEventListener('click', () => {
    modal.style.display = "block";
    modalWrapper.style.display = "block";
})

hideModal.addEventListener('click', () => {
    modalWrapper.style.display = "none";
    modal.style.display = "none";
})