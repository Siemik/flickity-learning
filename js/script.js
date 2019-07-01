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
