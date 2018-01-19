$(document).ready(function() {
  $('#menu').on('click', function() {
    $(this).toggleClass('menu-when-clicked');
    $('#menu-hidden').toggleClass('hidden-menu-show');
  });

  $(document).ready(function() {
var pictures = [
        "https://img15.hostingpics.net/pics/864310testbgtop3.jpg",
        "https://img15.hostingpics.net/pics/215850testbgtop13.jpg",
        "https://img15.hostingpics.net/pics/227457testbgtop11.jpg",

    ];
    var img = document.getElementById("banner");
    var currentIndex = 0;
    var slideshowTimer;

    (function nextImg(){
        slideshowTimer = Date.now();
        img.src=pictures[currentIndex];
        img.onload=function(){
            currentIndex = (currentIndex + 1) % pictures.length;
            var remainingTime = 4000 - (Date.now() - slideshowTimer);
            if(remainingTime>0){ setTimeout(nextImg, remainingTime); }
            else { nextImg(); }
        };
    })();

    });