const meteo = document.querySelector("#bot-meteo");
const choix = document.querySelector("#bot-choix");
const contact = document.querySelector("#bot-contact");
const accueil = document.querySelector("#accueil");

window.addEventListener("wheel", function (event) {
    if(event.layerY==0){
        scrollY=-event.deltaY;
        console.log(scrollY);
        console.log("Salut");
    }
    else{
        scrollY -= event.deltaY;
        console.log("Salut");
        console.log(scrollY);
    }
    if (window.scrollY > 1) {
        scrollY = 1;
        console.log(accueil+"hello");
        accueil.style.display = "none";
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= 0) {
        console.log(accueil+"hello");
        console.log("salut");
        accueil.style.display = "flex";
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= -500) {
        console.log(accueil+"hello");
        console.log("salut");
        accueil.style.display = "none";
        meteo.style.display = "flex";
        choix.style.display = "none";
        contact.style.display = "none";
    }
    if (window.scrollY <= -1500) {
        console.log("salut");
        console.log(accueil+"hello");
        accueil.style.display = "none";
        meteo.style.display = "none";
        choix.style.display = "flex";
        contact.style.display = "none";
    }
    if (window.scrollY <= -2500) {
        console.log("salut");
        console.log(accueil+"hello");
        accueil.style.display = "none";
        meteo.style.display = "none";
        choix.style.display = "none";
        contact.style.display = "flex";
    }
    if (window.scrollY <= -3500) {
        event.preventDefault();
        scrollY = -3500;
    }
}, { passive: false });