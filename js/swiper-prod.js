$(document).ready(function () {
    new Swiper('.product__slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },

        grabCursor: true,
        keyboard: {
            enable: true,
            onlyInVeiwport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensetivity: 1,
        },

        autoHeight: true,

        slidesPerView: 1,
        watchOverflow: true,

        //centeredSlides: true,

        loop: true,
        loopedSlides: 0,

        speed: 600,
    });
    if (window.screen.width > 768) {
        new Swiper('.recomend__slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            slidesPerView: 3,

            loop: true,


        });
    }
    if (window.screen.width <= 768) {
        new Swiper('.recomend__slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,

        });
    }
    $(window).resize(function () {
        if (window.screen.width > 768) {
            new Swiper('.recomend__slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                slidesPerView: 3,

                loop: true,


            });
        }
        if (window.screen.width <= 768) {
            new Swiper('.recomend__slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                slidesPerView: 1,
                centeredSlides: true,
                loop: true,

            });
        }
    });
});