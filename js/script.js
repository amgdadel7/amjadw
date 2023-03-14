var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,

    // mousewheel: {
    //     invert: true,
    // },

    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,

    }

});

var navBar = document.getElementById('navBar');
window.onscroll = function() {
    if (window.scrollY > 22) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
};
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        1026: {
            slidesPerView: 3,
        },
    },
});

var slideAmount = $(".custom-scrollbar-js").height()
$(function() {
    $("#content-1").mCustomScrollbar({
        axis: "y",
        // snap: '.custom-scrollbar-js',
        // snapAmount: '.custom-scrollbar-js',

        snapAmount: slideAmount,
        // contentTouchScroll: 25,
        theme: "rounded-dark"
    });
});

// background-image: url('../images/Screenshot 2023-02-13 043048.png');
// background-size: 300px 100px;
// background-repeat: no-repeat;
// background-position: center;