let arr = [0,0,0,0,0,0,0,0,1];
let isSuffle = false;
let cnt = 0;

const init = (bt) => {
  bt.innerHTML = "재시작";
  isSuffle = false;
  cnt = 0;
}


document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('.col');
  const bt = document.querySelector('button');
  const msg = document.querySelector('.msg');
  
  //버튼 처리
  bt.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isSuffle) {
      isSuffle = true;

      //배열 섞기
      arr.sort(() => Math.random() - 0.5);
      console.log(arr)
      bt.innerHTML = "게임중 ..."

      msg.innerHTML = " ";
      for(let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;
      }
     }
  });

    //div 박스처리
    for (let col of cols) {
      col.addEventListener('click', () => {
        //폭탄이 섞이지 않으면 클릭 안됨
        if (!isSuffle) {
          msg.style.color = "black";
          msg.innerHTML = `<h2>실패ㅠㅜ</h2>`;
          return;
        }

        //이미지가 있는지 확인
        if(col.innerHTML.includes("img")) return;

        //실패인 경우 더 이상 눌러지지 않게
        if (msg.innerHTML.includes("실패ㅠㅜ")) return;

        let idx = col.getAttribute("id").slice(-1)-1;
        console.log(idx, arr[idx]);
        if (arr[idx] == 0) {

          //하트
          col.innerHTML = `<img src="../img/hart.png">`;

          //하트 개수
          cnt++;

          //하트가 8개가 되면
          if (cnt == 8) {
            msg.style.color = "green";
            msg.innerHTML = `<h2>성공!!</h2>`;

            //폭탄인 곳 찾기
            console.log(arr.indexOf(1));

            //전체 하트
            let i = arr.indexOf(1);
            cols[arr.indexOf(1)].innerHTML = `<img src="../img/hart.png">`;
            init(bt);
        
            bt.innerHTML = "게임종료";
          }
        }
        else {
          //폭탄
          col.innerHTML = `<img src="../img/boom.png">`;
          msg.style.color = "red";
          msg.innerHTML = `<h2>실패!!</h2>`;  
          init(bt); 
        }

      });

      };


});


