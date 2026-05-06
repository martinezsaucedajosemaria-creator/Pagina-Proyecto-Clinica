const formulario = document.getElementById('formlogin');
<<<<<<< HEAD
const inputusuario = document.getElementById('usuario');
const inputpass = document.getElementById('pass');

const USUARIOV = "admin";
const passV = "1234";

formulario.addEventListener('submit', function(evento) {

        evento.preventDefault();

    let usuarioingresado = inputusuario.value.trim();
    let passwordingresada = inputpass.value;

    if (usuarioingresado == USUARIOV && passwordingresada == passV){
        window.location.href = "dashboard.html";
    }
});
=======

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(formulario);

    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {

        if (data === "ok") {
            window.location.href = "dashboard.html";
        } 
        else if (data === "pass_error") {
            mostrarError("Contraseña incorrecta");
        } 
        else if (data === "user_error") {
            mostrarError("Usuario no existe");
        }
    });
});
>>>>>>> 7131217 (Cambio de direccion)
