// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // Formulário de contato -> WhatsApp
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = document.getElementById('f-nome').value.trim();
      var email = document.getElementById('f-email').value.trim();
      var area = document.getElementById('f-area').value;
      var msg = document.getElementById('f-msg').value.trim();

      var texto = 'Olá, Dr. Marcelo Alessandro. Meu nome é ' + nome + '.';
      if (area) texto += ' Assunto: ' + area + '.';
      if (msg) texto += ' Mensagem: ' + msg;
      if (email) texto += ' (e-mail para contato: ' + email + ')';

      var url = 'https://wa.me/5561982703757?text=' + encodeURIComponent(texto);
      window.open(url, '_blank');
    });
  }
});
