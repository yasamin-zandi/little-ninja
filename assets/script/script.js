starOpen=document.querySelector(".nav__star")
starClose=document.querySelector(".nav-side__star")
sideNav=document.querySelector(".nav-side");

starOpen.addEventListener('click', function(){
    sideNav.classList.add('display');
})
starClose.addEventListener('click', function(){
    sideNav.classList.remove('display');
})