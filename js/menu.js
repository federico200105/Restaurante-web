var btnMenu = document.getElementById('btnMenu');
var menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
  'use strick';
  menu.classList.toggle('mostrar');
});
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},650);
  });
});
