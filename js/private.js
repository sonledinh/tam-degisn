// $(document).ready(function() {
//     if ($('.back-top').length) {
//         var scrollTrigger = 300,
//             backToTop = function () {
//                 var scrollTop = $(window).scrollTop();
//                 if (scrollTop > scrollTrigger) {
//                     $('.back-top').addClass('show');

//                 } else {
//                     $('.back-top').removeClass('show');
//                 }
//             };
//         backToTop();
//         $(window).on('scroll', function () {
//             backToTop();
//         });

//         $('.back-top').on('click', function (e) {
//             e.preventDefault();
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 700);
//         });
//     }
// })

$(document).ready(function() {
	$('.heart a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
})

$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-favorite').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2, 
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});  

$('.slide-tab').slick({
    autoplay: false,
    arrow: false,
    infinite: false,
    dots: false,
    slidesToShow: 1.5,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});  

$('.slide-feed').slick({
    autoplay: false,
    arrow: false,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});  

$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 3, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});  

$('.slide-other').slick({
    autoplay: false,
    arrow: false,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});  

$('.slider-for').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ],
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
});
