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

// 