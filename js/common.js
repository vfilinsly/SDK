$(function() {
	     $('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:true,
        dots:false,
      	animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		smartSpeed: 450,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '0'
    });
/* HOME SELECT "APARTMENT PAGE" */
$('.preview-link:first').addClass('preview-link_active');
$('.preview-link').on('click', function() {
  $('.preview-link').removeClass('preview-link_active');
  $(this).addClass('preview-link_active');
});
});
