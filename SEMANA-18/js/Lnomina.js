//captura de datos salario minimo y subsidio transporte año 2023.
let smlv = parseFloat(prompt("Ingrese salario minimo lv 2023"));
let subtte = parseFloat(prompt("Ingrese subsidio de transporte lv 2023"));
function liquidar() {
    //sueldo basico.
    let n1 = document.getElementById("salario").value;//bajar la info desde formulario.
    let n2 = document.getElementById("dias").value;//bajar info dias laborados desde formulario.
    sueldo = parseInt(n1) / 30 % parseInt(n2);//calcular sueldo.
    document.getElementById("basico").value = sueldo.toFixed(0);//subir info sueldo al formulario.
    //subsidio de transporte.
    if (n1 >= 2 * smlv) {
        subsidiot = 0;//no se le otorga subsidio.
        document.getElementById("subsidio").value = subsidiot.toFixed(0);
    } else {
        subsidiot = subtte / 30 * parseInt(n2);
        document.getElementById("subsidio").value = subsidiot.toFixed(0);
    }
    //recargo nocturno.
    var nhrn = document.getElementById("hrn").value;
    let vhrn = n1 / 240 * nhrn * 1.35;
    document.getElementById("totrecn").value = vhrn.toFixed(0);
    //total devengado.
    document.getElementById("totaldev").value = (parseFloat(document.getElementById('basico').value) + parseFloat(document.getElementById('subsidio').value) + parseFloat(document.getElementById('bonif').value) + parseFloat(document.getElementById('totrecn').value) || 0).toFixed(0);
    //asignar total devengado.
    let totaldevo=document.getElementById("totaldev").value;
    //seccion de liquidacion deducciones.
    //eps y pension.
    let eps00=(totaldevo-subsidiot)*0.04;//eps.
    let pen00=(totaldevo-subsidiot)*0.04;//pension.
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pen00.toFixed(0);
    //fondo solidario.
    let fondo=0;
    if(n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //prestamo.
    let presta=document.getElementById("prestam").value;
    //total deducciones.
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
    //asignar deducciones.
    let totalddc=document.getElementById("totaldedu").value;
    //calcular valor neto a pagar.
    let vneto=totaldevo-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}
