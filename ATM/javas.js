function Atmfun(){
 
    
    var fname=document.forms.regform.uname.value;
   
   
    
    var acnum=document.forms.regform.acnum.value;
    
   
    var pin=document.forms.regform.pin.value;
  
   
    var withd=parseFloat(document.getElementById("withd").value);
   
    var dep=parseFloat(document.getElementById("dep").value);
    alert(dep)
   var regname=/^[A-Za-z]/;
   var patterns=/(\d{5})/g 
   var pinreg=/[0-9]/
   var balance=2000;
 
 if(fname==""||!regname.test(fname)){
     document.getElementById("error").innerHTML="Enter valid name";
     return false;
 }
 if(acnum==""||!patterns.test(acnum)){
     document.getElementById("error1").innerHTML="Enter valid account number";
     return false;
 
 }
 if(pin==""||!pinreg.test(pin)){
     document.getElementById("error2").innerHTML="Enter valid pin";
     return false;
 }
 if(document.getElementById('withdraw').checked) {   
     var selectedValue = document.getElementById('withdraw').value;  
     alert("Selected Radio Button is: " + selectedValue);    
 }  
 if(document.getElementById('Deposit').checked) {   
     var selectedValue = document.getElementById('Deposit').value;  
     alert("Selected Radio Button is: " + selectedValue);    
 }
    
 
 
 
 if(!pinreg.test(withd)){
     document.getElementById("error3").innerHTML="Enter valid input";
     return false;
 }
 if(!pinreg.test(dep)){
     document.getElementById("error4").innerHTML="Enter valid input";
     return false;
 }
 if((selectedValue==="withdraw"&& withd<balance)){
     var balance=balance-withd
     document.getElementById("display1").innerHTML="Balance amount is "+balance+".00";
     return false;
 }
 else{
 balance=balance+dep
 document.getElementById("display").innerHTML="Balances   amount is "+balance+".00";
 return false;
 }
 }
 
 
 
 
 
 
 
 
 
 
 
   