// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btn_modal = document.querySelector('#btn-modal');
// const btn_close = document.querySelector('.btn-close');
// const form = document.querySelector('form');
// const submit = document.querySelector('.sign-up');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_modal = document.querySelector('.btn-modal');
const btn_close = document.querySelector('.btn-close')
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');
const submit = document.querySelector("button[type='submit']");

/* 
====================================================================
* text box에 입력 후, 등록버튼을 클릭하면 입력된 항목(li) 추가
[구현 1] listener, handler
====================================================================
*/
// // form은 submit버튼 없어도 입력하고 enter -> submit
// form.addEventListener('submit', (event) => {
//   // 1) refresh 방지 : submit기능(서버에 페이지요청) 없앰
//   event.preventDefault();

//   // 2-1) li 엘리먼트 생성 : document.createElement('태그명')
//   const li = document.createElement('li');
//   // 2-2) li에 컨텐츠 설정 (input 속성 value: 입력된 text) 
//   li.innerText = input.value;
//   // 2-3) ul의 자식 엘리먼트 추가 (uppendChild())
//   ul.appendChild(li) 
  
//   // 3) input에 입력된 문자열 삭제 - 빈 문자열 또는 null
//   // input.value = '';
//   input.value = null;
// });


// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const li = document.createElement('li');
//   li.innerText = input.value;
//   ul.appendChild(li);

//   input.value='';
// })


/* 
====================================================================
[구현 2] refactoring
* 위 코드 분리 : listener, handler
====================================================================
*/

// // [함수] ------------------------------------------------------- 
// //'ul에 li를 추가'하는 기능이 명확해서 따로 함수 정의 (다른 곳에서도 사용할 수 있게 - 매개변수 필요)
// const addLi = (content) => {
//   const li = document.createElement('li');
//     li.innerText = content;
//     ul.appendChild(li) 
// }

// // [handler] ----------------------------------------------------
// const handler = (event) => {
//   event.preventDefault();

//   if(input.value !== ''){ //input.value에 빈 문자열이 아닐 때만 li추가
//     addLi(input.value);
//   }

//   input.value = '';
// }

// // [listener] ----------------------------------------------------
// // form.addEventListener('submit', handler);
// submit.addEventListener('click', handler); //form은 엔터치면 그냥 submit. 등록버튼에 해주는 게 정확
const liRemove = (event) => {
  const target = event.target.parentElement; // li

  item_list = item_list.filter((item) => {
    return item.id != target.id;
  })
    
  local_save();
  target.remove();

}


// handler 위에 li추가 기능 빼주기
const liAdd = (item) => {
  const li = document.createElement('li');
  ul.appendChild(li);
  
  const span_content = document.createElement('span');
  span_content.innerText = item.content;
  // li.innerText = content // li의 컨텐츠에 저장되는 대상은 코드에 따라 달라질 수 있어서 매개변수를 받는다
  
  const btn_cross = document.createElement('button');
  li.append(span_content, btn_cross);

  
  btn_cross.addEventListener('click', liRemove);
  li.id = item.id;
}

let item_list = [];

const local_save = () => {
  localStorage.setItem('li_item', JSON.stringify(item_list));
}


// handler
const handler = (event) => {
  event.preventDefault();
  
  if(input.value != ''){
    const item = {
      id: Date.now(),
      content: input.value, 
    };
    item_list.push(item);
    liAdd(item);
    local_save();
  }
  
  input.value='';
}

// listener
submit.addEventListener('click', handler);

/* 
====================================================================
[구현 3] 기능 추가
1) 삭제 버튼 
  1-1) li 엘리먼트 추가되면, 삭제 버튼도 같이 추가되도록
  1-2) 삭제 버튼을 클릭하면, li 엘리먼트 삭제

2) local storage 
  2-1) li content를 web browser-Local storage에 저장 (다른 pc 웹브라우저로 접속시 x)
  2-2) 삭제 버튼을 클릭하면, web browser-Local storage에 저장된 데이터 삭제
  2-3) 새로고침(웹페이지 요청)해도 li 남게
====================================================================
*/

