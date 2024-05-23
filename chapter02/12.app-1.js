// user.js에서 user 변수 가져오기
const user = require('./10_user');
// hello.js에서 hello 함수 가져오기
const hello = require('./11_hello');

console.log(user);
console.log(hello);

// 변수 user, 함수 hello 사용
hello(user);
