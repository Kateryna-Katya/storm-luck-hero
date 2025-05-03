import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        },
        slidesPerView: 'auto',
        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        on: {
            slideChange: function () {
                const progressBar = document.querySelector('.pag_bar');
                const totalSlides = this.slides.length - this.loopedSlides * 2;
                const step = 100 / (totalSlides - 1);
                const moveX = this.realIndex * step;

                if (progressBar) {
                    progressBar.style.transform = `translateX(${moveX}%)`;
                }
            },
        },
    });
});