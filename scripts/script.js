/*SIDE BAR*/
const body = document.querySelector("body")
const sideBar = body.querySelector("nav")
const toggle = body.querySelector(".minimize")
const info = body.querySelector("section")
toggle.addEventListener("click",()=>{
    sideBar.classList.toggle("hide");
    info.classList.toggle("mini");
})