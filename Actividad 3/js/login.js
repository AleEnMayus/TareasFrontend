const title = document.getElementById('title');
const errorMsg = document.getElementById('errorMsg');

title.innerHTML = 'Login Js';

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const MsgError = 
    `<ul>
    <li>Debe contener al menos una letra mayúscula</li>
    <li>Debe contener al menos una letra minúscula</li>
    <li>La contraseña debe tener menos de 8 caracteres</li>
    <li>No puede tener más de dos números consecutivos</li>
    </ul>`;
    
    // letra mayúscula
    const tieneMayuscula = /[A-Z]/.test(password);

    // letra minúscula
    const tieneMinuscula = /[a-z]/.test(password);

    // carácter especial
    const tieneEspecial = /[^A-Za-z0-9]/.test(password);

    function NumerosConsecutivos(cadena) {
    for (let i = 0; i <= cadena.length - 3; i++) {

        const subcadena = cadena.substring(i, i + 3);

        if (/^\d{3}$/.test(subcadena)) {
        const numeros = subcadena.split('').map(Number);

        if (numeros[1] === numeros[0] + 1 && numeros[2] === numeros[1] + 1) {
            return true; // Tiene tres números consecutivos
        }}}

    return false;
    }
    if (NumerosConsecutivos(password)) {
        
    }
    if (!tieneMayuscula) {
        errorMsg.innerHTML = MsgError;
    } else if (password.length > 8) {
        errorMsg.innerHTML = MsgError;
    } else if (!tieneMinuscula) {
        errorMsg.innerHTML = MsgError;
    } else if (!tieneEspecial) {
        errorMsg.innerHTML = MsgError;
    } else if (NumerosConsecutivos(password)) {
        errorMsg.innerHTML = MsgError;
    } else {
        window.location.href = 'Home.html';
    }

}