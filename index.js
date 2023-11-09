function checking(){
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
var submit = document.getElementById('submit');
