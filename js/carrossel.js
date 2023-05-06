$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
// Adiciona a classe "hand" ao passar o mouse sobre a imagem do produto
$('.item img').on('mouseover', function() {
  $(this).addClass('hand');
});

// Remove a classe "hand" ao retirar o mouse da imagem do produto
$('.item img').on('mouseout', function() {
  $(this).removeClass('hand');
});

// Adiciona a classe "grab" ao clicar e segurar o mouse na imagem do produto
$('.item img').on('mousedown', function() {
  $(this).addClass('grab');
});

// Remove a classe "grab" ao soltar o mouse na imagem do produto
$('.item img').on('mouseup', function() {
  $(this).removeClass('grab');
});
});

// Carrossel
$(document).ready(function() {
  let footerOffset = 50; // define a distância em pixels entre o fim do carrossel e o início do footer
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onResize: function() {
      // atualiza a posição do footer sempre que o tamanho da tela for alterado
      let carouselHeight = $(".owl-stage-outer").height();
      let footerTop = carouselHeight + footerOffset;
      $("footer").css("top", footerTop + "px");
    },
    onInitialized: function() {
      // atualiza a posição do footer na inicialização do carrossel
      let carouselHeight = $(".owl-stage-outer").height();
      let footerTop = carouselHeight + footerOffset;
      $("footer").css("top", footerTop + "px");
    },
  });
});
