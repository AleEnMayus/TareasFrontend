
  // Verificar si es la primera vez que el usuario abre la página
  const isFirstTime = localStorage.getItem('isFirstTime');
    
  // Mostrar la pantalla de carga
  setTimeout(() => {
    if (!isFirstTime) {
      // Mostrar pantalla de bienvenida
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    } else {
      // Redireccionar directamente si no es la primera vez
      window.location.href = "views/CODE.html";
    }
  }, 3000); // 3 segundos de espera para la pantalla de carga

  // Función para continuar después de la pantalla de bienvenida
  document.getElementById('continue-btn')?.addEventListener('click', () => {
    localStorage.setItem('isFirstTime', 'false'); // Marcar que ya no es la primera vez
    window.location.href = "views/CODE.html";
  });
