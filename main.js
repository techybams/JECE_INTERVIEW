function func(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username == 'bamidele'&& password == '123456'){
        alert("Welcome");
        window.location.assign("index2.html");
    }else{
        alert("Wrong Password");
    }
}
