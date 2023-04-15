
let passInputEl = document.getElementById("passInput");
let barEl = document.getElementsByClassName("bar")[0];
let iconEl = document.getElementsByClassName("eyeIcon")[0];



function passStrenCheck() {
    let passwordStr = passInputEl.value;
    if (passwordStr == "") {
        barEl.style.background = "#f25d5d";
        barEl.style.width = "0%";
    }
    console.log(typeof passwordStr);
    console.log(passwordStr.length);

    if (passwordStr.length * 10 <= 80) {

        barEl.style.width = `${passwordStr.length * 10}%`;
    }

    let hasNumber = /\d/.test(passwordStr);
    let hasUpperCase = /[A-Z]/.test(passwordStr);
    let haslowerCase = /[a-z]/.test(passwordStr);
    let hasSpecialCh = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordStr);

    console.log(hasNumber, hasUpperCase, haslowerCase, hasSpecialCh)

    if (hasNumber && hasUpperCase && haslowerCase && hasSpecialCh) {
        barEl.style.background = "#81cd84";

        if(passwordStr.length >= 9){
            barEl.style.width = "90%";
            barEl.style.background = "green";

        }
        if(passwordStr.length >= 10){
            barEl.style.width = "100%";
            barEl.style.background = "green";

        }

    } 

    if (hasNumber && hasUpperCase && !haslowerCase && !hasSpecialCh) {
        barEl.style.background = "orange";

    } else if (hasNumber && !hasUpperCase && haslowerCase && !hasSpecialCh) {
        barEl.style.background = "orange";

    } else if (hasNumber && !hasUpperCase && !haslowerCase && hasSpecialCh) {
        barEl.style.background = "orange";
    }
    else if (!hasNumber && hasUpperCase && haslowerCase && !hasSpecialCh) {
        barEl.style.background = "orange";
    }
    else if (!hasNumber && hasUpperCase && !haslowerCase && hasSpecialCh) {
        barEl.style.background = "orange";
    }
    else if (!hasNumber && !hasUpperCase && haslowerCase && hasSpecialCh) {
        barEl.style.background = "orange";
    }

    if (!hasNumber && hasUpperCase && haslowerCase && hasSpecialCh) {
        barEl.style.background = "#ffeb3b";

    }else   if (hasNumber && !hasUpperCase && haslowerCase && hasSpecialCh) {
        barEl.style.background = "#ffeb3b";

    }else   if (hasNumber && hasUpperCase && !haslowerCase && hasSpecialCh) {
        barEl.style.background = "#ffeb3b";

    }else   if (hasNumber && hasUpperCase && haslowerCase && !hasSpecialCh) {
        barEl.style.background = "#ffeb3b";

    }

}

iconEl.addEventListener("click", () => {
    if (passInputEl.type === "password") {
        passInputEl.type = "text";
    }
    else if (passInputEl.type === "text") {
        passInputEl.type = "password";
    }
})