console.log(`현재 모듈이 있는 폴더 경로: ${__dirname}`);
console.log(`현재 모듈이 있는 파일 경로: ${__filename}`);

// package.json에서 설정하는 방법

//     "type": "module" << 이거추가

//  {
//     "name": "src",
//     "version": "1.0.0",
//     ...
//     },
//     "type": "module"
//  }

// 파일 확장자 .mjs로 지정하는 방법도 있음
// -> package.json에 모듈 시스템 지정하면 안됨
