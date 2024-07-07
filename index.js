const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questione1=document.getElementById("quest");
 const forme1=document.getElementById("form");
 const inpute1=document.getElementById("input");
 const score1=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
score1.innerText=`score:${score}`;

questione1.innerText=`what is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;
forme1.addEventListener("submit",()=>{
    const userAns=+inpute1.value
    if(userAns===correctAns){
        score++;
        uptlocalstore()
    }else{
        score--;
        uptlocalstore()
    }
});
function uptlocalstore(){
    localStorage.setItem("score",JSON.stringify(score))
}

