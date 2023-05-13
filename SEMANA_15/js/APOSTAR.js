function apostar(){
    //Generar número aleatorio.
    var a=Math.round(Math.random()*10);
    document.getElementById("resultado").value=a;
    //Asignar número ingresado al azar.
    var b=document.getElementById("apostado").value;
    //Validar a cierto. //Si no gana pierde.
    if (a==b){
        document.getElementById("salida").value="Ganó";
    } else {
        document.getElementById("salida").value="Perdió";
    }
    //
    }
    function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
    }