// // [handler] li 삭제 ----------------------------------------------------
// const deleteLi = (event) => {
//   // console.log('삭제 버튼 클릭됨');

//   // 이벤트가 발생된 대상의 부모 저장
//   const target = event.target.parentElement; // = li
  
//   // 삭제 버튼 클릭된 엘리먼트 아이디 확인
//   console.log(target.id);
  
//   // 삭제 버튼 클릭된 엘리먼트 제외한 나머지 추출
//   li_items = li_items.filter((item) => {
//     console.log('item >>', item)
//     console.log('item.id >>', item.id)
//     console.log('item.id type >>', typeof item.id) // number
//     console.log('target.id >>', target.id)
//     console.log('target.id type >>', typeof target.id) // string
//     console.log('item.id != target.id >>', item.id != target.id)
//     return item.id != target.id; // 타입비교 x
//   });

//   console.log('삭제 후 li_items >>', li_items);

//   // localStorage에 반영 - save 호출
//   storage_save();

//   // li 삭제
//   target.remove();
// };

// // [함수] li 추가 ------------------------------------------------------- 
// // const addLi = (content) => {
// const addLi = (li_item) => {
//   const li = document.createElement('li');
//   // li.innerText = content;
//   ul.appendChild(li); 

//   // span 엘리먼트 생성
//   const span_content = document.createElement('span');
//   span_content.innerText = li_item.content;
//   // li.appendChild(span_content);

//   // 삭제 버튼 생성
//   const btn_cross = document.createElement('button');
//   // li.appendChild(btn_cross);

//   // 삭제 버튼 : 리스너에 핸들러 등록
//   btn_cross.addEventListener('click', deleteLi);

//   // li 자식으로 span, button 한번에 추가 : append 여러개 추가
//   li.append(span_content, btn_cross);

//   // local storage에 저장된 요소 삭제할 때 기준으로 사용될 id(li 속성) 지정
//   li.id = li_item.id; // <li id="">
//   // console.log('매개변수 li_item: ', li_item);
// }

// // [handler] ----------------------------------------------------
// let li_items = []; // 배열 선언

// // local storage에 저장하는 함수
// const storage_save = () => {
//   localStorage.setItem('li_items', JSON.stringify(li_items));
// };

// const handler = (event) => {
//   event.preventDefault();

//   if(input.value !== ''){ 
//     const li_item = { // 1. 객체 생성 - 속성으로 키, 값
//       id: Date.now(), // 유일한 값 (삭제 작업 위함)
//       content: input.value,
//     };

//     li_items.push(li_item); //2. 배열에 추가
//     console.log(li_items);
    
//     // addLi(input.value); 
//     // 3. li 추가
//     addLi(li_item);

//     // 4. storage 저장
//     storage_save();
//   }
//   input.value = '';
// }

// // [listener] ----------------------------------------------------
// submit.addEventListener('click', handler); 

// // [모달] =======================================================
// /* 모달 : 활성화 */
// // classList : class관련 기능
// // add : class 추가
// btn_modal.addEventListener('click', () => {
//   modal.classList.add('active');
//   overlay.classList.add('active');
//   /* [과제] 모달창 열면 이메일 입력창 초기화 */
  
// });

// /* 모달 : 비활성화 */
// // remove : class 삭제
// // btn_close.addEventListener('click', () => {
// //   modal.classList.remove('active');
// //   overlay.classList.remove('active');
// // });

// // overlay.addEventListener('click', () => {
// //   modal.classList.remove('active');
// //   overlay.classList.remove('active');
// // });

