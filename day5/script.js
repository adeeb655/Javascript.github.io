// Task 1 
let major = {
    age: function (age) {
        if (age >= 18) {
            console.log('He is adult now')
        }
        else {
            console.log('He is under age')
        }
    }
}
console.log(major.age(17));

// Task 2 
let shades = {
    red: "#000000",
    green: "#f00f00",
    blue: "#000001",
}

let clone = []                 //empty array
for( let arr in shades){ 
    clone[arr] = shades[arr]
}
console.log(clone);













