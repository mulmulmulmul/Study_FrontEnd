/* 
[모듈 내보내기] =================================
export 키워드 사용
=================================================
*/

console.log('** item.js 시작 **');

// [1. named export] ----------------------------
// : 이름이 정의된 내보내기 방식
// : 함수명, 변수명 등 왼쪽에 export 키워드 사용
// : 한 모듈 내 여러 개 내보내기 가능
// ----------------------------------------------
// 이름있는 function. global에 올라가서 바로 내보내기, 가져오기 가능

// // 1-1) 방법 1 : export 키워드를 함수명 왼쪽에 사용
// export function info() {
//   console.log('등록된 상품이 없습니다.');
// } 

// // 1-2) 방법 2 : export 키워드를 별도로 사용 *** 
// function edit() { 
//   console.log('상품 수정합니다.')
// }

// function del() {
//   console.log('상품 삭제합니다.')
// }

// // 여러개 한번에 내보내기
// export { edit, del }
// // export { edit }
// // export { del }

export function info() {
  console.log('등록된 상품이 없습니다.');
}

function edit() {
  console.log('상품 수정합니다.');
}

export { edit }

function del() {
  console.log('상품 삭제합니다.');
}

function add() {
  console.log('상품 추가합니다.');
}

export { del, add }

// [2. defalut export] -------------------------------------
// : default 키워드 사용
// : 기본 내보내기
// : 한 모듈 내에 하나만 defalut 내보내기 가능
// : {} x
// : default import -> import 모듈에 default 하나만 존재
// ---------------------------------------------------------

// 2-1) 방법 1 : default 키워드를 함수에 바로 사용
// export default function add() {
//   console.log('상품이 등록되었습니다.');
// }

// 2-2) 방법 2 : default 키워드를 아래에 별도로 사용 *** 
// function add() {
//   console.log('상품이 등록되었습니다.');
// }

// export default add;

// // export default function aaa() {
// // 한 파일에 defalut export 하나만 가능
// // }

// 2-3) 방법 3 : 익명함수, 화살표함수 - export defalut 바로 써야 함 ??
// export default function () {
//   console.log('상품이 등록되었습니다.');
// }
// export default () => console.log('상품이 등록되었습니다.');

// export default function etc() {
//   console.log('defalut export');
// }

const etc2 = function() {
  console.log('defalut export2')
}

export default etc2;

console.log('** item.js 종료 **');