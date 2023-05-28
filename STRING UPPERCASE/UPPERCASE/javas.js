var store=[]
function myfun(){

    var inputt=document.getElementById("number").value ;
    if(/[a-zA-z]/.test(inputt)){
        var result=inputt.toUpperCase();
        document.getElementById("success").innerHTML="successfully activate";
        document.getElementById("hello").innerHTML=result;
    }
    else{
        document.getElementById("error").innerHTML="error occured";
    }

    var para={
        result1:result
    }
   store.push(para)




    }