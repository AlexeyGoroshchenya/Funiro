import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        parallax: true,
        centeredSlides: true,

        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        pagination: {
            el: '.slider__dots',
            clickable: true,
        },

        navigation: {
            nextEl: '.slider__main .slider__arrow-next',
            prevEl: '.slider__main .slider__arrow-prev',
        },
        breakpoints: {
            991.98: {
                slidesPerView: 1.5,
            },
            767.98: {
                slidesPerView: 1.2,
            },
        }

    }
    );

    const swiperRooms = new Swiper('.slider-rooms', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        watchOverflow: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        centeredSlides: false,

        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        pagination: {
            el: '.slider-rooms__dots',
            clickable: true,
        },

        navigation: {
            nextEl: '.slider-rooms__arrow-next',
            prevEl: '.slider-rooms__arrow-prev',
        },
        breakpoints: {
            767.98: {
                slidesPerView: 'auto',
            },
        }

    }
    );

    const swiperTricks = new Swiper('.tricks__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        watchOverflow: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        centeredSlides: false,

        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.tricks__slider .slider__arrow-next',
            prevEl: '.tricks__slider .slider__arrow-prev',
        },

        pagination: {
            el: '.tricks__dots',
            clickable: true,
        },

        breakpoints: {
            767.98: {
                slidesPerView: 3,
            },
        }

    }
    );



}

//если слайдер болеет от того что он флекс элемент или внутри флекса, надо ему поставить min-width: 0;