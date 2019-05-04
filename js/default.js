// document.ready
document.addEventListener("DOMContentLoaded", function(event) {
	const players = Plyr.setup('.js--plyr-video');

	// Expose player so it can be used from the console
	window.player = players;
});
