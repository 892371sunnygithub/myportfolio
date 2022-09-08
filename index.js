const mobile_nav=document.querySelector('.burger');
const nav_header=document.querySelector('.header');

mobile_nav.addEventListener('click', ()=>{
    // alert('Button clicked');
    nav_header.classList.toggle('active');
})