let bars = document.querySelector(".fa-bars")
let cross = document.querySelector(".fa-xmark")
let sidebar=document.querySelector(".sidebar")
bars.addEventListener("click",function(){
    sidebar.style.transform="translate(0px,0px)";
    bars.style.visibility="hidden";
    setTimeout(function(){
        cross.style.visibility="visible";
    },500)
})

function slideIn(){
    sidebar.style.transform="translate(-500px,0)"
    bars.style.left="10px"
    cross.style.visibility="hidden";
    setTimeout(function(){
        bars.style.visibility="visible"
    },500)
}

cross.addEventListener("click",slideIn)
let subheading= document.querySelector(".info h3")

// function changeBack(){
//        subheading.innerHTML=""
  
// }

// function change(){
//     setTimeout(()=>{
//         subheading.innerHTML=subheading.innerHTML+"Aspiring web developer and Mechanical Engineer !"
//     },2000)
//    changeBack()
// }
// setInterval(change,5000)

