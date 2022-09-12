const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('btn-go');

//modal 창 오픈
modalOpenBtn.addEventListener('click', (event) => {
   event.preventDefault();
   modal.classList.add('active');
});