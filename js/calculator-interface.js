var Calculator = require('./../js/calculator.js').calculatorModule;

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

  $('#addition').submit(function(e){
    e.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("whatever");
    var output = simpleCalculator.addition(num1,num2);
    $('#solution').text(output);
  });

  $('#subtraction').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($('#subNum1').val());
    var num2 = parseInt($('#subNum2').val());
    var simpleCalculator = new Calculator("this");
    var output = simpleCalculator.subtraction(num1, num2);
    $('#solution').text(output);
  });

  $('#division').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($('#divNum1').val());
    var num2 = parseInt($('#divNum2').val());
    var simpleCalculator = new Calculator("bleh");
    var output = simpleCalculator.division(num1, num2);
    $('#solution').text(output);
  });

  $('#multiplication').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($('#multiNum1').val());
    var num2 = parseInt($('#multiNum2').val());
    var simpleCalculator = new Calculator("this");
    var output = simpleCalculator.multiplication(num1, num2);
    $('#solution').text(output);
  });

});
