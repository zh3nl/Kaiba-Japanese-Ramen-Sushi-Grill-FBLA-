let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

/*let observer = new IntersectionObserver ((entries, observer) => {
  entries.forEach(entry => {
    if(window.matchMedia("prefers-reduced-motion: reduce").matches) {
      vid.currentTime = 1.2; 
    }
    else {
      if(entry.isIntersecting) {
      vid.play(); 
      document.getElementById("vid").removeAttribute('muted'); 
      document.getElementById("vid").volume = 0.2;  
    }
  }
  })
});

observer.observe(vid); */

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
 
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    document.getElementById("vid").removeAttribute('muted'); 
    vid.play(); 
    document.getElementById("vid").volume = 0.2;
}
 
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
 
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }


  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true, 
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop:true, 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out'); 
  }
  
  function fadeOut() {
    setInterval(loader, 3000); 
  }
  
  window.onload = fadeOut; 