'use strict';
// Mustach.js
(function(){
  var templateCarousel = document.getElementById('newCarousel').innerHTML;
  Mustache.parse(templateCarousel);
  var listCells = '';
  for (var i = 0; i < cellsCarousel.length; i++) {
    listCells += Mustache.render(templateCarousel, cellsCarousel[i]);
  }
  var carousel = document.querySelector('.carousel-main');
  carousel.innerHTML += listCells;
})();
//hash selector
var flkty = new Flickity( '.carousel-main', {
  hash: true,
});
// Initialize with vanilla JavaScript
var elem = document.querySelector('.carousel-main');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
// Reset Button
var buttonGroup = document.querySelector('.button-group');
buttonGroup.addEventListener('click', function(){
	flkty.next(true);
  flkty.select( 0 );
})
// Google map
window.initMap = function(){
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 6, center: cellsCarousel[0].coords});
	for (var i = 0; i < cellsCarousel.length; i++) {
			var markers = [];
			markers[i] = new google.maps.Marker({position: cellsCarousel[i].coords, map: map});

	};
};
