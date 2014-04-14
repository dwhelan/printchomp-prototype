// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(function() {
  
  var browserHeight = $(document).height();
  var headerHeight = $('#header').height();
  resizeBackground();
  
  
  $(window).on("resize", function(){
    resizeBackground();
  });
  
  
  function resizeBackground() {
    $('#sidebar').css('height', browserHeight + headerHeight);

    if($('#content-secondary').length)
      $('#content-secondary').css('height', browserHeight + headerHeight); 
      
    if($('#content-tertiary').length)
      $('#content-tertiary').css('height', browserHeight + headerHeight);  
  }
  
  
  $('.tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
  
  //var quoteDetails = $('.quote-details').html();
  
  //$('#reject .modal-body').append(quoteDetails);
  //$('#reject .working-on-it').hide();
  
  //$('#send-response .modal-body').append(quoteDetails);
  //$('#send-response .working-on-it').hide();
  
  
  $('.btn-toggle').on("click", function() {
    
    var yes = $('.btn-toggle.yes');
    var no = $('.btn-toggle.no');
    
    if(no.hasClass('hide')) {
      no.removeClass('hide')
      yes.addClass('hide');
    } else {
      no.addClass('hide');
      yes.removeClass('hide');
    }
    
  });
  
  
  $('#save-response').on('click', function() {
    
    localStorage.price = $('#price').val();
    localStorage.shipping = $('#shipping').val();
    localStorage.tax = $('#tax').val();
    
    $('modal-price').append($('#price').html());
    
  });
  
  
  $('.response').on('keyup', function() {
    
    var price = $('#price').val();
    var shipping = $('#shipping').val();
    var tax = $('#tax').val();
    
    var totalPrice = (parseFloat(price)*100 + parseFloat(shipping)*100 + parseFloat(tax)*100)/100;

    //$('.cost').html("$" + totalPrice + "/CAD");  
    
  });
  
});