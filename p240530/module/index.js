/* 
[모듈 가져오기] 실행을 위한 파일 =========================================
import 키워드 사용
import 의미
: 외부 모듈(파일) 가져오기
: 해당되는 파일 실행 (여러번 import해도 1번만 실행)
==========================================================================
 */
console.log('** index.js 시작 **');

// [1. '정의된 내보내기'를 가져오기] ------------------------
// << 문법 >>
// import { 이름 } from '경로/파일명.확장자'
// 동일한 이름은 1번만 import 가능
// 이름 변경 불가능
// ----------------------------------------------------------

// // 1-1) 방법 1
// import { info } from './item.js' // item.js 찾아가서 실행 (1번만)
// info();

// // 1-2) 방법 2 : 한 번에 여러개 가져오기
// import { edit, del } from './item.js' 
// // import { edit } from './item.js'// 이름 중복 - error
// edit();
// del();

// // 1-3) 방법 3 : 한 번에 전부 가져오기 (객체 형태로)
// // as : alias ( * 의 별칭 지정해야 함 )
// import * as obj from './item.js';
// obj.info();
// obj.del();

import { info } from './item.js'
info();

import { edit } from './item.js'
edit();

import { del, add } from './item.js'
del();
add();

// [2. 'default 내보내기'를 가져오기] -----------------------
// << 문법 >>
// import 이름 from '경로/파일명.확장자'
// {} 반드시 생략, {} 사용하면 Error
// 이름 변경 가능 => 중복 import해도 에러x
// 파일명에 있는 defalut가 무조건 가져와짐
// ----------------------------------------------------------

// import Add from './item.js'; 
// import haha from './item.js';  
// Add();
// haha();

import item from './item.js';
// 이름변경 가능
import ho from './item.js';
item();
ho();


// [실행만 하는 import] =======================================================
// 저장된 주소, 이름이 없음 => hide.js 파일(모듈) 찾아가서 실행만 하겠다는 의미
// import './hide.js'; 

// // 같은 모듈을 다른 형태로 import 해도 한번만 실행
// import * as hide from './hide.js' 
import './test.js'
// import show from './hide.js';
// show();
// // import { default as showtwo } from './hide.js'
// // showtwo();

// [다른 모듈 거쳐서 가져오기] ------------------------------

// default 내보내기 -> 가져오기
// import secret from './secret.js';

// named 내보내기 -> 가져오기
import { hide, login } from './secret.js';
hide();
// import { login } from './secret.js';
login();

console.log('** index.js 종료 **');