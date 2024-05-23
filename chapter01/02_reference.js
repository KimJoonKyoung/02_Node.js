let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr1[0], arr2[0]);
console.log(arr1, arr2);

arr1[0] = 10;

console.log(arr1[0], arr2[0]);
console.log(arr1, arr2);

arr2[1] = 20;

console.log(arr1[1], arr2[1]);
console.log(arr1, arr2);
