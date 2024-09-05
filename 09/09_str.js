//문자열 연습 
let s = 'Hello JS!!' ;

console.log('문자열 : ', s);
console.log('문자열길이 : ', s.length);
console.log('문자열문자변환 : ', s.toUpperCase()) ;
console.log('숫자확인 : ', isNaN(s)) ;
console.log('첫번째글자 : ', s.charAt(0)) ;
console.log('첫번째글자 : ', s[0]) ;
console.log('맨마지막글자 : ', s[s.length - 1]) ;
console.log('맨마지막글자 : ', s.charAt(s.length - 1)) ;
console.log('맨마지막글자 : ', s.slice(-1)) ;
console.log('**문자열 분리 : ', s.split('')) ;

//문자열 순회
for(let c of s) {
  console.log(c) ;
}

for(let i in s) {
  console.log(i, '=>', s[i]);
}

//문자열 확인 
console.log('JS문자열 확인 : ', s.includes('JS'));
console.log('JS문자열 확인 : ', s.indexOf('JS'));

//문자열 자르기
console.log('문자열 자르기 :' , s.substring(5, 0)) ;
console.log('문자열 자르기 :' , s.slice(5, 0)) ; 

// s = '1234' ;
// console.log('문자열 : ', s);
// console.log('숫자확인 : ', isNaN(s)) ;

