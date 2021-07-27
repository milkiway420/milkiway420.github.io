
    const navReveal = () => {
        let burger = document.querySelector('.burger');
        let nav = document.querySelector('.nav-links');
        let navLinks = document.querySelectorAll('.nav-links li');
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-reveal');

            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }else{
                    link.style.animation = `navLinksReveal 0.5s ease forwards ${index /5 +0.5}s`;
                }
            });
        });
    };
    navReveal();



