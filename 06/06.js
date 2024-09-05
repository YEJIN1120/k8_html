document.addEventListener("DOMContentLoaded", ()=>{
//이미지 가져오기
  const imgs = document.querySelectorAll("div > img");
//버튼 가져오기  
  const bts = document.querySelectorAll("button");
//결과 가져오기
  const msg = document.querySelector("#msg");

  //console.log(bts);

//버튼 클릭
  for (let bt of bts) { //반복문 for of (bst에 있는 bt을 하나씩 가져옴)
    //console.log(bt);
    bt.addEventListener("click", ()=>{
      //컴퓨터 랜덤수
      let comN = Math.floor(Math.random()*6) + 1; //1~6
      imgs[0].setAttribute("src", `../img/${comN}.png`);
      imgs[0].setAttribute("alt", `${comN}.png`);

      //사용자 선택수
      //console.log(bt.textContent.charAt(0));
      let userN = parseInt(bt.textContent.charAt(0));
      imgs[1].setAttribute("src", `../img/${userN}.png`);
      imgs[1].setAttribute("alt", `${userN}.png`);

      //결과출력
      if (comN === userN) {
        msg.textContent = "맞음";
      }
      else {
        msg.textContent = "틀림";
      }


    });
  }

}); 