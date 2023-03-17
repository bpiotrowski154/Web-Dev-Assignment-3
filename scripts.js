function validate() {
    form.preventDefault();
    let validation = true;
    let username = document.forms["theForm"]["username"].value;
    let email = document.forms["theForm"]["email"].value;

    var currChar;
    if(username.length == 0 || username.length < 6 || username.length >10){
        document.getElementById("theForm").style.width = "600px";
        document.getElementById("username").style.borderColor = "red";
        //document.getElementById("username_error").innerHTML = "Username must have 6-10 characters (a-z, A-Z, _)"
        return false;
    }
    else {
        for(let i = 0; i < username.length; i++){
            currChar = username.charCodeAt(i);
            if(!(code > 65 && code < 91) /*A-Z*/ && !(code > 96 && code < 123) /*a-z*/ && !(code ==95) /*_*/) {
                document.getElementById("theForm").style.width = "600px";
                document.getElementById("username").style.borderColor = "red";
                return false; 
            }
        }
        return true;
    }

    //validation = usernameValid(username);

}

function usernameValid(username){
    var currChar;
    if(username.length == 0 || username.length < 6 || username.length >10){
        document.getElementById("theForm").style.width = "500px";
        document.getElementById("username").style.borderColor = "red";
        return false;
    }
    else {
        for(let i = 0; i < username.length; i++){
            currChar = username.charCodeAt(i);
            if(!(code > 65 && code < 91) /*A-Z*/ && !(code > 96 && code < 123) /*a-z*/ && !(code ==95) /*_*/) {
                document.getElementById("theForm").style.width = "500px";
                document.getElementById("username").style.borderColor = "red";
                return false; 
            }
        }
        return true;
    }
}