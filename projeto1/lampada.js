const turnOn = document.getElementById('turnOn');
const TurnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn () {
    if ( !isLampBroken() ){
        lamp.src = '/projeto1/ligada.jpg'

    }
        lamp.src = '/projeto1/ligada.jpg';
}
function lampOff () {
    if (!isLampBroken()) {

        lamp.src = '/projeto1/desligada.jpg';
}
    }

function lampBronken() {
    if (!isLampBroken () ){
        lamp.src = '/projeto1/quebrada.jpg';
}
    }

function isLampBroken() {
        return lamp.src.indexOf ('quebrada') > -1
}

turnOn.addEventListener ( 'click', lampOn);
TurnOff.addEventListener( 'click', lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBronken);