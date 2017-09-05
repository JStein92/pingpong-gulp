$(function(){
  $('#signup').submit(function(e){
    e.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list.</p>');
  });
});
