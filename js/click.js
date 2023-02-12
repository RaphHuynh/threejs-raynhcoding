var accueil = document.getElementById('acc');
var bot = document.getElementById('bot');
var cont = document.getElementById('cont');

accueil.addEventListener('click', function (event) {
    dispatchWheelEvent(0);
});

bot.addEventListener('click', function (event) {
    dispatchWheelEvent(500);
});

cont.addEventListener('click', function (event) {
    dispatchWheelEvent(2500);
});

function dispatchWheelEvent(deltaY) {
    var event = new WheelEvent('wheel', {
        deltaY: deltaY
    });
    window.dispatchEvent(event);
}