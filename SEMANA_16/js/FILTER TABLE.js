function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//asigna dato ingresado por teclado.
    filter = input.value.toUpperCase();//convertir texto a mayuscula.
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");//asigna todas las filas a un array.
    for (i = 0; i < tr.length; i++) {//Recorriendo todas las columnas de la tabla.
        td = tr[i].getElementsByTagName("td")[0];//especificamente en la columna 0=nombre pelicula.
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//busca el nombre de pelicula en la tabla.
            tr[i].style.display = "";//muestra pelicula.
            } else {
            tr[i].style.display = "none";//oculta pelicula o lineas de la tabla. 
        }
        }       
    }
    }