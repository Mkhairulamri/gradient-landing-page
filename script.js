const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//Display Mobile Menu

const mobileMenu = () =>{
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener("click", mobileMenu );

const highlighMenu= ()=>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home')
    const aboutMenu = document.querySelector('#about')
    const serviceMenu = document.querySelector('#service')
    let scrollPos = windows.scrollY

    if(windows.innnerWidth >960 && scrollPos<600){

    }
}