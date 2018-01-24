
$('li').on( 'click', function(e){
  $('li.active').removeClass('active');
  $(this).addClass('active');
});