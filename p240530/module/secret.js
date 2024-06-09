// [모듈 다시 내보내기] ========================================
// 모듈의 보안 유지 가능, 관리 수월
// default로 내보낸 모듈을 한 파일에 import해서 named로 내보내기
// => 실행을 위한 파일에 여러 default(->named) 모듈 import 가능
// =============================================================

// hide 모듈 읽고 바로 내보내기
import hide from './hide.js';
// login 모듈 읽고 바로 내보내기
import login from './login.js';

// export default secret;
export { hide, login };
// export { login };

console.log('** secret.js 시작 **');

console.log('** secret.js 종료 **');