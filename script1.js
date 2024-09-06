function onLoginHandler(){
    var newEmail=form2.txt1.value
    var pattern1 = /^[a-z]+[0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
    if (newEmail.match(pattern1)) {
        spanId.innerHTML = "<span style='color:green'>✔️</span>";
        txt1.style.borderBottom="2px solid green";
  
      } 
      else {
        spanId.innerHTML = "<span style='color:red'>❌</span>";
        errEmail1.innerHTML="<span style='color:red'> Enter correct email</span>"
        txt1.style.borderBottom="2px solid red";
        return false;
      }



      var newUser = form2.txt6.value;
    var pattern8 =/^([A-Z]{1,2})+([a-z0-9$@#&]{1,20})$/;

    if (newUser.match(pattern8) && (newUser.length>6)) {
        spanId1.innerHTML = "<span style='color:green'>✔️</span>";
      txt2.style.borderBottom="2px solid green";
    } else {
        spanId1.innerHTML = "<span style='color:red'>❌</span>";
      errPass1.innerHTML="<span style='color:red'>Enter correct or Pass should be (6-18) character</span>"
      txt2.style.borderBottom="2px solid red";
      return false;
    }

}