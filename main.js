/*TRANSPARENT TO FULL NAVBAR*/

const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.innerWidth > 992 && window.pageYOffset > 15) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
};

/*MOBILE BURGER & SLIDING NAV*/

const mobileMenu = document.querySelector('.mobilemenuicon');
const mobileMenuSlide = document.querySelector('.nav');
let mobileMenuOpen = false;
mobileMenu.addEventListener('click', function () {
    if (!mobileMenuOpen) {
        mobileMenu.classList.add('open');
        mobileMenuSlide.style.transform = "translateX(100%)";
        mobileMenuOpen = true;
    } else {
        mobileMenu.classList.remove('open');
        mobileMenuSlide.style.transform = "translateX(200%)";
        mobileMenuOpen = false;
    }
});

/*PARALLAX HEADER*/
const parallaxPageHeroNews = document.querySelector('.pageheronews');

const parallaxPageHero = document.querySelector('.pagehero');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallaxPageHero.style.backgroundPositionY = offset * 0.7 + 'px';
})

/*PARALLAX BACKGROUND COURSES*/

const parallaxCoursesContainerDesktop = document.querySelector('.courses-container');

const parallaxCoursesContainerHeader = document.getElementById('courses-container-top-header');

const parallaxCoursesContainerWrappers = document.querySelectorAll('.courses-container-wrapper');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallaxCoursesContainerDesktop.style.backgroundPositionY = offset * 0.7 + 'px';
})


/*COURSE CARD INDEX*/

let courseCardIndex = document.querySelectorAll('.courses-card-index');

courseCardIndex.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const caption = item.querySelector('.courses-card-index-caption');
        caption.classList.remove('opacity');
        item.classList.add('box-shadow');
    })
    item.addEventListener('mouseout', () => {
        const caption = item.querySelector('.courses-card-index-caption');
        caption.classList.add('opacity');
        item.classList.remove('box-shadow');
    })
})

// PRELOADER

const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
const newsMain = document.querySelector('.main-news');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
    body.classList.remove('overflow-hidden');
    newsMain.classList.remove('display-none');
})