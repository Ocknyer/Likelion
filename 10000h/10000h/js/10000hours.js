// 모달창
const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('btn-go');
const modalCloseBtn = document.getElementById('btn-exit');
// form 변수
const locationForm = document.querySelector('form');
const job = document.querySelector('.job');
const time = document.querySelector('.time'); 
const resultJob = document.querySelector('#work');
const resultTime = document.querySelector('#someday');
// 결과값 창
// const loadingSection = document.querySelector('.loading-wrapper');
// const resultSection = document.querySelector('.result-wrapper');

// input 값 연결
locationForm.addEventListener('submit', (e) => {
   e.preventDefault()
   const locationOne = job.value
   const locationTwo = (10000 / time.value).toFixed();
   resultJob.textContent = locationOne;
   resultTime.textContent = locationTwo;
   loadingTime();
   setTimeout(function () {
      loadingTimeout();
   }, 1300);
});

const loadingTime = () => {
   document.querySelector('.loading-wrapper').style.display = "block";
   document.querySelector('.result-wrapper').style.display = "none";
};

const loadingTimeout = () => {
   document.querySelector('.loading-wrapper').style.display = "none";
   document.querySelector('.result-wrapper').style.display = "block";
   // loadingSection.style.display = "none";
   // resultSection.style.display = "block";
};

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