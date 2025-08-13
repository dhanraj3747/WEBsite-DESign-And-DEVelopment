 function validate()
 {
 
     var fn = document.getElementById("fname").value  
    
     if(fn=="")
        {
            document.getElementById("msg1").innerText="First Name should  not be empty"   
            return false
        } 
         var p =/^[A-za-z]+$/ 
        if(fn.match(p))
          {
            true   
          } 

          else {
            document.getElementById("msg1").innerText="First Name should contain only characters"    
            return false
          } 
          
          if(fn.length<3)
          {
          document.getElementById("msg1").innerText = "First Name should contain min 3 characters"
           return  false
         }
          if (fn.length>8)
          {
           document.getElementById("msg1").innerText = "First Name should contain max 8 characters"
           return  false
          }


        
        var ln = document.getElementById("lname").value  
    
         if(ln=="")
        {
            document.getElementById("msg2").innerText="L Name should  not be empty"   
            return false
        } 
         var p =/^[A-za-z]+$/ 
         if(ln.match(p))
          {
            true   
          } 

          else {
            document.getElementById("msg2").innerText="l Name should contain only characters"    
            return false
          } 
          
          if(ln.length<3)
          {
          document.getElementById("msg2").innerText = "L Name should contain min 3 characters"
           return  false
         }

          if(ln.length>8)
          {
           document.getElementById("msg2").innerText = "L  Name should contain max 8 characters"
           return  false
          }

          
        var pn = document.getElementById("pname").value  
    
         if(pn=="")
        {
            document.getElementById("msg3").innerText="pName should  not be empty"   
            return false
        } 
         var p =/[6-9][0-9]{9}/ 
         if(pn.match(p))
          {
            true   
          } 

          else {
            document.getElementById("msg3").innerText="p Name should contain only characters  and also  should start with 6,7,8 or 9"    
            return false
          } 

          if(pn.length>10)
          {
            document.getElementById("msg3").innerText="p Name should contain max 10  characters"    
            return false
          }

         
          
        
        }

      
          
        
        // var pn = document.getElementById("pname").value  
    
        //  if(pn=="")
        // {
        //     document.getElementById("msg3").innerText="Phone Number should  not be empty"   
        //     return false
        // } 

        //  var p =/^[6-9][0-9]{9}+$/ 
        //  if(pn.match(p))
        //   {
        //     true   
        //   } 

        //   else {
        //     document.getElementById("msg3").innerText="Phone Number should contain only numbers"    
        //     return false
        //   } 
          
        //   if(pn.length<10)
        //   {
        //   document.getElementById("msg3").innerText = "Phone Number should contain min 10 characters"
        //    return  false
        //  }

        //   if(pn.length>10)
        //   {
        //    document.getElementById("msg3").innerText = "Phone Number should contain max 10 characters"
        //    return  false
        //   }
          
        //   // If all validations pass, return true
      
      
        


   





















//    var ln = document.getElementById("lname").value

//     if(ln=="")
//    {
//     document.getElementById("msg2").innerText="First Name should  not be empty"
//     return false
//    }
//    var p =/^[A-za-z]+$/
//    if(ln.length<3)
//   {
//    document.getElementById("msg2").innerText = "First Name should contain min 3 characters"
//    return false
//  }
 
//  else if(ln.length>8)
//   {
//    document.getElementById("msg2").innerText = "First Name should contain max 8 characters"
//    return false
//   }

//    if(ln.match(p))
//    {
//     true
//    }
//    else(ln.match(p))
//    {
//    document.getElementById("msg2").innerText="First Name should contain only characters"
//     return false
//    }

