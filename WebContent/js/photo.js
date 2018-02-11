(function() {
	var video = document.getElementById('video');
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var photo = document.getElementById('photo');
	var vendorURL = window.URL || window.webkitURL;

	navigator.getUserMedia = navigator.getUserMedia
			|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia
			|| navigator.msGetUserMedia;

	navigator.getUserMedia({
		video : true,
		audio : false
	}, function(stream) {
		video.scr = vendorURL.createObjectURL(stream);
		video.play();
	}, function(error) {
		console.error(e);
	});

	document.getElementById('capture').addEventListener('click', function() {
		context.drawImage(video, 0, 0, 400, 300);
		photo.setAttribute('src', canvas.toDataURL('image/png'));
	}, capture)

})();