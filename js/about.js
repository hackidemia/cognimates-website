// document.ready
document.addEventListener("DOMContentLoaded", function(event) {
    const players = Plyr.setup('.js--plyr-video');

    // Expose player so it can be used from the console
    window.player = players;

    // shared slideshow
    var intervalDelay = 5000;


    // banner images
    var bannerImages = document.querySelectorAll('.slideshow__img');
    var bannerIndexVisible = 0;

    window.setInterval(bannerCrossfade, intervalDelay);
    bannerImages[0].classList.add('slideshow__img--visible');

    function bannerCrossfade() {
        var imageVisible = bannerImages[bannerIndexVisible];
        var indexNextVisible = (bannerIndexVisible + 1) % bannerImages.length;
        var imageNextVisible = bannerImages[indexNextVisible];
        imageVisible.classList.toggle('slideshow__img--visible');
        imageNextVisible.classList.toggle('slideshow__img--visible');
        bannerIndexVisible = indexNextVisible;
    }
    ///////

     // quotes slideshow
    var quotes = document.querySelectorAll('.about__quote-wrapper');
    var quoteIndexVisible = 0;

    window.setInterval(quoteCrossfade, intervalDelay);
    quotes[0].classList.add('quote--visible');

    function quoteCrossfade() {
        var imageVisible = quotes[quoteIndexVisible];
        var indexNextVisible = (quoteIndexVisible + 1) % quotes.length;
        var imageNextVisible = quotes[indexNextVisible];
        imageVisible.classList.toggle('quote--visible');
        imageNextVisible.classList.toggle('quote--visible');
        quoteIndexVisible = indexNextVisible;
    }
});
