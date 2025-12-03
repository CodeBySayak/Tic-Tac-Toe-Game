let body=document.querySelector("body");

let btn=document.querySelector(".btn");
console.log(btn)
btn.addEventListener("click",()=>{
    console.log("clicked")
    body.classList.toggle("dark")
})

let arr= new Array(9).fill(null);
const wins = [
  [0,1,2],
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4,7], 
  [2,5,8], 
  [0,4,8], 
  [2,4,6]
];

let chance=0;
let boxes=document.querySelectorAll(".box");
let player=document.querySelector(".player");

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clickeed",box.id);
        let id=box.id;
        arr[id]= chance%2===0?"X":"O"
        box.innerText=arr[id];
        box.style.backgroundColor= chance%2===0?"#85edd6ff":"#d1ed85ff";
        player.innerText= chance%2===0?"O's Turn":"X's Turn";
        if(checkwin()){
            alert(`${arr[id]} has won the game`)
        }
        chance++;
        if(chance===9){
            alert("Game Draw")
            reset();
        }
    })
})

function checkwin(){
    for(let [a,b,c] of wins){
        if(arr[a]!=null && arr[a]===arr[b] && arr[b]===arr[c]){
            return true;
        }
    }
    return false;
}
function reset(){
    arr.fill(null);
    chance=0;
    boxes.forEach((box)=>{
        box.innerText="";
    })
}