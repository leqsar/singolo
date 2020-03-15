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
        if (textMenu == 'SERVICES') {servicesContainer.scrollIntoView({behavior: "smooth"});}
        if (textMenu == 'PORTFOLIO') {portfolioContainer.scrollIntoView({behavior: "smooth"});}
        if (textMenu == 'HOME') {sliderContainer.scrollIntoView({behavior: "smooth"});}
        if (textMenu == 'ABOUT') {aboutContainer.scrollIntoView({behavior: "smooth"});}
        if (textMenu == 'CONTACT') {requestContainer.scrollIntoView({behavior: "smooth"});}
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

    const portfolioMenu = document.querySelector('.navigation-content');
    const menuElements = portfolioMenu.querySelectorAll('LI');
    let idArr = [];
    images.forEach((elem) => {
        idArr.push(elem.id);
    });
    portfolioMenu.addEventListener('click', () => {
        menuElements.forEach((item, i) => {
            item.classList.remove('--active');
            item.style.color = 'inherit';
        });
        event.target.classList.add('--active');
        event.target.style.color = 'white';
        idArr=idArr.splice(-1).concat(idArr);
        images.forEach((elem, i) => {
            elem.style.order = `${idArr[i]}`;
        });
    });
    ////////////////////////////////////

    const rightArrow = document.querySelector('.arrow-right');
    const slide = document.querySelector('.slide');
    const sliderWrap = document.querySelector('.slider-wrap');
    const vertical = document.querySelector('.vertical');
    const horizontal = document.querySelector('.horizontal');
    const leftArrow = document.querySelector('.arrow-left');
    let checker = null;
    let secondSlideAnimation,firstSlideAnimation;
    function animation() {
        let start = Date.now();
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          if (timePassed >= 1023) {
            clearInterval(timer);
            return;
          }
          firstSlideAnimation(timePassed);
          secondSlideAnimation(timePassed);
        }, 2);
    }
    rightArrow.addEventListener('click', () => {
        let slide0, slide1;
        if ((sliderContainer.style.left == '') || (sliderContainer.classList.contains('active'))) {
            if (checker == 'left') {
                slide0 = document.querySelector('.slide0');
                firstSlideAnimation = timePassed => {
                    if (document.querySelector('.slide1') !== null) {
                        document.querySelector('.slide1').style.left = 1020 - timePassed + 'px';
                    }
                }
                secondSlideAnimation = timePassed => {
                  slide0.style.left = timePassed + 'px';
                }
            } else {
                if (document.querySelector('.slide0') !== null) {
                    sliderWrap.removeChild(document.querySelector('.slide0'));
                }
                slide0 = document.createElement("DIV");
                sliderContainer.classList.remove('active');
                sliderWrap.insertBefore(slide0, sliderWrap.firstChild);
                slide0.classList.add('slide0');
                firstSlideAnimation = timePassed => {
                    if (document.querySelector('.slide1') !== null) {
                        document.querySelector('.slide1').style.left = timePassed + 'px';
                    } else {
                        sliderContainer.style.left = timePassed + 'px';
                    }
                }
                secondSlideAnimation = timePassed => {
                  slide0.style.left = -1020 + timePassed + 'px';
                }
                if (slide0.nextElementSibling.classList.contains('for-slide0-pink')) {
                    slide0.classList.add('for-slide0-blue');
                } else {
                    slide0.classList.add('for-slide0-pink');
                    slide0.appendChild(vertical);
                    slide0.appendChild(horizontal);
                }
            }
            animation();
        } else {
            if (document.querySelector('.slide0') == null) {
                slide0 = document.createElement("DIV");
                sliderWrap.insertBefore(slide0, sliderWrap.firstChild);
                slide0.classList.add('slide0');
                if (slide0.nextElementSibling.classList.contains('for-slide0-pink')) {
                    slide0.classList.add('for-slide0-blue');
                } else {
                    slide0.classList.add('for-slide0-pink');
                    slide0.appendChild(vertical);
                    slide0.appendChild(horizontal);
                }
            } else {
                slide0 = document.querySelector('.slide0');
            }
            if (checker == 'left') {
                slide1 = document.querySelector('.slide1');
                firstSlideAnimation = timePassed => {
                  slide1.style.left = timePassed + 'px';
                }
                secondSlideAnimation = timePassed => {
                  slide0.style.left = -1020 + timePassed + 'px';
                }
            } else {
                if (document.querySelector('.slide1') !== null) {
                    sliderWrap.removeChild(document.querySelector('.slide1'));
                }
                slide1 = document.createElement("DIV");
                sliderContainer.classList.add('active');
                sliderWrap.insertBefore(slide1, sliderWrap.firstChild);
                slide1.classList.add('slide1');
                if (slide1.nextElementSibling.classList.contains('for-slide0-pink')) {
                    slide1.classList.add('for-slide0-blue');
                } else {
                    slide1.classList.add('for-slide0-pink');
                    slide1.appendChild(vertical);
                    slide1.appendChild(horizontal);
                }
                firstSlideAnimation = timePassed => {
                  slide0.style.left = timePassed + 'px';
                }
                secondSlideAnimation = timePassed => {
                  slide1.style.left = -1020 + timePassed + 'px';
                }
            }
            animation();
        }
        checker = 'right';
    });

    leftArrow.addEventListener('click', () => {
        let slide1, slide0;
        if ((sliderContainer.style.left == '') || (sliderContainer.classList.contains('active'))) {
            if (checker == 'right') {
                slide1 = document.querySelector('.slide1');
                slide0 = document.querySelector('.slide0');
                firstSlideAnimation = timePassed => {
                    slide0.style.left = 1020 - timePassed + 'px';
                }
                secondSlideAnimation = timePassed => {
                  slide1.style.left = -timePassed + 'px';
                }
            } else {
                if (document.querySelector('.slide1') !== null) {
                    sliderWrap.removeChild(document.querySelector('.slide1'));
                }
                slide1 = document.createElement("DIV");
                sliderContainer.classList.remove('active');
                slide1.classList.add('slide1');
                slide1.style.left = '1020px';
                sliderWrap.insertBefore(slide1, sliderWrap.firstChild);
                if (slide1.nextElementSibling.classList.contains('for-slide0-pink')) {
                    slide1.classList.add('for-slide0-blue');
                } else {
                    slide1.classList.add('for-slide0-pink');
                    slide1.appendChild(vertical);
                    slide1.appendChild(horizontal);
                }

                firstSlideAnimation = timePassed => {
                    if (document.querySelector('.slide0') !== null) {
                        document.querySelector('.slide0').style.left = -timePassed + 'px';
                    } else {
                        sliderContainer.style.left = -timePassed + 'px';
                    }
                }
                secondSlideAnimation = timePassed => {
                  slide1.style.left = 1020 - timePassed + 'px';
                }
            }
            animation();
        } else {
            if (checker == 'right') {
                slide0 = document.querySelector('.slide0');
                if (document.querySelector('.slide1') !== null) {
                    sliderWrap.removeChild(document.querySelector('.slide1'));
                }
                slide1 = document.createElement("DIV");
                sliderContainer.classList.remove('active');
                sliderWrap.insertBefore(slide1, sliderWrap.firstChild);
                slide1.classList.add('slide1');
                slide1.style.left = '1020px';
                slide1.classList.add('for-slide0-pink');
                slide1.appendChild(vertical);
                slide1.appendChild(horizontal);
                firstSlideAnimation = timePassed => {
                  slide0.style.left = -timePassed + 'px';
                }
                secondSlideAnimation = timePassed => {
                  slide1.style.left = 1020 - timePassed + 'px';
                }
            } else {
                let n = 0;
                if (document.querySelector('.slide0') !== null) {
                    sliderWrap.removeChild(document.querySelector('.slide0'));
                }
                slide1 = document.querySelector('.slide1');
                slide0 = document.createElement("DIV");
                sliderContainer.classList.add('active');
                sliderWrap.insertBefore(slide0, sliderWrap.firstChild);
                slide0.classList.add('slide0');
                slide0.style.left = '1020px';
                if (slide1.classList.contains('for-slide0-pink')) {
                    slide0.classList.add('for-slide0-blue');
                } else {
                    slide0.classList.add('for-slide0-pink');
                    slide0.appendChild(vertical);
                    slide0.appendChild(horizontal);
                }
                firstSlideAnimation = timePassed => {
                  slide1.style.left = -timePassed + 'px';
                }
                secondSlideAnimation = timePassed => {
                  slide0.style.left = 1020 - timePassed + 'px';
                }
            }
            animation();
        }
        checker = 'left';
    });
}
