$(document).ready(function(){
    $('.list-image').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 1000,
        
        arrows: true,
            // prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
            // nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,

        dots: true,


        responsive:[
            {
                breakpoint: 1023,
                settings:{
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    });
  });   