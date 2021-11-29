var selectedRow = null;
function onformsubmit(){

}


//retrive data from form
function readFormData (){
    var formdata = {};
    formdata["productcode"]= document.getElementById("productcode").value;
    formdata["product"]= document.getElementById("product").value;
    formdata["qty"]= document.getElementById("qty").value;
    formdata["perprice"]= document.getElementById("perprice").value;
    return formdata;
}

//insert the data
function insertNewRecord(){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productcode;

    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.product;

    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = data.qty;

    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = data.perprice;

    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = `<button>Edit</button> <button>Delete</button>`;
}