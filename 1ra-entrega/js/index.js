for ( let i = 0 ; i <= 3 ; i++) {



let pregunta
let respuestaVerdadera


switch (i){
    case 1:
            pregunta = prompt ("¿ cuantos valones de oro tiene messi ? ");
            respuestaVerdadera = ("7");
            if (pregunta == respuestaVerdadera) {
                alert("respuesta correcta")
            } else {
                alert("respuesta incorrecta")
            }
        break;
    case 2:
        pregunta = prompt ("¿ cuantos valones de oro tiene mbappe ? ");
        respuestaVerdadera = ("0");
        if (pregunta == respuestaVerdadera) {
            alert("respuesta correcta")
        } else {
            alert("respuesta incorrecta")
        }
        break;
    case 3:
            pregunta = prompt ("¿ cuantos valones de oro tiene ronaldo ? ");
            respuestaVerdadera = ("5");
            if (pregunta == respuestaVerdadera) {
                alert("respuesta correcta")
            } else {
                alert("respuesta incorrecta")
            }
            break;
    default:
        alert("diga en numeros ¿ cuantos valones de oro tienen cada jugador nombrado ?")
        
}
}