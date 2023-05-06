// Seleciona os elementos das abas
const home = document.querySelector('a[href="#home"]');
const homeLink = document.querySelector('a[href="#homeLink"]');
const sobre = document.querySelector('a[href="#sobre"]');
const produtos = document.querySelector('a[href="#Produtos"]');

// Seleciona o conteúdo das abas
const conteudoHome = document.getElementById('home');
const conteudoSobre = document.getElementById('sobre');
const conteudoProdutos = document.getElementById('Produtos');

// Esconde todo o conteúdo, exceto o conteúdo da aba Home
conteudoSobre.style.display = 'none';

// Adiciona um event listener para a aba Sobre
sobre.addEventListener('click', function() {
  // Esconde o conteúdo das outras abas
  conteudoHome.style.display = 'none';
  conteudoProdutos.style.display = 'none';
  // Mostra o conteúdo da aba Sobre
  conteudoSobre.style.display = 'block';
});

// Adiciona um event listener para a aba Home
home.addEventListener('click', function() {
  // Esconde o conteúdo das outras abas
  conteudoSobre.style.display = 'none';
  // Mostra o conteúdo da aba Home
  conteudoProdutos.style.display = 'block';
  conteudoHome.style.display = 'block';
});

homeLink.addEventListener('click', function() {
  // Esconde o conteúdo das outras abas
  conteudoSobre.style.display = 'none';
  conteudoProdutos.style.display = 'none';
  // Mostra o conteúdo da aba Home
  conteudoProdutos.style.display = 'block';
  conteudoHome.style.display = 'block';
});

$(document).ready(function() {
  // adiciona a classe "active" quando a aba for clicada
  $('.nav li').click(function() {
    $('.nav li.active').removeClass('active');
    $(this).addClass('active');
  });
});

function toggleHamburger() {
  var hamburgerButton = document.getElementById('hamburger-button');
  var myNavbar = document.getElementById('myNavbar');
  
  hamburgerButton.classList.toggle('collapsed');
  
  if (hamburgerButton.classList.contains('active')) {
    hamburgerButton.classList.remove('active');
    hamburgerButton.style.backgroundColor = 'transparent';
    hamburgerButton.style.color = '#5F2D5D';
  } else {
    hamburgerButton.classList.add('active');
    hamburgerButton.style.backgroundColor = '#5F2D5D';
    hamburgerButton.style.color = '#fff';
  }
}

