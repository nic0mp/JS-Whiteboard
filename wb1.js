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