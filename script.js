var p1;
var p2;
var arr=["cbg"];

let btn=document.getElementById("btn");


btn.addEventListener("click",(e)=>{
  e.preventDefault();
  let player1 = document.getElementById("player1").value;
  p1=player1;
  let player2 = document.getElementById("player2").value;
  p2=player2;

  boardvisible();
})

function boardvisible(){
  const cont=document.getElementsByClassName("container")[0];
  const board=document.getElementsByClassName("board")[0];
  board.innerHTML=`
            <button class="box" id="box1">0</button>
            <button class="box" id="box2">1</button>
            <button class="box" id="box3">2</button>

            <button class="box" id="box4">3</button>
            <button class="box" id="box5">4</button>
            <button class="box" id="box6">5</button>

            <button class="box" id="box7">6</button>
            <button class="box" id="box8">7</button>
            <button class="box" id="box9">8</button>`

            
            cont.appendChild(board);
            arr=document.getElementsByClassName("box");
            console.log(arr)
            gothilla();
}
//console.log(arr);



let chance=document.getElementById("chance");

var flag=0;

  function check(){
    if(flag>7){
      chance.innerText="match draw";
    }
    if(flag>=4){
        if((arr[0].innerText)==(arr[4].innerText) && (arr[4].innerText)==(arr[8].innerText)){
            document.getElementById("output").innerText=`${p1} is the winner`;
           (setTimeout(() => {
            document.location.reload();
           }, 5000));
        }
        if((arr[0].innerText)==(arr[3].innerText) && (arr[3].innerText)==(arr[6].innerText)){
          document.getElementById("output").innerText=`${p1} is the winner`;
          (setTimeout(() => {
            document.location.reload();
           }, 5000));
          
      }
        if((arr[3].innerText)==(arr[4].innerText) && (arr[4].innerText)==(arr[5].innerText)){
        document.getElementById("output").innerText=`${p1} is the winner`;
        (setTimeout(() => {
          document.location.reload();
         }, 5000));
       }
       if((arr[6].innerText)==(arr[7].innerText) && (arr[7].innerText)==(arr[8].innerText)){
        document.getElementById("output").innerText=`${p1} is the winner`;
        (setTimeout(() => {
          document.location.reload();
         }, 5000));
       }
    }
  }


console.log("1")

function gothilla(){
  for(let i=0;i<arr.length;i++){
    console.log("here I came")
    if(i%2==0){
      chance.innerText=`${p1}, your turn`;
    }
    else{
      chance.innerText=`${p2}, your turn`;
    }
    arr[i].addEventListener("click",()=>{
      if(flag%2==0){
          chance.innerText=`${p2}, your turn`;
          arr[i].innerHTML="X";
          arr[i].disabled=true;
          
          arr[i].style.background="black";
          arr[i].style.color="white"
          check();
      }
      else{
          chance.innerText=`${p1}, your turn`;  
          arr[i].innerHTML="O";
          arr[i].disabled=true;
          
          arr[i].style.background="black";
          arr[i].style.color="white";
          check();
      }
      flag++;
    })
  }
}


console.log("2")