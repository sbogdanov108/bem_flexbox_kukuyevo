'use strict';

window.onload = function() {
  var video = document.querySelector( '#video__item-js' ),
      menu  = document.querySelector( '.main-nav' );

  if( video ) {
    videojs( 'video__item-js', {
      controls     : true,
      autoplay     : false,
      preload      : 'auto',
      bigPlayButton: false,
      controlBar   : {
        remainingTimeDisplay: false,
        volumeMenuButton    : false
      }
    } );
  }

  if( menu ) {
    document.querySelector( '#page-header__toggle-js' ).addEventListener( 'click', function() {
      menu.classList.toggle( 'main-nav--open' );
      menu.classList.toggle( 'main-nav--closed' );
    } );

    document.querySelector( '#main-nav__close-js' ).addEventListener( 'click', function() {
      menu.classList.toggle( 'main-nav--closed' );
    } );
  }
};
