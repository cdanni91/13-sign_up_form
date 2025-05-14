function checkPasswords() {
    const userPassword = document.querySelector("#password");
    const userConfirmPassword = document.querySelector("#confirm-password");

    let isMatch = false;
    userPassword.value === userConfirmPassword.value ? isMatch = true : isMatch = false;
    

    if (userPassword.value !== "" && userConfirmPassword.value != "") {
        if (!isMatch) {
            userPassword.style.outline = "2px solid red";
            userConfirmPassword.style.outline = "2px solid red";
        } else {
            userPassword.style.outline = "2px solid green";
            userConfirmPassword.style.outline = "2px solid green";
        }
    } else {
        userPassword.style.outline = "";
        userConfirmPassword.style.outline = "";
    }

} 


// Añadir evento blur a ambos inputs
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

passwordInput.addEventListener("blur", checkPasswords);
confirmPasswordInput.addEventListener("blur", checkPasswords);