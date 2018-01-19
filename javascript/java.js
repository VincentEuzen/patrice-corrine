// $(document).ready(function() {
//   $('.menu').on('click', function() {
//     $('.menu').toggleClass('menu-when-clicked');
//     $('.menu').toggleClass('menu:hover');
//     $('.menu-hidden').toggleClass('hidden-menu-show');
//     $('.menu-menu').toggleClass('menu-menu-hidden');
//     $('.croix').toggleClass('croix-show');
//   });
//  });
$(document).ready(function() {
window.sr = ScrollReveal({ reset: true });

sr.reveal('#pat-co', { 
  origin: 'left', 
  duration: 2500 
});
});

$(document).ready(function() {
  $('.menu').on('click', function() {
    $('.menu-appear').toggleClass('menu-appear-all');
    $('.menu-hidden').toggleClass('hidden-menu-show');
    $('.menu-menu').toggleClass('menu-menu-hidden');
    $('.croix').toggleClass('croix-show');
    $('.pat').toggleClass('pat-hidden');
    $('#explore').toggleClass('explore-hidden');
  });
 });
  

  $(document).ready(function() {

$('.left').hover(function(){
    $('.bouton-1').toggleClass('bouton-1-all');
    $('.left').toggleClass('left-hover');
    $('.trait-1').toggleClass('trait-1-hover');
    $('.pat-co-texte').toggleClass('pat-co-texte-show');
    $('.pat-co-texte-end').toggleClass('pat-co-texte-end-show');
    $('.survolez-pat').toggleClass('survolez-hidden');
  });
 });

$(document).ready(function() {
  $('.middle-1').hover(function(){
    $('.bouton-2').toggleClass('bouton-2-all');
    $('.middle-1').toggleClass('middle-1-hover');
    $('.trait-2').toggleClass('trait-2-hover');
  });
 });

$(document).ready(function() {
  $('.middle-2').hover(function(){
    $('.bouton-3').toggleClass('bouton-3-all');
    $('.middle-2').toggleClass('middle-2-hover');
    $('.trait-3').toggleClass('trait-3-hover');
  });
 });

$(document).ready(function() {
  $('.middle-3').hover(function(){
    $('.bouton-4').toggleClass('bouton-4-all');
    $('.middle-3').toggleClass('middle-3-hover');
    $('.trait-4').toggleClass('trait-4-hover');
  });
 });


 // Effet Smooth scroll

  var scroll = new SmoothScroll('a[href*="#"]');


var header = document.querySelector("menu-scroll");

function scrolled(){
  var windowHeight = document.body.clientHeight,
    currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);

