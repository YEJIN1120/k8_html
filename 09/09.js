document.addEventListener('DOMContentLoaded', ()=>{
  //요소가져오기
  const txt1 = document.querySelector('#txt1') ;
  const txt2 = document.querySelector('#txt2') ;

  const bt1 = document.querySelector('#bt1') ;
  const bt2 = document.querySelector('#bt2') ;

  //회문
  bt1.addEventListener('click', (e)=>{
    e.preventDefault();

    let s1 = txt1.value.replaceAll(' ', '') ;
    let s2 = '' ;

    //반복문 이용
    // for(let i = s1.length - 1 ; i >=0 ; i--) {
    //   s2 = s2 + s1[i] ;
    // }

    //split 이용
    s2 = s1.split('').reverse().join('') ;

    console.log('s1=', s1) ;
    console.log('s2=', s2) ;

    if (s1 == s2) txt2.value = '회문입니다.' ;
    else txt2.value = '회문이 아닙니다.' ;
  });

  //숫자합계
  bt2.addEventListener('click', (e)=>{
    e.preventDefault();

    let total = 0 ;
    let cnt = 0;
    for(let c of txt1.value) {
      console.log(isNaN(c));
      if (c >= '0' && c <= '9') {
      // if (c !=' ' && !isNaN(c)) {
        total = total + parseInt(c) ;
        cnt++ ;
      }
    }

    if (cnt == 0 ) txt2.value = '숫자가 존재하지 않습니다.' ;  
    else txt2.value = total ;

  });
});