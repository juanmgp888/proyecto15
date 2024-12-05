/*
import $ from 'jquery';

$(document).ready(function() {
    $("#boton").click(function() {
        alert('Me has pulsado... me voy de vacaciones a relajarme');
    });
});
*/


document.getElementById('boton').onclick = function() {
document.getElementById('boton').innerText ="Ya me has pulsado";
    alert('Me ha presionado... me voy de vacaciones a relajarme');
}


console.log('Hola mundo... por tercera vez');