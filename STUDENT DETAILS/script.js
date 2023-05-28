

function addfun(){
    var table=document.getElementById("myTable");
    var rows_len=document.getElementById("myTable").rows.length;
    var row=table.insertRow(rows_len);
     var cel1=row.insertCell(0);
     var cel2=row.insertCell(1);
     var cel3=row.insertCell(2);
     var cel4=row.insertCell(3)
     var cel5=row.insertCell(4)
     var cel6=row.insertCell(5)
    
    
    
     var Name=document.getElementById("Name").value;
     cel1.innerHTML=Name;
     var age=document.getElementById("age").value;
     cel2.innerHTML=age;
     var clg=document.getElementById("clg").value;
     cel3.innerHTML=clg;
     var degree=document.getElementById("degree").value;
     cel4.innerHTML=degree;
     var address=document.getElementById("address").value;
     cel5.innerHTML=address;


     var name=document.getElementById("Name").contentEditable;
     cel1=document.getElementById("demo").innerHTML ="Successfully Executed"+name;
     var age1=document.getElementById("age").contentEditable;
     cel2=document.getElementById("demo").innerHTML = "Successfully Executed"+age1;
     var clg1=document.getElementById("clg").contentEditable;
     cel3=document.getElementById("demo").innerHTML ="Successfully Executed"+clg1;
    


     
     var delete_but=document.createElement("input");
     delete_but.type="button";
     delete_but.className="btn";
     delete_but.id="delete";
     delete_but.value="Delete";
   


     cel6.appendChild(delete_but);

      delete_but.onclick=function deletefun(){
        return document.getElementById("myTable").deleteRow(rows_len);
    

     }



     
     
}






