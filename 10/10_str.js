let arr =  [1,2,3,4,5];


parseInt

console.log("arr : ", arr);
console.log("arr 개수 : ", arr.length);

//배열 요소 접근
console.log("맨처음요소 접근 : ", arr[0])
console.log("두번째요소 접근 : ", arr[1])

//배열의 전체 요소에 접근 : 배열의 순회
console.log("for ...")
for (let i = 0; i < arr.length; i++) {
  console.log(`${i+1}번째 : ${arr[i]}`);
}

console.log("for ... in")
for (let i in arr) {
  console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

//구조분해할당
console.log("for ... of")
for (let [i,item] of arr.entries()) {
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
}

console.log("forEach")
arr.forEach((item, i) => {
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`)
});

// arr = []
// arr.length = 0;
// console.log("arr : ", arr)

//맨뒤에 추가
arr.push(6);
console.log("arr push : ", arr);
//맨뒤에 삭제
arr.pop();
console.log("arr pop : ", arr);

//맨처음 추가
arr.unshift(6);
console.log("arr unshift : ", arr);
//맨처음 삭제
arr.shift();
console.log("arr shift : ", arr);

//splice로 삭제
let arr2 = arr.splice(2, 1);
console.log("arr splice : ", arr);
console.log("arr splice : ", arr2);

//splice로 변경
arr.splice(2, 1, "a");
console.log("arr splice : ", arr);

//splice로 추가
arr.splice(2, 0, 3)
console.log("arr splice : ", arr);


arr = [1, 2, 3, 4, 5];
arr2 = [];

for(let item of arr) {
  let item2 = item * 2;
  arr2.push(item2);
}
console.log("arr for of 결과 arr2 : ", arr2);


arr2 = arr.map((item) => {
  let item2 = item * 2;

  return item2
});

console.log("arr map 결과 arr2 : ", arr2);

//callback 함수의 매개변수가 1개이면 () 생략가능
//callback 함수의 body에 return만 있으면 {}와 return 생략가능
arr2 = arr.map(item => item * 2);
console.log("arr map 결과 arr2 : ", arr2);

arr2 = arr.map(item => item % 2 == 0 ? "짝" : "홀");
console.log("arr map 결과 arr2 : ", arr2);

arr2=[];
for(let item of arr) {
  if(item % 2 == 0) arr2.push(item);
}
console.log("arr filter for of 결과 arr2 : ", arr2);

arr2 = arr.filter(item => item % 2 == 0);
console.log("arr filter 결과 arr2 : ", arr2);

//배열 정렬
arr = [4, 5, 2, 1, 3]
console.log(`${arr} => 정렬 ${arr.sort((a, b) => b-a)}`);