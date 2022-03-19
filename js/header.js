/******************* Navigation ******************/

let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");
let nav = document.querySelector(".header");

toggle.addEventListener("click", function(){
    nav.classList.remove("toggle__on2");
    nav.classList.toggle("toggle__on");
})

toggle2.addEventListener("click", function(){
    nav.classList.remove("toggle__on");
    nav.classList.toggle("toggle__on2");
})
