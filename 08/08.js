document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const img = document.querySelector('.row > img') ;
  const txt1 = document.querySelector('#txt1') ;
  const bt1 = document.querySelector('#bt1') ;
  
  
  //랜덤수 
  let n ;
  //flag 변수
  let flag = false ;

  bt1.addEventListener('click', (e)=>{
    e.preventDefault();

    //if (flag == false) {
    if (!flag) {
      n = Math.floor(Math.random() * 100) + 1 ; //1 ~ 100
      console.log('n=', n) ;
      flag = true;

      if (txt1.style.display == 'none') {
        img.setAttribute('src', '../img/what.png') ;
        txt1.style.display = 'inline' ;
        txt1.value = '' ;
        txt1.focus() ;
        bt1.innerHTML = '확인';
        return ;
      }
    }
    
    if (n === parseInt(txt1.value)) {
      img.setAttribute('src', '../img/good.png') ;
      txt1.style.display = 'none' ;
      bt1.innerHTML = '번호를 다시 생성하세요.';
      flag = false ;
    }
    else if ( n > parseInt(txt1.value)) {
      img.setAttribute('src', '../img/up.png') ;
    }
    else {
      img.setAttribute('src', '../img/down.png') ;
    }
  });
}) ;