const mainnav = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 2){
        mainnav.classList.add('sticky');
    } else{
        mainnav.classList.remove('sticky');
    }
})


// Customer Reviews Slider 

$('.comentslick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
            }
        }
    ]
})

