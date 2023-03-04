const meteo = document.querySelector("#bot-meteo");
const choix = document.querySelector("#bot-choix");
const contact = document.querySelector("#bot-contact");
const accueil = document.querySelector("#accueil");

window.addEventListener("wheel", function (event) {
    if(event.layerY==0){
        scrollY=-event.deltaY;
    }
    else{
        scrollY -= event.deltaY;
    }
    if (window.scrollY > 1) {
        accueil.style.display = 1;
        meteo.style.opacity = 0;
        choix.style.opacity = 0;
        contact.style.opacity = 0;
        this.window.scrollY=1;
    }
    if (window.scrollY <= 0) {
        accueil.style.opacity = 1;
        meteo.style.opacity = 0;
        choix.style.opacity = 0;
        contact.style.opacity = 0;
    }
    if (window.scrollY <= -500) {
        accueil.style.opacity = 0;
        meteo.style.opacity += (-(scrollY/1500));
        choix.style.opacity = 0;
        contact.style.opacity = 0;
    }
    if (window.scrollY <= -1500) {
        accueil.style.opacity = 0;
        meteo.style.opacity = 0;
        choix.style.opacity +=(-(scrollY/2500));
        contact.style.opacity = 0;
    }
    if (window.scrollY <= -2500) {
        accueil.style.opacity = 0;
        meteo.style.opacity = 0;
        choix.style.opacity = 0;
        contact.style.opacity += (-(scrollY/3500));
    }
    if (window.scrollY <= -3500) {
        event.preventDefault();
        window.scrollY = -3500;
    }
}, { passive: false });