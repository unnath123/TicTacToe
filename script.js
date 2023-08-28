var p1;
var p2;

let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    let player1 = document.getElementById("player1").value;
    p1=player1;
    let player2 = document.getElementById("player2").value;
    p2=player2;
})

let chance=document.getElementById("chance");

var flag=0;

  function check(){
    if(flag>=4){
        if((arr[0].innerText)==(arr[4].innerText) && (arr[4].innerText)==(arr[8].innerText)){
            document.getElementById("output").innerText=`${p1} is the winner`;
        }
    }
  }


var arr=document.querySelectorAll(".box");
for(let i=0;i<arr.length;i++){
  arr[i].addEventListener("click",()=>{
    if(flag%2==0){
        arr[i].innerHTML="X";
        arr[i].disabled=true;
        chance.innerText=`${p1}, your turn`;
        arr[i].style.background="black";
        arr[i].style.color="white"
        check();
    }
    else{
        arr[i].innerHTML="O";
        arr[i].disabled=true;
        chance.innerText=`${p2}, your turn`;
        arr[i].style.background="black";
        arr[i].style.color="white";
        check();
    }
    flag++;
  })
}

