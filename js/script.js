// Initialize with vanilla JavaScript
var elem = document.querySelector('.carousel-main');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
var flkty = new Flickity( '.carousel', {
  hash: true,
});

var buttonGroup = document.querySelector('.button-group');

buttonGroup.addEventListener( 'click', function( event ) {
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});
