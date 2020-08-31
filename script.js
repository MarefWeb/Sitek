$(document).ready(function(){ 
    
    // открытие пунктов сайдбара
    $('.btn-block .hide').hide();
    $('.btn-block button').on('click', function() {
      $(this).parent().toggleClass('mb');
      $(this).parent().find('.hide').slideToggle(300);  
    });


});
