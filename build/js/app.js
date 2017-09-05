(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for(var i = 1; i<=goal; i++){
    if(i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

// Addition
Calculator.prototype.addition = function(num1, num2) {
  return num1 + num2;
};

// Subtraction
Calculator.prototype.subtraction = function(num1, num2) {
  return num1 - num2;
};

// Division
Calculator.prototype.division = function(num1, num2) {
  return num1 / num2;
};

// Multiplication
Calculator.prototype.multiplication = function(num1, num2) {
  return num1 * num2;
};


exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

$(function(){
  $('#signup').submit(function(e){
    e.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list.</p>');
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
