window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  let header_mobile = document.querySelector(".header-mobile")
  header.classList.toggle("sticky", window.scrollY >= 40);
  header_mobile.classList.toggle("change-bg", window.scrollY > 0);
});
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});