// /* 동일한 이벤트리스너 사용 시 중복제거 */
// // 1) 엘리먼트 배열에 저장
// const close_elements = [btn_close, overlay]
// // 2) 배열함수 forEach
// close_elements.forEach(element => {
//   // console.log(element)
//   element.addEventListener('click', () => {
//       modal.classList.remove('active');
//       overlay.classList.remove('active');
//     });
// })

// 1) 모달 활성화
btn_modal.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
})

// 2) 모달 비활성화
// btn_close.addEventListener('click', () => {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// })

// overlay.addEventListener('click', () => {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// })

// 3) 동일한 리스너 사용 시 엘리먼트 배열에 추가 후 배열함수 사용
const modal_close = [btn_close, overlay];
modal_close.forEach(value => {
  value.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

/* 
// ====================================================================
// =========== web browser local storage ==============================

[저장하기 / 가져오기] 
<< 문법 >>
localStorage.setItem(key, value)
localStorage.setItem('문자열', '문자열')
localStorage.getItem(key)
localStorage.getItem('문자열)
=======================================================================
*/
// 1-1. 저장하기
// localStorage.setItem('name', '홍길동');

// 1-2. 가져오기
// const value = localStorage.getItem('name');
// console.log('[key] name >>', value);

// 동일한 key -> 값변경됨 (key는 중복되면 x)
// localStorage.setItem('name', '박보검');

// 2-1. 객체 저장하기
// obj = {
//   name: '이미자',
//   age: 55,
// };

// [객체를 JSON(문자열)로 변환] =======================================
// : js와 json이 인식하는 타입이 달라서 변환해줘야 함
// : object type -> JSON
// : 직렬화
// : JSON.stringify(객체)
// ====================================================================
// localStorage.setItem('obj', obj);
// obj_string = JSON.stringify(obj);
// console.log(typeof obj_string);
// console.log(obj_string);


// localStorage.setItem('obj', obj_string);

// 2-2. 객체 가져오기
// const obj_value = localStorage.getItem('obj');
// console.log('[key] obj >>', obj_value); // json 형태
// console.log(typeof obj_value); // string 

// [JSON(문자열)을 객체로 변환] =======================================
// : JSON -> object type
// : 역직렬화
// : JSON.parse()
// ====================================================================
// obj_value = JSON.parse(localStorage.getItem('obj'));
// console.log(typeof obj_value) // 객체
// console.log(obj_value.name) // 속성 .접근 가능

// [key] Date.now() ============================
// UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 
// 현재까지 경과된 밀리초를 반환
// 절대 중복되지 않는 값이어서 key로 사용
// =============================================
// console.log(Date.now());

// [초기화] ==========================================================
// 페이지가 로드될 때, local storage에 저장된 데이터 가져오기 (저장)
// const init = () => {
//   const local_storage_data = JSON.parse(localStorage.getItem('li_items'));
//   console.log(local_storage_data);

//   if(local_storage_data){ // true일 때만 실행
//     console.log('[전] li_items >>', li_items)
//     console.log('[전] li_items type >>', typeof li_items)
//     li_items = local_storage_data
//     console.log('[후] li_items >>', li_items)
//     console.log('[후] li_items type >>', typeof li_items)

//   // li 추가
//     li_items.forEach(value => addLi(value)); // error - 새로고침 시 li_items가 null이므로 forEach 실행 x
//   }
// };

// init(); // 무조건 실행돼서 맨 아래에 작성(마지막에 실행)

// console.log('<< 논리값 >>')
// console.log('null :', Boolean(null)) // false
// console.log('0 :', Boolean(0))
// console.log('-5 :', Boolean(-5))
// console.log('빈 배열 [] :', Boolean([])) // true
// console.log('빈 객체 {} :', Boolean({})) // true

const init = () => {
  const local_storage_data = JSON.parse(localStorage.getItem('li_item'));

  if(local_storage_data){ 
    item_list = local_storage_data
    item_list.forEach(value => liAdd(value)); 
  }
};

init(); 