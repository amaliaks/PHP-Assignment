$(window).ready(function() {
var currentImage = 0;
var allImages = $('.slideshow li img').length;
$('.slideshow ul').width(allImages*imageWidth);
$('.next').click(function () {
	currentImage++;
	if(currentImage>=allImages) currentImage= 0;
	setFramePosition(currentImage);
});
$('.back').click(function() {
	if(currentImage<0) currentImage = allImages-1;
	setFramePosition(currentImage);
});

});

function setFramePosition(pos){
	var px = imageWidth*pos*-1;
$('.slideshow ul').animate({
	left: px
}, 300);

}

var imageWidth = 400