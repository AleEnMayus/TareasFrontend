  const codeElement = document.getElementById("code");
  const numSpan = document.getElementById("numSpan");
  let codeSave = localStorage.getItem('codeSave');

  let countdown = 10; // segundos
  let interval;
  

  function generateCode() {
    const code = Math.floor(Math.random() * (900000));
    codeElement.textContent = code;
    countdown = 10;
    numSpan.textContent = countdown + "s";
  }

  function startCountdown() {
    interval = setInterval(() => {
      countdown--;
      numSpan.textContent = countdown + "s";
      if (countdown <= 0) {
        generateCode();
      }
    }, 1000);
  }

  document.getElementById('save-code')?.addEventListener('click', () => {
    const currentCode = codeElement.textContent; // Obtener el código actual
    localStorage.setItem('codeSave', currentCode); // Guardarlo en localStorage
    window.location.href = "Nombre.html"; // Redirigir
  });


  generateCode();
  startCountdown();