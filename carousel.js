var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function () {
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
});

function myFunction() {
    var elemWidth = document.getElementsByClassName("boxnoname").offsetWidth;
    document.getElementById("demo").innerHTML = elemWidth;
}