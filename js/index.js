const btnMobile = document.getElementById('menu-hamburguer');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);





    var swiper = new Swiper(".swiper-parceiros", {
        slidesPerView: 'auto',
        // breakpoints: {
        //     640:{
        //         slidesPerView: 2.5, 
        //     },
        //     940:{
        //         slidesPerView: 3.5, 
        //     },
        //     1024:{
        //         slidesPerView: 5.5, 
        //     }
    
        // },
    
        //  spaceBetween: 30,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });