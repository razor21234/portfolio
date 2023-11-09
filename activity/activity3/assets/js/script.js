
const arraystudentcopy=[];
displaystudentdata(arraystudentcopy);



function displaystudentdata(){
  
    var sTable = "";
   
    for(var j = 0; j < arraystudentcopy.length; j++) {
      
        sTable+= 
      
        `<tr>
            <td>${arraystudentcopy[j].name}</td>
            <td>${arraystudentcopy[j].grades}</td>
            <td>${arraystudentcopy[j].average}</td>
            <td>
            <button id="btn-remove" onclick='removestd(${[j]});'>Remove</button></td>
        </tr>`;
       
     }
    document.querySelector("#table-stripe").innerHTML = sTable;
 

}
function removestd(x) {
    arraystudentcopy.splice(x, 1);
    displaystudentdata();
 }

function SaveData(){
    const objStudent={};
    // const  objstudentlength = Object.keys(objStudent).length;
 
    let newStudent = document.querySelector("#txtItem").value;
    if(newStudent==""){
        alert("Please Type Student Name")
    }else{
        // InputValue();
      
        var getvalues=[];
        const emptyvalues=[];
        const arraystudent=[];
        var input = document.getElementsByName('inputgradearray[]');
       
        sum=0;
        average=0;
        result=0;
      
        for (var i = 0; i < input.length; i++) {
            getvalues = input[i].value;
        
        if((getvalues<70) || (getvalues>100)){
           emptyvalues.push(getvalues);
           
        }
        
        }
       
        if(input.length<5){
            alert("Please Insert Atleast 5 Grading Inputs")
        }
        else if(emptyvalues.length>0){
            alert("You have "+emptyvalues.length+" invalid inputs or empty value, Please input 70 - 100 only")

        }else {
            for (var i = 0; i < input.length; i++) {
                getvalues = input[i].value;
            
                arraystudent.push(getvalues);
                sum =sum+parseFloat(getvalues);
                average=sum/input.length;
                result=average.toFixed(2);
    
             
            }

           

console.log(emptyvalues.length)
            let stdgrades=arraystudent;
        

        objStudent.name=newStudent;
        objStudent.grades=stdgrades;
        objStudent.average=result;

       arraystudentcopy.push(objStudent);
       
      
       console.log(arraystudentcopy);
       displaystudentdata();
      
       newStudent=document.querySelector("#txtItem").focus();
       newStudent=document.querySelector("#txtItem").value="";
       const gradedivs=document.querySelectorAll(".divgrade");
     

       gradedivs.forEach(divs => {
       
         divs.remove();
       });

        }


        
        
       
       
        
       
      
    }
}

function AddGrade(){
  
    let newinput = document.createElement('input');
    newinput.className = "inputgrade";
    newinput.name = "inputgradearray[]";
    newinput.type = "number";
    

    let newbtn = document.createElement('button');
        newbtn.className = "btnRemove";
        newbtn.innerText = "X";
     
        
 
    var div = document.createElement('div');

        // sNewList.id = "liNew";
        div.className ="divgrade";
        // div.innerText = newItem + " ";
        div.append(newinput);
        div.append(newbtn);

        // document.querySelector("ul").append(sNewList);
        document.querySelector("#tblgrade").append(div);

       
       

        execremoveButton();
        

}

// function InputValue(){
//    var getvalues=[];
//     var input = document.getElementsByName('inputgradearray[]');
 
//     for (var i = 0; i < input.length; i++) {
//         getvalues = input[i].value;
      
      
//         arraystudent.push(getvalues);
    

//     }
  
   


// }


function execremoveButton() {
    var aButtonList = document.querySelectorAll('.btnRemove');

    //for ..of
    for (const btn of aButtonList) {

        btn.addEventListener('click', function(x) {
        
            btn.parentNode.remove();
           
        });
      
    }

   
      
      
      
    

    }
  
   



