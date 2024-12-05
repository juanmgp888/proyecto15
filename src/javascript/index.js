//import $ from 'jquery';  Se usa con 'modules', queno vamos a ver en el curso.
// Un elemento superpone al otro. Si disparan seguidos y no nos da tiempo a ver uno de ellos salvo 
// usando el depurador.
/*

 // DIFERENTES MANERAS DE CAMBIAR EL TEXTO DENTRO DE UN BOTÓN Y DE PREPARAR ESE COMPORTAMIENTO:
*/

$(document).ready(function() {


    /*
        $("#boton").click(function() {
            $('#boton').text('Me has pulsado... me voy de vacaciones a relajarme un poquito.');
        });
    */
    
    
    
    /*
    $("button").on("click", function(event){
        $(this).text("Otro mensajito");
    })
    */
    
    // document.getElementById('boton').innerText ="Ya me has pulsado------S";
    
    
    /*
    document.getElementById('boton').onclick = function() {
    */
    
    // Más legible: this.innerText="Ya me has pulsado"
    //    alert('Me ha presionado... me voy de vacaciones a relajarme');
    //}
    /*
    accionParaElClick = function(event){
        $(this).text("Bye bye");
    }
    $("button").on("click",accionParaElClick); // Debajo del accionParaElClick
    
    
    console.log('Hola mundo... por tercera vez');
    */
    
    /*
    solicitudes = ["Mensaje1","Hola","Adiós"];
    for (i=0; i<solicitudes.length; i++){
        $("#maestro").append(
            $("<li>").text(solicitudes[i])
        );
    }
    */
    
    let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "Secreto"
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pero"
    }, {
        "id": 3, 
        "nombre": "de la Encarnación",
        "apellido": "No tanto"
    }];


    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>")
                .text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
                .val(solicitudes[i])
                .attr("id", "id" + solicitudes[i].id)
        );
    }



    $("li").on("click", function(event) {
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();

            let solicitud = $(this).attr("id");

            $("#id").val(solicitud);
            $("#nombre").val("Juan"  + solicitud);
            $("#apellido").val("Secreto" + solicitud);            
        }
        
    })
    
    
    });
