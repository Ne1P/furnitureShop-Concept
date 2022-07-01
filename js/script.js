"use strict"
// $('.wrapper').addClass('loaded');

// $('.icon_menu').click(function (event) {
//     $(this).toggleClass('active');
//     $('.menu_body').toggleClass('active');
//     $('body').toggleClass('lock');
// });
function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();
$('.burger-btn').click(function (event) {
    $(this).toggleClass('_active');
    $('.r-board').toggleClass('_active');
    $('body').toggleClass('lock');

    if (window.screen.width <= 425) {
        $('.menu__nav').toggleClass('_active');
    }
});

$('.likes__image').click(function (event) {
    $(this).toggleClass('_active');
    if ($('.likes__image').hasClass('_active')) {
        $(this).html('<img class="" src="./img/icons/HeartA.svg" alt="">')
        $('.likes__counter').html(Number($('.likes__counter').text()) + 1);
    } else {
        $(this).html('<img class="" src="./img/icons/Heart.svg" alt="">')
        $('.likes__counter').html(Number($('.likes__counter').text()) - 1);
    }
});


window.addEventListener("load", windowLoad);
function windowLoad() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCounterAnimate(digitsCounter);
            });
        }
    }

    function digitsCounterAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) {
                startTimestamp = timestamp;
            }
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    digitsCountersInit();


    // let options = {
    //     threshold: 0.3 // procent from main object (section) = 30% of section show - animation start
    // }

    // let observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const targetElement = entry.target;
    //             const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
    //             console.log('I`am here');
    //             console.log(digitsCountersItems);
    //             if (digitsCountersItems.length) {
    //                 digitsCountersInit(digitsCountersItems);
    //             }
    //             // off listener after work
    //             observer.unobserve(targetElement);
    //         }
    //     });
    // }, options);

    // let sections = document.querySelectorAll('.page__section');
    // if (sections.length) {
    //     sections.forEach(sections => {
    //         observer.observe(sections);
    //     });
    // }
}