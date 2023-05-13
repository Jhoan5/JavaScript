function limpiar(){
    //Borrará todas las notas ingresadas hasta el momento.
    document.getElementById("Nota1").value="";//Borrar contenido input.
    document.getElementById("Nota2").value="";//Borrar contenido input.
    document.getElementById("Nota3").value="";//Borrar contenido input.
    document.getElementById("Definitiva").value="";//Borrar contenido input.
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asignar nota 1 ingresada a n1.
    var n2=document.getElementById("Nota2").value;//Asignar nota 2 ingresada a n1.
    var n3=document.getElementById("Nota3").value;//Asignar nota 3 ingresada a n1.
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}