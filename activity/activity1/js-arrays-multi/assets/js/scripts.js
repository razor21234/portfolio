
var aItems = [
    /* 0 => */  [
        /* 0 => */'Can Goods', 
        /* 1 => */360
    ],

    ['Rice ', 1300],
    ['Junkfoods ', 124],
    ['Liqour ', 275],
    ['Pork ', 330],   
];

displayItems(aItems);




function displayItems(arrItems) {
    var sList = "";

    for(var i = 0; i < arrItems.length; i++) {
        // sList += "<li><span>" + i + " : " + arrItems[i] + "</span><button onclick='removeItem("+ i +");'>X</button></li>";
        sList += `<li>
        
        <span>${arrItems[i][0]}</span><span>${arrItems[i][1]}</span>
            <button id="editbtn_row" onclick='edit_row(${[i]})'>Edit</button>
            <button onclick='removeItem(${i});'>X</button>
        </li>`; 
    }

    document.querySelector("#ul-lists").innerHTML = sList;
  
}



function edit_row(edit)
{
    document.getElementById("txtindex").value=edit;
    document.getElementById("txtItem").value=aItems[edit][0];
    document.getElementById("txtPrice").value=aItems[edit][1];
    
}

 function UpdateData(){
    var index=  document.getElementById("txtindex").value;
    var txtPrice=  document.getElementById("txtPrice").value;
    var txtItem=  document.getElementById("txtItem").value;

if((index!="" && txtItem!="")&&(index!="" && txtPrice!="")){
var selectedindex=document.getElementById("txtindex").value;
      aItems[selectedindex][0] =  document.getElementById("txtItem").value;
      aItems[selectedindex][1] =  document.getElementById("txtPrice").value;
      console.log(aItems);
      alert("Data Updated")
      displayItems(aItems); 
}
else if(txtItem=="" && index!=""){
    alert("input Item field is required")

}
else if(txtPrice=="" && index!=""){
    alert("input Price field is required")

}
else{
    alert("Please Select Data First")
}

 }

//Remove Any Item
function removeItem(x) {
    aItems.splice(x, 1);
    displayItems(aItems);
}


//Add Bottom
document.querySelector("#btnAdd").addEventListener('click', function() {
    var sNewItem = document.querySelector("#txtItem").value;
    var sNewPrice = document.querySelector("#txtPrice").value;
    aItems.push([sNewItem, sNewPrice]);
   

    document.querySelector("#txtItem").value = "";
    document.querySelector("#txtPrice").value = "";
    document.querySelector("#txtItem").focus();

    displayItems(aItems);
});

//Remove Bottom
document.querySelector("#btnDel").addEventListener('click', function() {
    aItems.pop();
    displayItems(aItems);
});


//add on top
document.querySelector("#btnAddTop").addEventListener('click', function() {
    var sNewItem = document.querySelector("#txtItem").value;
    var sNewPrice = document.querySelector("#txtPrice").value;
    aItems.unshift([sNewItem, sNewPrice]);

    document.querySelector("#txtItem").value = "";
    document.querySelector("#txtPrice").value = "";
    document.querySelector("#txtItem").focus();

    displayItems(aItems);
});

//Remove Top
document.querySelector("#btnDelTop").addEventListener('click', function() {
    aItems.shift();
    displayItems(aItems);
});
