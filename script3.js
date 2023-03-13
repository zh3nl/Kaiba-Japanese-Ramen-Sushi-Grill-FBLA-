let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let cartIcon = document.querySelector('#cart-icon'); 
let cart = document.querySelector('.cart'); 
let closeCart = document.querySelector('#close-cart'); 

//Nav Bar Functions
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
 
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out'); 
  }
  
  function fadeOut() {
    setInterval(loader, 3000); 
  }
  
  window.onload = fadeOut; 