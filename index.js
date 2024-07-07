const btne1=document.querySelector(".btn");

btne1.addEventListener("mouseover",(event)=>{
    const x=event.pageX-btne1.offsetLeft;
    const y=event.pageY-btne1.offsetTop;

    btne1.style.setProperty("--xPos",x+"px");
    btne1.style.setProperty("--yPos",y+"px");

});
