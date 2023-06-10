function validainputs(){
    const nombre=document.getElementById("usuario");
    const telefono=document.getElementById("telefono");
    const email=document.getElementById("email");
    const registro=document.getElementById("registro");
    //seccion de asignacion de valores input a var
    const nombreval= nombre.value.trim();
    const telefonoval= telefono.value.trim();
    const emailval=email.value.trim();
// variable errorf para validar errores de ingreso
    var errorf=0;
// Seccion de validacion de nombre
    if (nombreval ==="") {
        ocErrorform(nombre, "Por favor ingrese su nombre");
        errorf=1;
    }
    else{
        exitosform(nombre);
    }
// Seccion de validacion de telefono
    if (telefonoval ==="") {
        ocErrorform(telefono, "Por favor ingrese su número de teléfono");
        errorf=1;
    }
    else if (!valnumero(telefonoval)){
        ocErrorform(telefono,"Numero celular no valido");
        errorf=1;
    }
    else{
        exitosform(telefono);
    }
// Seccion de validacion de Email
    if (emailval ===""){
        ocErrorform(email,"Por favor ingrese su email");
        errorf=1;
    }
    else if (!valEmail(emailval)){
        ocErrorform(email,"Email no valido");
        errorf=1;
    }
    else{
        exitosform(email);
    }
// Seccion de validación de ingreso exitoso sin errores
    if (errorf==0){
        registro.addEventListener('click',function(){
            swal("REGISTRO USUARIO EXITOSO !!", "Click OK para continuar", "success"); 
        })
    }
    return false;
    function ocErrorform (input, message){
       const formControl=input.parentElement;
       const small=formControl.querySelector("small");
       formControl.className="form-control error";
       small.innerText =message; 
    }
    function exitosform (input){
        const formControl=input.parentElement;
            formControl.className="form-control success";
        }
    function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
    function valnumero (telefono){
        return  /^[0-9]+$/.test(telefono);
    }
    function valdocumento (documento){
        return  /^[0-9]+$/.test(documento);
    }
}
