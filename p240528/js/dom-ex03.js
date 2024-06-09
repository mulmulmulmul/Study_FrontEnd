// [속성 onclick] ============================ 예전 방식
// 엘리먼트 접근
const element = document.getElementById('greeting');
//원래상태로 되돌리는 작업용, 초기 상태 변수에 저장
const greetingInitialText = element.innerText; 

// 함수 선언식, html 태그 속성 onclick 값으로 넣어주기
function textChange() {
  element.innerText = '오늘도 화이팅!';
  element.style.backgroundColor = 'yellow';
}

function textBefore() {
  element.innerText = greetingInitialText;
  element.style.backgroundColor = 'initial'; // initial : color의 초기 상태
}

// [jQuery] ==============================================================
// 버튼 클릭 동작으로 실행되는 내용을 js에서 모두 제어 (html, js 분리)
// $(선택자); 엘리먼트 반환. 바로 접근 가능
// const greeting = $('#greeting');

$('#one').click(() => {
  $('#greeting').html('즐거운 오후!'); //innerText 변경
});

$('#two').click(() => {
  $('#greeting').html(greetingInitialText); //innerText 변경
});
