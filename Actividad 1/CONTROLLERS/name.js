  const username = localStorage.getItem('username');
  const balance = localStorage.getItem('balance');

  if (username && username.trim() !== "" && balance && balance.trim() !== "") {
    window.location.href = "Ingreso.html";
  }

  document.getElementById('save-data').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const balance = document.getElementById('balance').value.trim();
  
    if (username?.trim() && balance?.trim()) {
      localStorage.setItem('username', username);
      localStorage.setItem('balance', balance);
      window.location.href = "Ingreso.html";

    }
    else{
      alert('Ingrese su nombre y saldo');
      return;
    }
  });

  

