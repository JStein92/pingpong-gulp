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
