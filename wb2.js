// CLOSURES

let x = 100;
function logx() {
    console.log(x);
}
logx();
// output:100

function makeAdder(x) {  //step1: x=5
    return function(y) {
      return x + y; //step2: return 5+y
    }
  }
  const add5 = makeAdder(5); 
  console.log(add5(10)) //3: calls function that passes 10 for y

//   HOISTING

foo(); //invoke the function before the function has been defined
function foo() {
  console.log('Hello')
}
// output: 'Hello

//JS automatically corrects the function vvv
// function foo() {
//     console.log('Hello')
// }
// foo()

// Hoisting does not work with function expressions:
foo();
var foo = function() {
    console.log('hello')
}
// output will be an error since it's a function expression

// CALLBACK VS PROMISE
// CALLBACK EXAMPLE
function getNumber(cb) {
    setTimeout(() => {
      cb(10);
    }, 100);
  }
  
  getNumber(n => {
    console.log(n);
  });

//   _____________________
function findMax(numbers) {
    let max = Number.NEGATIVE_INFINITY
    let i
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }

    return max
}

findMax([10, 20, 30]) // 30

/*

Write me a function that will take in a string and return another string
    with all the letters in each word reversed (but the words in the original order still).
    e.g. "Hello world" -> "olleH dlrow"

email: adam.meadows@gmail.com
*/