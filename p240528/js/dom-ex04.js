// 엘리먼트 접근
const emoji = document.querySelector('.emoji');
const remove = document.querySelector('.remove');
const h1 = document.querySelector('h1');

// [이벤트 리스너] =================================================
// : 이벤트가 발생했을 때, 그 처리를 담당하는 함수 (이벤트 감지)
// : 이벤트 핸들러(event handler) - 이벤트 감지 후, 실행하는 함수
// << 문법 >>
// 엘리먼트.addEventListner('이벤트', 이벤트 핸들러) -> 이벤트 핸들러를 리스너에 등록 (js에서 제어)
// =================================================================

// [이벤트 핸들러] 이모지 출력 =================================================
// [함수 선언식]
function emojiHandler(event) {
  console.log(event);
  console.log('😂');
}

// [이벤트 핸들러] 이모지 출력 핸들러 해제 =========================================
// [화살표 함수]
// 엘리먼트.removeEventListener('이벤트', 이벤트 핸들러) : 이벤트 발생 시, 이벤트핸들러 해제
const removeHandler = () => { // 라인을 지나갈 때 초기화되므로 이벤트리스너보다 위에 작성
  console.log('이모지 출력 이벤트 해제')
  emoji.removeEventListener('click', emojiHandler);
};

// 이벤트핸들러를 이벤트 리스너에 등록
emoji.addEventListener('click', emojiHandler);
// -> 화살표함수로 
// emoji.addEventListener('click', event => {
//   console.log(event);
//   console.log('🙌');
// })

// 이벤트 리스너에 등록된 이벤트핸들러 해제
remove.addEventListener('click', removeHandler);
// -> 화살표함수로 ??
// remove.addEventListener('click', () => {
//   console.log('이모지 출력 이벤트 해제')
//   emoji.removeEventListener('click', event => {
//     console.log(event);
//     console.log('🙌');
//   })
// })

h1.addEventListener('mouseover', () => {
  console.log('마우스 지나감');
  h1.style.backgroundColor = '#f00';
});
// -> 선언식, 표현식으로

// function h1handler() {
//   console.log('마우스 지나감');
//   h1.style.backgroundColor = '#ff0';
// }

// h1.addEventListener('mouseover', h1handler);

h1.addEventListener('click', () => h1.innerText = 'a');
// -> 선언식, 표현식으로

// const h1handler2 = function() {
//   h1.innerText = 'bye';
// }

// h1.addEventListener('click', h1handler2);
  