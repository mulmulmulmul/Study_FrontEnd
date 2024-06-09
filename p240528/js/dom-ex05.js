// 엘리먼트 접근
const h1 = document.getElementById('head');
const btn1 = document.querySelector('#ko');
const btn1remove = document.querySelector('#kor');
const btn2 = document.querySelector('#en');
const btn2remove = document.querySelector('#enr');

// 이벤트 리스너 - 화살표함수
h1.addEventListener('mouseover', () => h1.style.backgroundColor = 'green');

const koreanPrint = function() {
  console.log('가나다라');
}

btn1.addEventListener('click', koreanPrint);
btn2.addEventListener('click', () => console.log('ABCD'));

const removeKo = function() {
  btn1.removeEventListener('click', koreanPrint);
}

btn1remove.addEventListener('click', () => {
  console.log('한국어 해제');
  // btn1.removeEventListener('click', () => console.log('가나다라'));
  removeKo();
});

btn2remove.addEventListener('click', () => {
  console.log('영어 해제');
  btn2.removeEventListener('click', () => console.log('ABCD'));
})