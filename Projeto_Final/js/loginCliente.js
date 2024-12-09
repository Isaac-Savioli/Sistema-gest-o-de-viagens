document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('button');
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === 'luis' && password === 'B12345') {
        window.location.href = 'inicial.html';
        alert('Login bem-sucedido!');
  
      } else {
        alert('Usuário ou senha incorretos.');
      }
    });
  });