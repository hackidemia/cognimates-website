// document.ready
document.addEventListener("DOMContentLoaded", function(event) {

    var intervalDelay = 5000;
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
});
