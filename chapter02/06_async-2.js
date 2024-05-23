let likePizza = false;
const pizza = new Promise((resolve, reject) => {
  // if(likePizza===true)와 동일한 코드
  if (likePizza)
    // resolve : 작업이 성공했을 때 실행되는 함수
    resolve('피자를 주문합니다.');
  // reject : 작업이 실패했을 때 실행되는 함수
  else reject('피자를 주문하지 않습니다.');
});

pizza
  // 순서 보장
  // then : 작업이 성공했을 때 실행되는 코드(resolve 값을 받아옴)
  .then((result) => console.log(result))
  // catch : 작업이 실패했을 때 실행되는 코드(reject 값을 받아옴)
  .catch((err) => console.log('에러 : ' + err))
  // finally : 성공하든 실패하든 실행되는 코드
  .finally(() => console.log('finally'));

// 끝부분 입니다. 먼저 출력
// 프라미스
console.log('끝부분 입니다.');
