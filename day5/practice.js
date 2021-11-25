// let shades = {
//     red : "#000000",
//     green : "#000000",
//     purple : "#000000",
// }

// let clone = []
// for(let arr in shades){
//     clone[arr]=shades[arr]
// }
// console.log(clone)





// let major = {
//     age : function(age){
//         if(age>=18){
//             console.log("He is Adult")
//         }else{
//             console.log("He is under age")
//         }
//     }
// }
// console.log(major.age(17))


let marks = {
    subject : function (subject) {
        if(subject<= 33){
            console.log("Fail")
        }else{
            console.log("Pass")
        }
    }
}
console.log(marks.subject(50));