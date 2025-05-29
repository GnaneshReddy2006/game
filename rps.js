let u=0;
let c=0;
let arr=["rock","paper","scissor"]
let ops=document.querySelectorAll(".op")

const compChoice=(uCh)=>{
    let ch=arr[Math.floor(Math.random()*3)]
    console.log(`computer choice: ${ch}`);
    if(ch===uCh){
        console.log("draw")
        document.querySelector(".result").innerHTML="DRAW"
        document.querySelector(".result").classList.remove("name","win")
        document.querySelector(".result").classList.remove("name","loosse")
        document.querySelector(".result").classList.add("name","draw")
    } 
    else if( (uCh==="paper" && ch==="rock") || (uCh==="rock" && ch==="scissor") || (uCh==="scissor" && ch==="paper")){
         u++;
        document.querySelector("#u").innerText=u;
        console.log("u win")
        document.querySelector(".result").innerText="WIN"
        document.querySelector(".result").classList.remove("name","loose")
        document.querySelector(".result").classList.remove("name","draw")
        document.querySelector(".result").classList.add("name","win")
    } 
    else{
        c++;
        document.querySelector("#com").innerText=c;
        console.log("u loose")
        document.querySelector(".result").innerText="LOOSE"
        document.querySelector(".result").classList.remove("name","win")
        document.querySelector(".result").classList.remove("name","draw")
        document.querySelector(".result").classList.add("name","loose")
      

    }

}
ops.forEach((op)=>{
    op.addEventListener("click",()=>{
     let uCh=op.getAttribute("id")
     console.log(`your choice: ${uCh}`)
      compChoice(uCh); 
    })
})   