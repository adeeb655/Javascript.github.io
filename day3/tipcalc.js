

// <<-----Gst calculator---->>>
const bill=[20,150,30,64,98]
let x=0;
for (var i=0; i<bill.length ; i++){
if (bill[i]>100){
  x =((bill[i]/100)*20)
  var totalbill = x+bill[i]
  console.log(totalbill)
  
}
  else{
   x =((bill[i]/100)*15)
   var totalbill = x+bill[i]
   console.log(totalbill)
  }
}

