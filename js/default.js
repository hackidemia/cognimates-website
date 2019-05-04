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

});
