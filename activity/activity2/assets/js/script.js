var aItems = [
    /* 0 => */  [
        /* 0 => */353,'Can Goods', 
        /* 1 => */360
    ],

    [34534,'Rice ', 1300],
    // ['Junkfoods ', 124],
    // ['Liqour ', 275],
    // ['Pork ', 330],   
];

var cartItems=[];
var deletedItems=[];

displaycartItems(cartItems);
displaydeletedItems(deletedItems);
displayItems(aItems);


function displaydeletedItems(){
    var delList="";
    // var totalprice=0;
    // var price="";
   
    for(var f = 0; f < deletedItems.length; f++) {
        delList+= 

        `<tr>
            <td>${deletedItems[f][0]}</td>
            <td>${deletedItems[f][1]}</td>
            <td>${deletedItems[f][2]}</td>
            <td>
            <button onclick='UndoItem(${f});'>Undo</button></td>
        </tr>`;
     
      
     }
    
    

     document.querySelector("#deletedinfo").innerHTML =delList;
   

}

function displaycartItems(){
    var cartList="";
    // var totalprice=0;
    // var price="";
    var sum=0;
    for(var j = 0; j < cartItems.length; j++) {
        cartList+= 

        `<tr>
            <td>${cartItems[j][0]}</td>
            <td>${cartItems[j][1]}</td><td>${cartItems[j][2]}</td>
            <td>
            <button id="btn-remove" onclick='removecartItem(${j});'>Remove</button></td>
        </tr>`;
       sum =sum+parseFloat(cartItems[j][2]);
       
     }
    
    

     document.querySelector("#mycart").innerHTML = cartList;
     document.querySelector("#totalprice").innerHTML ="$ "+sum;
   
}


function displayItems(arrItems) {
    var sList = "";
    var sListcart="";
    var thead="";
    thead=`<th>Product Name</th>
    <th>Product Price</th>
    <th>Action</th>`;
    for(var i = 0; i < arrItems.length; i++) {
        // sList += "<li><span>" + i + " : " + arrItems[i] + "</span><button onclick='removeItem("+ i +");'>X</button></li>";
       
        sListcart += 

        `<tr>
            <td>${arrItems[i][0]}</td>
            <td>${arrItems[i][1]}</td>
            <td>${arrItems[i][2]}</td>
           
            <td><button id="btn-cart" onclick='addtocart(${[i]})'>Add to Cart</button>
           
        </tr>`;
        // 
        sList += 

        `<tr>
            <td>${arrItems[i][0]}</td>
            <td>${arrItems[i][1]}</td>
            <td>${arrItems[i][2]}</td>
            <td><button id="editbtn_row" onclick='edit_row(${[i]})'>Edit</button>
            <button onclick='removeItem(${[i]});'>Delete</button></td>
        </tr>`;
        // 
    }
   
    document.querySelector("#productinformation").innerHTML = sList;
    document.querySelector("#productcart").innerHTML = sListcart;
    // document.querySelector(".thead").innerHTML = thead;

  
}

function addtocart(mycart)
{
    
    cartItems.push([aItems[mycart][0],aItems[mycart][1],aItems[mycart][2]]);
    console.log(cartItems);
    displaycartItems(cartItems);
 
}

function edit_row(edit)
{
    document.getElementById("txtindex").value=edit;
    document.getElementById("txtproductid").value=aItems[edit][0];
    document.getElementById("txtItem").value=aItems[edit][1];
    document.getElementById("txtPrice").value=aItems[edit][2];
    var hadindex=document.getElementById("txtindex").value;
    if(hadindex!=""){
        document.querySelector(".btn-update").style.display="";
        document.querySelector("#btnAdd").style.display="none";
        document.querySelector("#txtproductid").readOnly = true;
        document.querySelector("#txtproductid").style.backgroundColor = "#ccc";
        
    }
}
function removeItem(x) {
   
    deletedItems.push([aItems[x][0],aItems[x][1],aItems[x][2]]);
    aItems.splice(x, 1);
    displayItems(aItems);

   displaydeletedItems(deletedItems);
   
    //  var i=0;
    // var j=0;
   
    // var e="";
    // var intcartids;
    // var intids;
    // //  var intids=""
    //  while(i<=deletedItems.length){
    //     // ids= document.querySelector("#getdeletedids").value;
    //   intcartids=cartItems[i][0];   
    //  intids=deletedItems[i][0];

    // //   e=(intcartids==intids);
   
    //   if(intids>0){
    //    for(j=0;j<=deletedItems.length;j++){
    //     cartItems.splice(cartItems, 1);
        
    //    }
    //    displaycartItems(cartItems);
      
 

    //     }
  
       
    //     i++;
     
    
       
    //  }
    
    
    //  console.log(intids);
    //  alert(intids);
    

}
function removecartItem(q) {
 cartItems.splice(q, 1);

 
    displaycartItems(cartItems);
}
function UndoItem(undo) {
    aItems.push([deletedItems[undo][0],deletedItems[undo][1],deletedItems[undo][2]]);
   deletedItems.splice(undo, 1);

    displayItems(aItems);
    displaydeletedItems(deletedItems);
}






 function UpdateData(){
    var index=  document.getElementById("txtindex").value;
    var txtPrice=  document.getElementById("txtproductid").value;
    var txtPrice=  document.getElementById("txtPrice").value;
    var txtItem=  document.getElementById("txtItem").value;

if((index!="" && txtItem!="")&&(index!="" && txtPrice!="")){
var selectedindex=document.getElementById("txtindex").value;
        aItems[selectedindex][0] =  document.getElementById("txtproductid").value;
      aItems[selectedindex][1] =  document.getElementById("txtItem").value;
      aItems[selectedindex][2] =  document.getElementById("txtPrice").value;
      console.log(aItems);
      alert("Data Updated")
      displayItems(aItems); 
      document.querySelector("#txtindex").value = "";
      document.querySelector("#txtproductid").value = "";
    document.querySelector("#txtItem").value = "";
    document.querySelector("#txtPrice").value = "";
    document.querySelector("#txtproductid").focus();
    document.querySelector(".btn-update").style.display="none";
    document.querySelector("#btnAdd").style.display="";
    document.querySelector("#txtproductid").readOnly = false;
        document.querySelector("#txtproductid").style.backgroundColor = "";
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

 document.querySelector("#btnAdd").addEventListener('click', function() {
    var sproductid = document.querySelector("#txtproductid").value;
    var sNewItem = document.querySelector("#txtItem").value;
    var sNewPrice = document.querySelector("#txtPrice").value;
    aItems.push([sproductid,sNewItem, sNewPrice]);
   
    document.querySelector("#txtproductid").value = "";
    document.querySelector("#txtItem").value = "";
    document.querySelector("#txtPrice").value = "";
    document.querySelector("#txtItem").focus();

    displayItems(aItems);
});

