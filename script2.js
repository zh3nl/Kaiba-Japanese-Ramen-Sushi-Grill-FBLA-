let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let cartIcon = document.querySelector('#cart-icon'); 
let cart = document.querySelector('.cart'); 
let closeCart = document.querySelector('#close-cart'); 
const cardNumber = document.querySelector('.checkout-info #ccn');
const cvvNumber = document.querySelector('.checkout-info #cvv'); 
const emailInput = document.querySelector('.checkout-info #email');
const phoneNumber = document.querySelector('.checkout-info #tel-num');
const expirationDate = document.querySelector('.checkout-info #expiration-date');
const errorMessage = document.querySelector(".error-message"); 

//Nav Bar Functions
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
 
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
 
//Cart Open and Close
cartIcon.onclick = () =>{
  cart.classList.add("active"); 
};

closeCart.onclick = () => {
  cart.classList.remove("active"); 
};

// Cart Function
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready); 
} else {
  ready(); 
}

function ready() {
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons); 
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i]; 
    button.addEventListener('click', removeCartItem); 
  }
  //Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity'); 
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]; 
    input.addEventListener("change", quantityChanged); 
  }
  // Add to cart
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i]; 
    button.addEventListener("click", addCartClicked); 
  }
  // Buy Button Function Call
  document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked); 
}

// Buy Button Function
function buyButtonClicked() {
  if(cardNumber.classList.contains("invalid") || cvvNumber.classList.contains("invalid") || emailInput.classList.contains("invalid") || phoneNumber.classList.contains("invalid") || expirationDate.classList.contains("invalid")) {
    errorMessage.classList.add("active");
    return;
  }

  errorMessage.classList.remove("active"); 

  alert('Your Order is Now Placed. Thank You For Choosing Kaiba!');
  var cartContent = document.getElementsByClassName('cart-content')[0]; 
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild); 
  }
  updateTotal(); 
}

// Removes Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target; 
  buttonClicked.parentElement.remove(); 
  updateTotal(); 
}

//Quantity Changes
function quantityChanged(event) {
  var input = event.target; 
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; 
  }
  updateTotal(); 
}

// Add Items to Cart 
function addCartClicked(event) {
  var button = event.target; 
  var shopProducts = button.parentElement; 
  var title = shopProducts.getElementsByClassName('name')[0].innerText; 
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('appetizers')[0].src;  
  addProductToCart(title, price, productImg); 
  updateTotal(); 
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName('cart-content')[0]; 
  var cartItemsNames = cartItems.getElementsByClassName('name'); 
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already added this item to cart."); 
      return; 
    }
  }


var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
</div>
<i class="fas fa-store-slash cart-remove"></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox); 
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem); 
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged); 
}
// Updates Total
function updateTotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = document.getElementsByClassName('cart-box'); 
  var total = 0; 
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]; 
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]; 
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]; 
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity); 
  }
    //If price contain cents
    total = Math.round(total * 100) / 100; 
    document.getElementsByClassName("total-price")[0].innerText = "$" + total; 

}

// Input validation 

cardNumber.addEventListener("input", (e) => {
  let cardValue = e.target.value; 
  if(isNaN(cardValue)) {
    cardNumber.classList.add("invalid"); 
  } else {
    cardNumber.classList.remove("invalid"); 
  }
})

cvvNumber.addEventListener("input", (e) => {
  let cvvValue = e.target.value; 
  if(isNaN(cvvValue)) { 
    cvvNumber.classList.add("invalid");
  } else {
    cvvNumber.classList.remove("invalid"); 
  }
})

emailInput.addEventListener("input", (e) => {
  let emailValue = e.target.value; 
  if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid"); 
  }
})

let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

phoneNumber.addEventListener("input", (e) => {
  let phoneValue = e.target.value;
  if (!phoneValue.match(regex) || isNaN(phoneValue)) {
    phoneNumber.classList.add("invalid"); 
  } else {
    phoneNumber.classList.remove("invalid"); 
  }
})

expirationDate.addEventListener("input", (e) => {
  let dateValue = e.target.value; 
  if(dateValue.indexOf("/") != 2 && isNaN(dateValue)) {
    expirationDate.classList.add("invalid");
  } else {
    expirationDate.classList.remove("invalid"); 
  }
})

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