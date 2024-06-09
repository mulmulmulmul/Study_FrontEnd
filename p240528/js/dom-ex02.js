const id_title = document.getElementById('title');
const append = document.getElementById('append');
const selector = document.querySelector('.paragraph'); //최초 1개
const paragraph = document.querySelectorAll('.paragraph'); // NodeList 반환
const paragraph2 = document.getElementsByClassName('paragraphs')

console.log(id_title)
console.log(paragraph);

// console.log(id_title.innerText);

id_title.innerText = '변경된 제목'; // 컨텐츠(텍스트) 설정
// title.innerText = '변경된 제목'; // id로는 바로접근 가능
title.innerHTML = '<div>엘리먼트 추가</div>'; // 자식 엘리먼트 <div>~</div> 설정, innerText도 변경됨


// [innerHTML] element 설정 (동적 추가) 
// innerHTML은 자식 엘리먼트 전체가 추출됨 / innerText는 태그와 상관없이 모든 text를 추출
console.log('title.innerHTML >>');
console.log(title.innerHTML); //<div>엘리먼트 추가</div>
append.innerHTML = '<h3>추가된 제목</h3><div>추가!</div>'
// 속성 innerHTML: "<h3>추가된 제목</h3><div>추가!</div>" (자식 엘리먼트)
// 속성 innerText: "추가된 제목\n추가!" (전체 컨텐츠)

console.log('첫 번째 단락 접근 >>');
console.log(selector);

selector.innerText = '첫 번째 단락만 변경';
selector.innerHTML = '<span>첫 번째 단락에 자식 엘리먼트 설정</span>'

// [style] js로 css 설정 -> inline 형식으로 들어옴 (선택자 우선순위 높다)
selector.style.color = '#f00';
/*
===========================================================
[문제]모든 단락의 텍스트를 가로 가운데 정렬하시오
===========================================================
*/
// p 엘리먼트가 어디에 있든, style 적용되어야 함 

// selectors가 NodeList (속성으로 인덱스)

// paragraph[0].style.textAlign = 'center';
// paragraph[1].style.textAlign = 'center';
// paragraph[2].style.textAlign = 'center';

// for(let i=0; i<3; i++) {
//   paragraph[i].style.textAlign = 'center';
// }

// [방법 1] for-of문
// for(let para of paragraph) {
//   para.style.textAlign = 'center';
// }

// [방법 2] 함수 정의, for-of문 내에서 호출
// const setTextAlign = function(args) {
//   args.style.textAlign = 'center';
// }

// for(let para of paragraph) {
//   setTextAlign(para);
// }

// [방법 3] 배열 함수 forEach, Array.from()
// paragraph.forEach() // NodeList type에 forEach 지원 x -> 배열 타입으로 변환해야 함

// Array.from() : NodeList/HTMLcollention을 Array로 형변환
// const arr_paragraph = Array.from(paragraph);
const arr_paragraph = Array.from(paragraph);
arr_paragraph.forEach(element => element.style.textAlign = 'right');

console.log(paragraph2); // HTML collection
const arr_para2 = Array.from(paragraph2);
arr_para2.forEach(value => value.style.textAlign = 'center')

// console.log('arr_paragraph >>');
// console.log(arr_paragraph);
// console.log('arr_paragraph type >>');
// console.log(typeof arr_paragraph);

// arr_paragraph.forEach(value => value.style.textAlign = 'center'); //변수명 element로 보완

console.log('-- SCRIPT 영역 끝 --');
