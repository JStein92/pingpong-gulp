var Calculator = require('./../js/pingpong.js').calculatorModule;

$(function() {
  $('#ping-pong-form').submit(function(e){
    e.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(function(){
  $('#signup').submit(function(e){
    e.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list.</p>');
  });
});
