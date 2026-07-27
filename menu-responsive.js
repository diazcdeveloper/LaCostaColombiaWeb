
const menu = document.getElementById("menu");
const enlaces = document.getElementById("enlaces");
const enlace = document.querySelectorAll(".enlace");

const backToUp = document.getElementById("back-to-up");

menu.addEventListener('click', () => {
    enlaces.classList.toggle("open");
    menu.classList.toggle('close');
});

enlace.forEach(e => {
    e.addEventListener('click', () => {
        enlaces.classList.remove("open");
        menu.classList.remove('close');
    });
});


window.onscroll = function() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToUp.style.display = "block";
    } else {
        backToUp.style.display = "none";
    }
}