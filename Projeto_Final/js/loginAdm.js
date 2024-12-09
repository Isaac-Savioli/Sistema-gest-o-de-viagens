document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('button');
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === 'admboreal1' && password === 'Admboreal0612') {
        window.location.href = 'inicial-adm.html';
        alert('Login bem-sucedido!');
  
      } else {
        alert('Usuário ou senha incorretos.');
      }
    });
  });