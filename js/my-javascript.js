

/* **********************************************
     Begin application.js
********************************************** */

$(document).ready(function(){



 
  
  animations.init();

   $('.customer-photo-area').lightGallery({
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
}); 
 

 

});






// Animations - About
// -----------------------------------------------------------
var animations = {

  init: function(){
    // About-Item Gifs
    $('.home-page-how-it-works-step').on('mouseenter', function(e){
      var el = $(this).find('.home-page-how-it-works-step-image');
      var src = el.attr('src');
      el.attr('src', src.replace('.png', '.gif'));
    });

    $('.home-page-how-it-works-step').on('mouseleave', function(e){
      var el = $(this).find('.home-page-how-it-works-step-image');
      var src = el.attr('src');
      el.attr('src', src.replace('.gif', '.png'));
    });

    
  }

}
