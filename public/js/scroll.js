const meteo = document.querySelector("#bot-meteo");
const choix = document.querySelector("#bot-choix");
const contact = document.querySelector("#bot-contact");

window.addEventListener("wheel", function (event) {
    if(event.layerY==0){
        scrollY=-event.deltaY;
    }
    else{
        scrollY -= event.deltaY;
    }
    if (window.scrollY > 1) {
        scrollY = 1;
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= 0) {
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= -500) {
        meteo.style.display = "flex";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= -1500) {
        meteo.style.display = "none";
        choix.style.display = "flex";
        contact.style.display = "none";
    }
    if (window.scrollY <= -2500) {
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "flex";
    }
    if (window.scrollY <= -3500) {
        event.preventDefault();
        scrollY = -3500;
    }
}, { passive: false });