
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const menuKebab = document.querySelector(".menu-kebab");
const myContacte = document.getElementById("contacte");

btnClose.addEventListener("click", ()=>{
    menuKebab.style.display = "none";
    btnOpen.style.zIndex = "1";
    btnClose.style.zIndex = "-1";
    btnClose.style.opacity = "0";
    btnOpen.style.opacity = "1";
    btnClose.style.transition = "0.9s";
    });
btnOpen.addEventListener("click", ()=>{
menuKebab.style.display = "flex";
btnOpen.style.zIndex = "-1";
btnClose.style.zIndex = "1";
btnClose.style.opacity = "1";
btnOpen.style.opacity = "0";
btnOpen.style.transition = "0.9s";
});

