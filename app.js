const productDisplay = document.getElementById('productDisplay');
const companyDisplay = document.getElementById('companyDisplay');
const connectDisplay = document.getElementById('connectDisplay');

//Mobile display
const productMenuMobile = document.getElementById('productMenuMobile');
const companyMenuMobile = document.getElementById('companyMenuMobile');
const connectMenuMobile = document.getElementById('connectMenuMobile');

const productDisplayMobile = document.getElementById('productDisplayMobile');
const companyDisplayMobile = document.getElementById('companyDisplayMobile');
const connectDisplayMobile = document.getElementById('connectDisplayMobile');



const productMenu = document.getElementById('productMenu');
const companyMenu = document.getElementById('companyMenu');
const connectMenu = document.getElementById('connectMenu');

const menuBtn = document.getElementById('menuBtn');
const menuDisplay = document.getElementById('menuDisplay');
let menuOpen = false;


menuBtn.addEventListener('click', function () {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuDisplay.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuDisplay.classList.remove('active');
        menuOpen = false;
    }
});


productDisplay.addEventListener('mouseover' , function () {
    productMenu.classList.toggle('active');
    companyMenu.classList.remove('active');
    connectMenu.classList.remove('active');
});

companyDisplay.addEventListener('mouseover' , function () {
    companyMenu.classList.toggle('active');
    productMenu.classList.remove('active');
    connectMenu.classList.remove('active');
});

connectDisplay.addEventListener('mouseover' , function () {
    connectMenu.classList.toggle('active');
    companyMenu.classList.remove('active');
    productMenu.classList.remove('active');
});

//Mobile 

productDisplayMobile.addEventListener('click' , function () {
    productMenuMobile.classList.toggle('active');
    companyMenuMobile.classList.remove('active');
    connectMenuMobile.classList.remove('active');
});

companyDisplayMobile.addEventListener('click' , function () {
    productMenuMobile.classList.remove('active');
    companyMenuMobile.classList.toggle('active');
    connectMenuMobile.classList.remove('active');
});

connectDisplayMobile.addEventListener('click' , function () {
    productMenuMobile.classList.remove('active');
    companyMenuMobile.classList.remove('active');
    connectMenuMobile.classList.toggle('active');
});
