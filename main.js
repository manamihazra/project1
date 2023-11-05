var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    centeredSlides:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var menu = document.querySelector(".fa-bars");
  var cross = document.querySelector(".fa-xmark");
  var nav = document.querySelector(".dropdown-menu");


  menu.addEventListener("click",function(){
    nav.style.top = "10%"; 
  })
  cross.addEventListener("click",function(){
    nav.style.top = "-100%";
  })
  var landscape = document.querySelector(".landscape-menu");
  var store = document.querySelector("#store");
   store.addEventListener("mousemove",function(){
    landscape.style.top = "7%";
   })
   landscape.addEventListener("click",function(){
    landscape.style.top = "-100%";
   })
