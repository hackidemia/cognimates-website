// document.ready
document.addEventListener("DOMContentLoaded", function(event) { 

    // @todo: only on getting started page 
    $('.js--open-help').on('click', function(e){
        const section = $(e.target).closest('.step__body');
        $(section).find('.step__help').toggle();
        event.preventDefault(); // to keep from scrolling
    });

	const players = Plyr.setup('.js--plyr-video');

	// Expose player so it can be used from the console
	window.player = players;

	////////////

    // @todo: only on about page 
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

	////////////
});
