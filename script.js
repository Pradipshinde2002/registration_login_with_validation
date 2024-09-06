function onSubmitHandler() {
    //first name validation
    var newfname = form1.fname1.value;
    var fnamePattern =  /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
    // /^[a-zA-Z]{2,15}+\s[a-zA-Z]{2,15}+\s[a-zA-Z]{2,15}+$/;
   
    

    if (newfname.match(fnamePattern)) {
      spanIdfname.innerHTML = "<span style='color:green'>✔️</span>";
      fname1.style.borderBottom="2px solid green";
    } else {
      spanIdfname.innerHTML = "<span style='color:red'>❌</span>";
      errFullname.innerHTML="<span style='color:red'> Enter correct name</span>"
      fname1.style.borderBottom="2px solid red";
      
      return false;
    }


    //email validation
    var newUserName = form1.txt1.value;
    var pattern = /^[a-z]+[0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

    if (newUserName.match(pattern)) {
      spanId.innerHTML = "<span style='color:green'>✔️</span>";
      txt1.style.borderBottom="2px solid green";

    } 
    else {
      spanId.innerHTML = "<span style='color:red'>❌</span>";
      errEmail.innerHTML="<span style='color:red'> Enter correct email</span>"
      txt1.style.borderBottom="2px solid red";
      return false;
    }

    //password validation
    var newUserPass = form1.txt2.value;
    var pattern1 = /^([A-Z]{1,2})+([a-z0-9$@#&]{1,20})$/;

    

    if (newUserPass.match(pattern1) && (newUserPass.length>6)) {
      spanId1.innerHTML = "<span style='color:green'>✔️</span>";
      txt2.style.borderBottom="2px solid green";
      // txt2.style.border="2px solid green";
    } else {
      spanId1.innerHTML = "<span style='color:red'>❌</span>";
      errPass.innerHTML="<span style='color:red'>Enter correct or Pass should be (6-18) character</span>"
      txt2.style.borderBottom="2px solid red";
      

      //   txt2.style.border="4px solid red";
      return false;
    }

    //confirm password validation
    var cpass1 = form1.txt3.value;

    if (cpass1.match(newUserPass)) {
      spanId2.innerHTML = "<span style='color:green'>✔️</span>";
      txt3.style.borderBottom="2px solid green";
      // txt1.style.border="2px solid green";
    } else {
      spanId2.innerHTML = "<span style='color:red'>❌</span>";
      errCpass.innerHTML="<span style='color:red'> Enter not matching</span>"
      txt3.style.borderBottom="2px solid red";
      //   txt1.style.border="4px solid red";
      return false;

    }

    //age validation
    var age11 = form1.age1.value;

    if (age11>18 && age<60) {
      spanIdage.innerHTML = "<span style='color:green'>✔️</span>";
      age1.style.borderBottom="2px solid green";
     
    } else {
      spanIdage.innerHTML = "<span style='color:red'>❌</span>";
      erragepass.innerHTML="<span style='color:red'> Enter age between 18 to 59</span>"
      age1.style.borderBottom="2px solid red";
    
      return false;

    }

    // phone no validation
    var num = form1.txt4.value;
    var patternNum1 = /^[789]{1,1}[0-9]{9,9}$/;
    if (num.match(patternNum1)) {
      spanId3.innerHTML = "<span style='color:green'>✔️</span>";
      txt4.style.borderBottom="2px solid green";
    } else {
      spanId3.innerHTML = "<span style='color:red'>❌</span>";
      errNum.innerHTML="<span style='color:red'> Enter correct number</span>"
      txt4.style.borderBottom="2px solid red";
      return false;
    }
  }