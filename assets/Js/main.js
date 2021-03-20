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
let menu = document.querySelector('.header-menu')
let slider = document.querySelector('.slider-mobile')
console.log(slider)
menu.addEventListener("click",()=>{
    slider.classList.add("active")
})
let mobile_close = document.querySelector('.slider-mobile-close')
console.log(mobile_close)
mobile_close.addEventListener("click",()=> {
    slider.classList.remove("active")
})
let btn_cart = document.querySelector(".btn-shop-cart"); 
let btn_cart_mb = document.querySelector(".btn-cart-mobile")
let cart = document.querySelector(".cart-slider")
let overlay = document.querySelector(".overlay")
btn_cart.addEventListener("click",(event)=> {
    event.preventDefault()
    cart.classList.add("active")
    overlay.style.display = "block"

})
btn_cart_mb.addEventListener("click",(event)=>{
    event.preventDefault()
    cart.classList.add("active")
    overlay.style.display = "block"
})
let close_cart = document.querySelector(".close-cart") 

close_cart.addEventListener("click",(event)=> {
    event.preventDefault()
    cart.classList.remove("active")
    overlay.style.display = "none"

})

let mb_menu_2 = document.querySelector(".menu-mobile-2")
let mb_menu_ic = document.querySelector(".header-mobile-menu")
let close_mb_menu_2 = document.querySelector(".close-menu-mobile-2 button")
mb_menu_ic.addEventListener("click",(event)=>{
    event.preventDefault()
    mb_menu_2.classList.add("active")
    overlay.style.display = "block"
})

close_mb_menu_2.addEventListener("click",(event)=> {
    event.preventDefault()
    mb_menu_2.classList.remove("active")
    overlay.style.display = "none"

})
overlay.addEventListener("click",(event)=> {
    event.preventDefault()
    cart.classList.remove("active")
    mb_menu_2.classList.remove("active")
    overlay.style.display = "none"
})