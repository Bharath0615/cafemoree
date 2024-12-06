const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-Close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked 
menuCloseButton.addEventListener("click",() => menuOpenButton.click());

// initialize swiper
 /* -const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 //responsive 
 breakpoints: {
   0:{
    slidespreView: 1
   },
   768:{
     slidespreView: 2
   },
   1024:{
     slidespreView: 3
   }
  }
});-*/