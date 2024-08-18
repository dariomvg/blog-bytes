const menu = document.getElementById("menu"); 
const header = document.getElementById("header"); 

menu.addEventListener("click", () => {
    header.classList.toggle("open") 
})
