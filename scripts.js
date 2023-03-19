$(document).ready(function(){
    $(".req").hide();
    $(".pass").hide();
    $(".the-form").width("300px");
    
    $('#submit').click(function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const position = document.getElementById("position").value;
        const fulltime = document.getElementById("parttime").checked;
        const parttime = document.getElementById("fulltime").checked;

        if (username == "" || username.length < 6 || username.length > 10) { //Check username for length
            $("#userpass").hide();
            $("#userfail").show();
            $("#username").addClass("error");
            $(".the-form").width("500px");
        }
        else {
            let currChar, charPass = true;
            for(let i = 0; i < username.length; i++){ //Check for valid characters
                currChar = username.charCodeAt(i);
                if(!(currChar > 64 && currChar < 91) /*A-Z*/ && !(currChar > 96 && currChar < 123) /*a-z*/ && !(currChar ==95) /*_*/) {
                    charPass =false;
                    break;
                }
            }
            if(charPass){ //pass
                $("#userfail").hide();
                $("#username").removeClass("error");
                $("#userpass").show();                
            }
            else {
                $("#userpass").hide();
                $("#userfail").show();
                $("#username").addClass("error");
                $(".the-form").width("500px");
            }
        }

        if (email.length < 5) { //impossible to be valid email
            $("#emailpass").hide();
            $("#emailfail").show();
            $("#email").addClass("error");
            if($(".the-form").width() != "500px"){
                $(".the-form").width("500px");
            }
        }
        else {
            let currChar, charPass = true, temp = 0;
            //y_1@y_2.y_3
            for(let i = 0; i < email.length; i++){ //Ensuring y_1 is alphanumerical or _
                currChar = email.charCodeAt(i);
                if(i == 0 && (currChar == 64 || currChar == 46)){
                    charPass = false;
                    break;
                }
                else if (currChar == 64 && i == email.length-1){
                    charPass = false;
                    break;
                }
                else if (currChar == 64){
                    temp = i+1;
                    break;
                }
                else if(!(currChar > 64 && currChar < 91) /*A-Z*/ && !(currChar > 96 && currChar < 123) /*a-z*/ && !(currChar ==95) /*_*/ && !(currChar > 47 && currChar < 58)){
                    charPass = false;
                    break;
                }
            }
            for(let i = temp; i < email.length; i++){ //Ensuring y_2 is alphanumerical or _
                currChar = email.charCodeAt(i);
                if((i == temp && currChar == 46) || currChar == 64){
                    charPass = false;
                    break;
                }
                else if (currChar != 46 && i == email.length-1){
                    charPass = false;
                    break;
                }
                else if (currChar == 46){
                    temp = i+1;
                    break;
                }
                else if (!(currChar > 64 && currChar < 91) /*A-Z*/ && !(currChar > 96 && currChar < 123) /*a-z*/ && !(currChar ==95) /*_*/ && !(currChar > 47 && currChar < 58)){
                    charPass = false;
                    break;
                }
            }
            for (let i = temp; i < email.length; i++){ //Ensuring y_3 is alphanumerical or _
                currChar = email.charCodeAt(i);
                if(currChar == 46 || currChar == 64){
                    charPass = false;
                    break;
                }
                else if(!(currChar > 64 && currChar < 91) /*A-Z*/ && !(currChar > 96 && currChar < 123) /*a-z*/ && !(currChar ==95) /*_*/ && !(currChar > 47 && currChar < 58)){
                    charPass = false
                    break;
                }
            }

            if(charPass){
                $("#emailfail").hide();
                $("#email").removeClass("error");
                $("#emailpass").show();
            }
            else{
                $("#emailpass").hide();
                $("#emailfail").show();
                $("#email").addClass("error");
                if($(".the-form").width() != "500px"){
                    $(".the-form").width("500px");
                }
            }    
        }

        if (!position) {
            $("#positionpass").hide();
            $("#positionfail").show();
            $("#position").addClass("error");
            if($(".the-form").width() != "500px"){
                $(".the-form").width("500px");
            }
        }
        else {
            $("#positionfail").hide();
            $("#position").removeClass("error");
            $("#positionpass").show();
        }

        if (!fulltime && !parttime) {
            $("#fulltimepass").hide();
            $("#fulltimefail").show();
            if($(".the-form").width() != "500px"){
                $(".the-form").width("500px");
            }
        }
        else {
            $("#fulltimefail").hide();
            $("#fulltimepass").show();
        }

        if($("#userpass").is(":visible") && $("#emailpass").is(":visible") && $("#positionpass").is(":visible") && $("#fulltimepass").is(":visible") && $(".the-form").width() != "300px"){
            $(".the-form").width("300px");
        }

        $("#test").html(fulltime.value);
    })
    
});