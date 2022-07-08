let btnPlus = document.querySelectorAll('.plus');
let btnMinus = document.querySelectorAll('.minus');

for (let i = 0; i < btnPlus.length; i++){
    btnPlus[i].addEventListener('click',increaseQuantity);
}

function increaseQuantity(){
    //document.querySelector('.qty').value = parseInt(document.querySelector('qty').value) + 1;
    let qty = this.previousElementSibling;
    qty.innerText = parseInt(qty.innerText) + 1;
  
}


for (let i = 0; i < btnMinus.length; i++){
    btnMinus[i].addEventListener('click',decreaseQuantity);
}
function decreaseQuantity(){
    let qty = this.nextElementSibling;
    if( qty.innerText> 0 ){qty.innerText = parseInt(qty.innerText)- 1;} 
}  



let modal = document.querySelector('.modal');
let cart = document.querySelector('.nav--icon');

cart.addEventListener('click',showCart);

function showCart(){
    modal.classList.toggle("show");
}

let menuSidebar = document.querySelector('.menuSidebar');
let icon = document.querySelector('.menu--icon');
let exit = document.querySelector('.close');

icon.addEventListener('click',openSidebar);


function openSidebar() {
    menuSidebar.classList.add("OpenSidebar"); 
}

exit.addEventListener('click',closeSidebar);

function closeSidebar (){
    menuSidebar.classList.remove("OpenSidebar");
}

let content = document.querySelector('.modal--main--article');

function loadEvent(){
    let deleted = document.querySelector('.delete');
    deleted.addEventListener('click',deleteCart);
    
}


function deleteCart(){
    document.querySelector('.modal--main--article').innerHTML = 'Your cart is empty' ;
}

let adding = document.querySelector('#adding');

adding.addEventListener('click',addArticle);

function addArticle(){
 
    let qty =document.querySelector('.qty');

    if( parseInt(qty.innerText) > 0 ){
        document.querySelector('.modal--main--article').innerHTML = `<div class="modal--main">
        <div class="modal--main--article--content">
          <div class="article-images">
            <img src="images/image-product-1.jpg" alt="">
          </div>
          <div class="articles--dsecription">
            <p class="name-shoes">Fall Limited Edition Sneakers</p>
            <p class="price--unit">$ 125.00 x ${qty.innerText} <span class="global--price">$375.00</span></p>
          </div>
          <div class="delete">
            <img src="images/icon-delete.svg" alt="">
        
          </div>
        </div>
          <div class="articles--button">
            <button id="btn">checkout</button>
          </div>
        </div> ` ;

        loadEvent();
        cartQuanity();
        globalPrice() ;
    }
   
}

function globalPrice() {
    let global = document.querySelector('.global--price');
let priceUnit = document.querySelector('.price--unit');
let qty =document.querySelector('.qty');

document.querySelector('.global--price') = parseInt(qty.innerText) * parseInt (priceUnit.innerText)
}



const thumbs = document.querySelectorAll('.image--product--container--thumbnail');


thumbs.forEach(thumb => {thumb.addEventListener('click',changeImage)})

function changeImage(){
    let image = '';
    let imagePaths = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];

    for (let i=0; i < imagePaths.length; i++){
        if (imagePaths[i].substring(0,15)==this.id){
            image = imagePaths[i];

        }
    }
    
    let selectedImage = document.querySelector('.image--product--container img');
    selectedImage.src = 'images/' + image;

    thumbs.forEach(thumb => {thumb.children[0].classList.remove('overlay');})
    this.children[0].classList.add('overlay');
}

let count = document.querySelector('.count');

function cartQuanity(){
    document.querySelector('.count').innerText = parseInt(document.querySelector('.qty').innerText);
}

// let next = document.querySelector('.next');
// let previous = document.querySelector('.previous');
// let gsgsg = document.querySelector('.image--product--container');


// let imageContainer = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];

// next.addEventListener('click', nextImage);
// previous.addEventListener('click', previousImage);

// function nextImage() {
//     // for (let i=0; i < imageContainer.length; i++){

//     // }
//     alert('vsvs')
// }