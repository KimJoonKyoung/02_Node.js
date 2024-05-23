const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

// => 화살표 함수(람다) 한 줄짜리 함수일 때, {} 생략 가능
const display = (result) => {
  console.log(`${result} 완료!`);
};

order('아메리카노', display);
