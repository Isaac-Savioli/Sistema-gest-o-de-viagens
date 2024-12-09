const backToTopButton = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) { // Mostra o botão após rolar 100px
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rolagem suave
  });
});