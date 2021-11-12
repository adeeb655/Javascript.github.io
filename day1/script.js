let a = 20;
var b = 'name'; 
const c = 10;
let d;
let x = 5;
let y = 6;
let z = 7;

console.log(x == y);  //false
console.log(x == z);    //true (boolean)

function add() {
    a = 20;
    var b = 'name';
    const c = 40;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);
console.log(a);
console.log(b);
add();

console.log(typeof 10);
console.log (typeof b);
console.log(typeof d);


var s = {
    a:10,
    b:20,
    c:'hello'  
}                 
console.log(s);
