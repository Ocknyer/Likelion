const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('btn-go');
const modalCloseBtn = document.getElementById('btn-exit');

//modal 창 오픈
modalOpenBtn.addEventListener('click', (event) => {
   event.preventDefault();
   modal.classList.add('active');
});

//modal 창 닫기
modalCloseBtn.addEventListener('click', (event) => {
   event.preventDefault();
   modal.classList.remove('active');
});