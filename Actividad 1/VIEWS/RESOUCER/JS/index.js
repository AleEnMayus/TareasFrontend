const username = localStorage.getItem('username');
    const balance = localStorage.getItem('balance');

    document.getElementById('welcome').textContent = `¡Hola, ${username}!`;
    document.getElementById('balance').textContent = `Balance: $${balance}`;