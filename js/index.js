function validateForm() {

    let email = document.getElementById("email").value;
    let n_pass = document.getElementById("n_pass").value;
    let c_pass = document.getElementById("c_pass").value;

    let reg = /^([a-zA-Z0-9_.+%-]+@[a-zA-Z0-9-.]+\.[a-zA-Z])/g;

    if(email.match(reg) != null){
        if(n_pass == c_pass){
            alert("Successfully Registered")
        }
        else{
            alert("Password is not matched");
        }
    }
    else{
        alert("Enter valid mail ID");
        return;
    }
    
}