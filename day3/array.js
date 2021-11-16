console.log("array practice")

// lenght of array 
let arr =[3,4,6,7,8,9,10];
console.log(arr.length);

// reduce the lenght 
console.log(arr.length-1);

// position of array 
var getpos = arr.indexOf(8)
console.log(getpos);

// var getpos = arr.includes(12);
// console.log(getpos);

// includes 
var changeval = arr[2]='ADEEB';
console.log(changeval);

// concat
let arr2 =[22,33,44,55,66];
arr = arr.concat(arr2);
console.log(arr);

// splice
arr.splice(1,3)
console.log(arr);

// slice
arr.slice(3)
console.log(arr)

// filter 
const filter =arr.filter(element => element ===3 || element ===4);
console.log(filter);

// reverse 
arr.reverse();
console.log(arr);


const item = [
    { name: "book",price : 200},
    { name: "keyboard",price : 250},
    { name: "mouse",price : 100},
    { name: "monitor",price : 2000},
    { name: "cpu",price : 9000},
]

const totalprice = item.reduce((total, item) =>{
    console.log("total",total)
    console.log("item", item.price)
}

)