function prefer(){
    let num=1;//Primer digiturno de la eps preferencial.
    let res=true;//Confirmación de siguiente turno.
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:  "+nomuser+"\n"+"SU TURNO ES: "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incremento de turno.
        }else{
            alert("ERROR EN TURNO...")
            break;
        }
    }
}
function user(){
    let num=1;//Primer digiturno de la eps general.
    let res=true;//Confirmación de siguiente turno.
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:  "+nomuser+"\n"+"SU TURNO ES: "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incremento de turno.
        }else{
            alert("ERROR EN TURNO...")
            break;
        }
    }
}