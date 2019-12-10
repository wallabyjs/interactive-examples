Symbol.prototype.toString = function() {
  return ('SYMBOL');
}

var symbol1 = Symbol('foo');

console.log(symbol1.toString());
// expected output: "SYMBOL"