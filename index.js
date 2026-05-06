const formulario = document.getElementById('formlogin');
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