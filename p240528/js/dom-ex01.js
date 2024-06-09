/*
1. 단일 element 추출 (최초 1개 반환)
1-1) document.getElementById('아이디')
1-2) document.querySelector('선택자')
      아이디: #아이디
      클래스: .클래스
      태그  : 태그

2. 복수 element 추출 (반환)
2-1) document.getElementsByClassName('클래스') HTMLcollection 반환
2-2) document.getElementsByTagName('태그') HTMLcollection 반환
2-3) document.querySelctorAll('선택자') NodeList 반환 (+gelElementByName)
     document.querySelctorAll('선택자1, 선택자2') or
*/

// 1. 단일 엘리먼트 추출 (반환)
const id_txt = document.getElementById('txt');
const id_greeting = document.querySelector('#greeting');

// 2. 복수 엘리먼트 추출 (반환)
const class_c_txt = document.getElementsByClassName('c_txt');
const div = document.getElementsByTagName('div');
const selectorAll = document.querySelectorAll('.c_txt');
const selectorAll2 = document.querySelectorAll('h1, .c_txt');
// const selectorAll2 = document.querySelectorAll('div, .c_txt'); // 중복된 엘리먼트 제거

// 출력
console.log('id_txt>>', id_txt);
console.log('typeof id_txt>> ', typeof id_txt) // object

// 요소 내부 텍스트(컨텐츠) 설정/반환 : innerText (자바스크립트 속성(키))
console.log('id_txt.innerText >>', id_txt.innerText);
id_txt.innerText = '변경된 텍스트!' // 실제 엘리먼트 찾아가서 값변경
console.log('id_txt.innerText >>', txt.innerText); // id는 id명으로 바로 속성접근 가능
txt.innerText = '좋은 하루!'
// 엘리먼트 추출 함수는 주기적으로 확인

console.log('id_greeting >>', id_greeting);
console.log('id_greeting innerText >>', id_greeting.innerText);

console.log('class_c_txt >>', class_c_txt); // HTMLcollection
console.log(typeof class_c_txt); // object

// class_c_txt (collection innerText - byClassName) 출력
// 1) 인덱스 접근
console.log('class_c_txt[1].innerText >>', class_c_txt[1].innerText)
console.log('class_c_txt[1][innerText] >>', class_c_txt[1]['innerText'])
console.log('class_c_txt[0].innerText >>')
console.log(class_c_txt[0].innerText);
console.log(class_c_txt[0]['innerText'])

// 2) id 접근
console.log('class_c_txt.greeting.innerText >>', class_c_txt.greeting.innerText)
console.log('class_c_txt.greeting[innerText] >>', class_c_txt.greeting['innerText'])
console.log('class_c_txt.txt.innerText >>');
console.log(class_c_txt.txt.innerText);
console.log(class_c_txt.txt['innerText']);

console.log('div >>', div);

// selectAll (NodeList - querySelector) 출력
console.log('selectorAll >>', selectorAll); // NodeList

// 1) 인덱스 접근
console.log('selectorAll[1].innerText >>', selectorAll[1].innerText)
console.log('selectorAll[1].innerText >>', selectorAll[1]['innerText'])
//    HTMLCollection       /    NodeList
// 속성으로  id 제공 o             x  (id로 접근 불가)
console.log(selectorAll[0].innerText);
console.log(selectorAll[0]['innerText']);

console.log('selectorAll2 >>', selectorAll2)
