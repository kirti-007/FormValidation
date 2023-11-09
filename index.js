function checking(){
    var isValid = usernamecheck();
    var isValid1 = passwordcheck();

    return isValid && isValid1;
}

function usernamecheck(){
    // for username validation
    var username = document.getElementById('username').value;
    var msg = document.getElementById('msg');
    var correctness = /^[A-Za-z@#]+$/;
    if(username == ""){
        msg.innerHTML = "** Please fill this field";
        return false;
    }
    if(username.length < 3){
        msg.innerHTML = "At least 3 characters";
        return false;
    } else if(username.length > 20){
        msg.innerHTML = "Maximum 20 characters";
        return false;
    } else if(!username.match(correctness)){
        msg.innerHTML = "Alphabets with @ and # are only allowed";
        return false;   
    } 
    else {
        msg.innerHTML = "Success";
        return true;
    }

}

function passwordcheck(){
    // for password validation
    var password = document.getElementById('password').value;
    var conpassword = document.getElementById('conpassword').value;
    var passMsg = document.getElementById('passMsg');
    var conpassMsg = document.getElementById('conpassMsg');

    if(password == ""){
        passMsg.innerHTML = "Please enter a password";
        return false;
    } 
    if(password.length < 8){
        passMsg.innerHTML = "Password length must be between 8 and 12 characters";
        return false;
    }
    if(password.length > 12){
        passMsg.innerHTML = "Password length must be between 8 and 12 characters";
        return false;
    }
    if(password != conpassword){
        conpassMsg.innerHTML = "Passwords must be same"
        return false;
    }
}

var submit = document.getElementById('submit');
