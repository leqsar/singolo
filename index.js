window.onload = () => {
    const menu = document.querySelector('.header-menu');
     sliderContainer = document.querySelector('.slider-container'),
     servicesContainer = document.querySelector('.services-container'),
     portfolioContainer = document.querySelector('.portfolio-container'),
     aboutContainer = document.querySelector('.about-container'),
     requestContainer = document.querySelector('.request-container');
    const listLi = menu.querySelectorAll('LI');
    let elem;

    //рассмотреть этот пункт, сделать через якоря
    menu.addEventListener('click', (event) => {
        elem = event.target;
        recolor(elem);
        let textMenu = event.target.textContent;
        if (textMenu == 'SERVICES') {servicesContainer.scrollIntoView();}
        if (textMenu == 'PORTFOLIO') {portfolioContainer.scrollIntoView();}
        if (textMenu == 'HOME') {sliderContainer.scrollIntoView();}
        if (textMenu == 'ABOUT') {aboutContainer.scrollIntoView();}
        if (textMenu == 'CONTACT') {requestContainer.scrollIntoView();}
    });
    document.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;
        if (scrollTop >= 0) {
            element = document.querySelector('.home');
            recolor(element);
        }
        if (scrollTop >= 600) {
            element = document.querySelector('.services');
            recolor(element);
        }
        if (scrollTop >= 1100) {
            element = document.querySelector('.portfolio');
            recolor(element);
        }
        if (scrollTop >= 2000) {
            element = document.querySelector('.about');
            recolor(element);
        }
        if (scrollTop >= 2500) {
            element = document.querySelector('.contact');
            recolor(element);
        }
    });

    function recolor(element) {
        listLi.forEach((elem) => {
            elem.style.color = 'white';
        });
       element.style.color = "#f06c64";
    }
    ///////////////////////////////////

    //подумать как сделать одной функцией
    const iphoneImageVer = document.querySelector('.vertical-iphone-image');
    const iphoneImageHor = document.querySelector('.horizontal-iphone-image');
    iphoneImageVer.addEventListener('click', () => {
        if (iphoneImageVer.classList.contains("iphone-off")) {
            iphoneImageVer.classList.remove('iphone-off');
        } else {
            iphoneImageVer.classList.add('iphone-off');
        }
    });
    iphoneImageHor.addEventListener('click', () => {
        if (iphoneImageHor.classList.contains("iphone-off")) {
            iphoneImageHor.classList.remove('iphone-off');
        } else {
            iphoneImageHor.classList.add('iphone-off');
        }
    });
    /////////////////////////////////////

    const grid = document.querySelector('.grid');
    const images = grid.querySelectorAll('DIV');
    grid.addEventListener('click', (event) => {
        images.forEach((elem) => {
            elem.classList.remove('grid-border');
        })
        event.target.parentNode.classList.add('grid-border');
    });

    /////////////////////////////////////

    
}
