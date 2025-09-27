function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');

  // Validaciones
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneEspecial = /[^A-Za-z0-9]/.test(password);

  function NumerosConsecutivos(cadena) {
    for (let i = 0; i <= cadena.length - 3; i++) {
      const subcadena = cadena.substring(i, i + 3);
      if (/^\d{3}$/.test(subcadena)) {
        const numeros = subcadena.split('').map(Number);
        if (numeros[1] === numeros[0] + 1 && numeros[2] === numeros[1] + 1) {
          return true;
        }
      }
    }
    return false;
  }

  errorMsg.style.display = 'none';
  successMsg.style.display = 'none';

  if (!tieneMayuscula) {
    errorMsg.innerHTML = 'Debe contener al menos una letra mayúscula';
    errorMsg.style.display = 'block';
  } else if (password.length < 8) {
    errorMsg.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
    errorMsg.style.display = 'block';
  } else if (!tieneMinuscula) {
    errorMsg.innerHTML = 'Debe contener al menos una letra minúscula';
    errorMsg.style.display = 'block';
  } else if (!tieneEspecial) {
    errorMsg.innerHTML = 'Debe contener al menos un caracter especial';
    errorMsg.style.display = 'block';
  } else if (NumerosConsecutivos(password)) {
    errorMsg.innerHTML = 'No puede tener más de dos números consecutivos';
    errorMsg.style.display = 'block';
  } else {
    successMsg.innerHTML = `Bienvenido, ${username}!`;
    successMsg.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'Registrocomida.html';
    }, 2000);
  }
}
