
var list1=[]
function myfun(){
  //;
 
        var fname=document.forms.regform.uname.value;
        var email=document.forms.regform.email.value;
        var phno=document.forms.regform.phno.value;
        var what=document.forms.regform.Subject.options;
    
        var regname=/\d+$/g 
        var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
        var regph=/^\d{10}$/
    
        if(fname==""||regname.test(fname)){
            msg=document.getElementById("error").innerHTML="PLS ENTER VALUE ";
            alert("kindly enter the value!...do not empty")
           // name.focus()
            return false;
        }
        if(email==""||!regemail.test(email)){
            alert("kindly enter the value!....@symbol should be used")
           // email.focus()
            return false;
        }
        if(phno==""||!regph.test(phno)){
            alert("kindly enter corect ph number!")
            //phno.focus()
            return false;
        }
        var list2=[]
        if (what.selectedIndex ===-2) {
                alert("Please enter your course.");
                //what.focus();
                return false;
        }

    
        
    else{
          for(var i=0; i<what.length;i++){
            if(what[i].selected)
              list2.push(what[i].value)
          
          }     
     
        }
        
        
        console.log(list2)

     
        var obj1={
          name:fname,
          email:email,
          phno:phno,
          what:what
        }
       list1.push(obj1)
       console.log(list1)
    
         

        return true;


        
        
      }


  



        

        
    
    
    