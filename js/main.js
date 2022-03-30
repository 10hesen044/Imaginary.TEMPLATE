// ========== Grid Massonry
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    isFitWidth: true,
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed:500,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
