const eyeIcon = document.querySelector(".eyeIcon");
const password = document.querySelector(".input");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "asset/eye-open.png";
    }else {
        password.type = "password";
        eyeIcon.src = "asset/eye-close.png";
    }
}