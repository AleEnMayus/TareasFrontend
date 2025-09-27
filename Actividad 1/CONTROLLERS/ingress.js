
  const inputs = document.querySelectorAll('.code-input');

  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value === '' && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  document.getElementById('Ingress').addEventListener('click', () => {
    const code = Array.from(inputs).map(input => input.value).join('');
    if (code.length < 6) {
      alert('Por favor ingresa los 6 dígitos del código');
      return;
    }

    const savedCode = localStorage.getItem('codeSave');

    if (code == savedCode) {
        window.location.href = "Homepage.html";
    }
    else{
        alert('Código Incorrecto');
        return;
    }
  });
