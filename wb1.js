// Adding to the beginning and end of an array
var myArr = ['a','b','c']

myArr.push('end')
myArr.unshift('start')

console.log(myArr)
// output: ['start', 'a', 'b', 'c', 'end']
// ES 6 vv
myArr = ['start',...myArr, 'end']

console.log(myArr)
// ________________________________

//Create private variable in JS
function secretVar() {
    var private = 'SECRET CODE!';
    return function() {
        return private
    }
}
var getPrivateVar = secretVar()
console.log(getPrivateVar())
// output:'SECRET CODE'

// ______________________________

// what is the output?
var num=4;
function outer() {
    var num = 2
    function inner() {
        num++;
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();
// output: 3
// ______________________________

// what is the output?
console.log(typeof typeof 1)
// output string