# Kaiba-Japanese-Ramen-Sushi-Grill-FBLA-
Submission for FBLA Web Design 2023 (Not for Commercial Use). 
***
## Project Description
This project was created for the FBLA Website Design Competition. The task was to create a responsive and user-interactive website for a business that contributes to the local community. Our team decided to choose a local Asian American operated restaurant known as Kaiba which operates in the Los Angeles and Inland Empire Region. 

Team Members: 
  - Yan Bao: Frontend Developer and Timekeeper. 
  - Ryan Kim: Digital Resource Manager and Visual Editor. 
  - Zhen Liu: Frontend and Backend Developer. 
#### This website is created through VSCode with HTML, CSS, and Javascript.
***
## Project Functionality
### Home Page
The sliding animation present on the home page is created through the use of Slider.js.
It was first used to present the featured dishes that can be changed by the admin. 
#### Modern Slider Animation
First implementation was within the script.js file (which is attached to the home page html file: 
``` javascript
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
 ```
This code is applied to the corresponding HTML section shown below: 
``` HTML 
<div class="swiper home-slider">
                <div class="swiper-wrapper wrapper">
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Today's Special</span>
                            <h3>Sashimi Combo</h3>
                            <p>Bluefin tuna, salmon, yellowtail, albacore, seaweed salad and premium wasabi.</p>
                            <a href="menupage.html" class="btn">View</a>
                        </div>
                        <div class="image">
                            <img class="specials" src="COMBO SASHIMI LARGE 106.jpg" alt="Sashimi Combo">
                        </div>
                    </div>
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Today's Special</span>
                            <h3>Tonkatsu Ramen</h3>
                            <p>Chashu, egg, shredded sweet black mushroom, fried onion, green onion, black onion and black garlic oil.</p>
                            <a href="menupage.html" class="btn">View</a>
                        </div>
                        <div class="image">
                            <img class="specials" src="TONKOSU-RAMEN-190603.jpg" alt="Sashimi Combo">
                        </div>
                    </div>
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Today's Special</span>
                            <h3>Spicy Miso Ramen</h3>
                            <p>Pork broth, spicy miso, chashu, egg, bean sprout, com, and green onion (available in several spice levels).</p>
                            <a href="menupage.html" class="btn">View</a>
                        </div>
                        <div class="image">
                            <img class="specials" src="SPICY MISO LAGRE.jpg" alt="Sashimi Combo">
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination"></div>
            </div>
```
A similar algorithm was also used to displayed customer reviews with some modifications to adjust to the different viewing fortmat: 
``` javascript
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
  ```
#### Email Subscription Service
Our email subscription service was created using MailChimp which allows website users to send their name and email to be stored in the MailChimp server. Once the user becomes a subscriber by submitting their information, the admins can then receive their information on their MailChimp administration account in the "Audience" section. 
Implementation: 
``` HTML
        <div class="sub-container">
            <div id="mc_embed_signup">
                
                <form action="https://gmail.us13.list-manage.com/subscribe/post?u=5ea3de7ffcfeabdfbfd20b3e3&amp;id=7f14d6cb34&amp;f_id=00beb0e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                    <h2>Become A Subscriber Today!</h2>
            <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required placeholder=" example@example.com">
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
                <label for="mce-FNAME">First Name  <span class="asterisk">*</span>
            </label>
                <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required placeholder=" Ex: John"> 
                <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
            </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5ea3de7ffcfeabdfbfd20b3e3_7f14d6cb34" tabindex="-1" value=""></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                            <p class="brandingLogo"><a href="http://eepurl.com/iluTbz" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
```
***
### Menu Page
Within the menu page, users can add, increase/decrease, and delete items to/from their shopping carts. This serves as the method of purchase/call to action for this website and is created with HTML and Javascript (Note: Payment information is not integrated as of now). 
#### Shopping Cart 
Implementation of HTML to create the visual display:
``` HTML
<div class="cart">
                    <h2 class="cart-title">Your Cart</h2>
                    <div class="cart-content">
            
                    </div>
                    <div class="total">
                        <div class="total-title">Total</div>
                        <div class="total-price">$0</div>
                    </div>
                    <form class="checkout-info" method="POST">
                        <div class="checkout-box">
                        <label class="checkout-desc">Name: </label>
                        <input class="checkout-input" type="text" name="name" placeholder="Name" required>
                        <label class="checkout-desc">Email: </label>
                        <input class="checkout-input" type="email" name="email" placeholder="Email" required>
                        <label class="checkout-desc">Phone Number: </label>
                        <input class="checkout-input" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number" required>
                        <label class="checkout-desc">Address: </label>
                        <input class="checkout-input" type="text" name="address" placeholder="Address" required>
                        <label class="checkout-desc">Card Number: </label>
                        <input class="checkout-input" id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx">
                        <label class="checkout-desc">Expiration Date: </label>
                        <input class="checkout-input" type="type" name="date" placeholder="MM/YY" required>
                        <label class="checkout-desc">CVV: </label>
                        <input class="checkout-input" type="type" name="cvv" placeholder="CVV" required>
                        </div>
                    </form>
                    <button type="button" class="btn-buy">Order Now!</button>
                    <i class="fas fa-times" id="close-cart"></i>
                </div>
```
Opening and Closing the Shopping Cart: 
``` javascript
cartIcon.onclick = () =>{
  cart.classList.add("active"); 
};

closeCart.onclick = () => {
  cart.classList.remove("active"); 
};
```
General Cart Functions: 
``` javascript 
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
```
Buy Button Function
``` javascript 
function buyButtonClicked() {
  alert('Your Order is Now Placed. Thank You For Choosing Kaiba!');
  var cartContent = document.getElementsByClassName('cart-content')[0]; 
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild); 
  }
  updateTotal(); 
}
```
Removing Items From the Cart: 
``` javascript 
function removeCartItem(event) {
  var buttonClicked = event.target; 
  buttonClicked.parentElement.remove(); 
  updateTotal(); 
}
```
Item Quantity Changes: 
``` javascript
function quantityChanged(event) {
  var input = event.target; 
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; 
  }
  updateTotal(); 
}
```
Adding Items to Cart: 
``` javascript 
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
```
Updating Total Items in Cart: 
``` javascript 
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
```
Input Validations
``` javascript
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
```
***
### Fundraiser, Catering, and Contact Forms (Community Page and Contact Page)
This section allows the users to request for fundraising, catering, or general inquiries through the use of a submission form. The submitted information is then transferred to our email through the FormSubmit backend tool. Following this, our admins can then review the submitted information and communicate with the customers through their preferred method of communication listed on the form submission. 

Implementation Example: 
``` HTML 
<form action="https://formsubmit.co/kaiba.newsletter@gmail.com" method="POST">
                        <div class="input-row">
                            <div class="input-group">
                                <label class="contact-desc">Name</label>
                                <input class="contact-input" type="text" name="name" placeholder="Name" required>
                            </div>
                            <div class="input-group">
                                <label class="contact-desc">Email</label>
                                <input class="contact-input" type="email" name="email" placeholder="Email" required>
                            </div>
                        </div>
                        <label class="contact-desc">Message</label>
                        <textarea class="issue-desc" name="desc" rows="10" col="30" placeholder="Describe Your Concerns Here: "></textarea>
                        <button class="contact-submit" type="submit">Submit</button>
                    </form>
```
The implementation for the Fundraiser and Catering forms follow the same implementation of FormSubmit with difference form input contents. 
***
### About Section
The about section features basic information about the restaurant and includes animated business cards which features the development team of this project. The animation was created through CSS. 
Implementation: 
``` css
.card {
    position: relative;
    width: 300px; 
    height: 350px; 
    background: #fff; 
    transform-style: preserve-3d;
    transform: perspective(1000px); 
    box-shadow: 10px 20px 40px rgba(0,0,0,0.25); 
    transition: 1s; 
    margin-right: 35rem; 
}

.card:hover {
    transform: translateX(50%); 
}

.card .imgBox {
    position: relative;
    width: 100%; 
    height: 100%; 
    z-index: 1; 
    transform-origin: left; 
    transform-style: preserve-3d;
    background: #000; 
    transition: 1s; 
    box-shadow: 10px 20px 40px rgba(0,0,0,0.25); 
}

.card:hover .imgBox {
    transform: rotateY(-180deg);
}

.card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    object-fit: cover; 
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.card .imgBox img:nth-child(2) {
    transform: rotateY(180deg);
}
```
***
### General Animations
One special animation that our website features is the refresh loading animation. This was created using Javascript and CSS. 

CSS Implementation: 
``` css
.loader-container.fade-out {
    top: 110%; 
    opacity: 0; 
}
```
Javascript Implementation: 
``` javascript
  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out'); 
  }
  
  function fadeOut() {
    setInterval(loader, 3000); 
  }
  ```
The website also features a rotating circular hub. 
This implementation is credited to @tomisloading on Tik Tok
``` css
#wheel {
    position: relative;
    height: 500px;
    width: 500px;
    overflow: hidden;
    display: grid;
    place-items: center;
    transform: translate(50px, 0);
  }
  
  /* Hub styles */
  #hub {
    width: 200px;
    height: 200px;
    border-radius: 100%;
  
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px); 
  
    color: white;
    font-size: 60px;
    font-weight: bold;
    display: grid;
    place-items: center;
  
    position: relative;
    z-index: 1;
  }
  
  #hub img {
    object-fit: contain;
    width: 150px; 
    height: 150px; 
  }

  /* Spoke styles */
  #spoke-wrapper {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
  
    animation: spin-wheel 14s ease-in-out infinite;
  }
  
  .spoke {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  
    display: grid;
    place-items: center;
  
    animation: spin-spokes 14s ease-in-out infinite,
      scaler 14s ease-in-out infinite;
  }
  
  .spoke img {
    width: 130px; 
    height: 130px; 
  }

  .spoke svg {
    width: 90px;
  }
  
  /* 
  --- TO POSITION STUFF AROUND A CENTER POINT ---
      x = r * cos(angle)
      y = r * sin(angle)
  */
  
  #spoke-1 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
  
    margin-left: 150px;
    margin-top: 0px;
  
    animation-delay: 0s, calc(-2.333333s * 5);
  }
  
  #spoke-2 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
    margin-left: 75px;
    margin-top: 129px;
  
    animation-delay: 0s, calc(-2.333333s * 0);
  }
  
  #spoke-3 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
    margin-left: -75px;
    margin-top: 129px;
  
    animation-delay: 0s, calc(-2.333333s * 1);
  }
  
  #spoke-4 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
    margin-left: -150px;
    margin-top: 0px;
  
    animation-delay: 0s, calc(-2.333333s * 2);
  }
  
  #spoke-5 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
    margin-left: -75px;
    margin-top: -129px;
  
    animation-delay: 0s, calc(-2.333333s * 3);
  }
  
  #spoke-5 img {
    object-fit: contain; 
  }

  #spoke-6 {
    background-image: linear-gradient(-44deg, rgba(244, 230, 230, 0.6) 2%, rgba(255, 255, 255, 0.6));
    

    margin-left: 75px;
    margin-top: -129px;
  
    animation-delay: 0s, calc(-2.333333s * 4);
  }
  
  /* animations */
  @keyframes spin-wheel {
    0% {
      transform: rotate(0);
    }
    5% {
      transform: rotate(0);
    }
  
    16.67% {
      transform: rotate(60deg);
    }
    21.67% {
      transform: rotate(60deg);
    }
  
    33.33% {
      transform: rotate(120deg);
    }
    38.33% {
      transform: rotate(120deg);
    }
  
    50% {
      transform: rotate(180deg);
    }
    55% {
      transform: rotate(180deg);
    }
  
    66.67% {
      transform: rotate(240deg);
    }
    71.67% {
      transform: rotate(240deg);
    }
  
    83.33% {
      transform: rotate(300deg);
    }
    88.33% {
      transform: rotate(300deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin-spokes {
    0% {
      transform: rotate(0);
    }
    5% {
      transform: rotate(0);
    }
  
    16.67% {
      transform: rotate(-60deg);
    }
    21.67% {
      transform: rotate(-60deg);
    }
  
    33.33% {
      transform: rotate(-120deg);
    }
    38.33% {
      transform: rotate(-120deg);
    }
  
    50% {
      transform: rotate(-180deg);
    }
    55% {
      transform: rotate(-180deg);
    }
  
    66.67% {
      transform: rotate(-240deg);
    }
    71.67% {
      transform: rotate(-240deg);
    }
  
    83.33% {
      transform: rotate(-300deg);
    }
    88.33% {
      transform: rotate(-300deg);
    }
  
    100% {
      transform: rotate(-360deg);
    }
  }
  
  @keyframes scaler {
    0% {
      scale: 1.15;
    }
    5% {
      scale: 1.15;
    }
  
    16.67% {
      scale: 0.85;
    }
    21.67% {
      scale: 0.85;
    }
  
    33.33% {
      scale: 0.75;
    }
    38.33% {
      scale: 0.75;
    }
  
    50% {
      scale: 0.675;
    }
    55% {
      scale: 0.675;
    }
  
    66.67% {
      scale: 0.75;
    }
    71.67% {
      scale: 0.75;
    }
  
    83.33% {
      scale: 0.85;
    }
    88.33% {
      scale: 0.85;
    }
  
    100% {
      scale: 1.15;
    }
  }
```
***
## Citations and Documentation
Tools/APIs Used (With link to document provided): 
  - Swiper.js: https://swiperjs.com/swiper-api#swiper-full-html-layout 
  - MailChimp Mailing Service (free account is used): https://mailchimp.com/legal/
  - FormSubmit: https://formsubmit.co/documentation
  - Interaction Observer: https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
  - FontAwesome (for icons): https://fontawesome.com/docs
  - Live Server (VSCode extensions used for debugging): https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1661914858952/Microsoft.VisualStudio.Services.Content.License
  - Profile Picture in the Customer Review section in Home: https://www.kindpng.com/imgv/hxibTwh_default-profile-hd-png-download/
  - All digital media used about Kaiba are owned by Kaiba Inc. with permission granted for use. 
 #### Note: This website is created for educational purposes ONLY and is not implemented for commercial use. 

