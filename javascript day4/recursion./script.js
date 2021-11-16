var list = [{name : "Adeeb", age : 23},
     { name : "Ravi", age : 31}, 
     { name : "Sahil", age : 24}, 
     {name : "Arnav", age : 14},
     {name : "Nikunj", age : 18},
     {name : "Gopala", age : 21}];


var finallist = {};
for(var i = 0; i < list.length; i++) {
    if(finallist[list[i].age]) {
        finallist[list[i].age].push(list[i].name);
    } else {
        finallist[list[i].age] = [list[i].name];
    }
}
console.log ((finallist));