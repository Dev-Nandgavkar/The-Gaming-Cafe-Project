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
});


// Question Section 

document.getElementById('accordionContainer').addEventListener('click',()=>{
    let target = event.target;

    // Check if clicked element is an accodion header
    if(target.classList.contains("accodion-header")){
        let section = target.nextElementSibling;

        // Toggle Active class to Trigger transition 
        section.classList.toggle('active');
        target.classList.toggle('active'); // For the icon change

        // Hide Other Section 
        let allsection = document.querySelectorAll('.accodion-section-content');

        allsection.forEach(function(otherSection){
            if(otherSection !== section && otherSection.classList.contains('active')){
                otherSection.classList.remove("active");
                otherSection.previousElementSibling.classList.remove("active"); //Remove Icon from active state
            }
        });
    }
});

