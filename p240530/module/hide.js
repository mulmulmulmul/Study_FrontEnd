console.log('** hide.js 시작 **');

function show() {
  console.log('>>> [hide.js] show() 실행')
}

// 함수 정의, 아래에서 export
export default show // 권장하는 형태
// export { show as default } 문법적으로 지원되는 형태

console.log('** hide.js 종료 **');