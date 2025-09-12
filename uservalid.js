const passwordVisibility = document.getElementById("password-visibility"); // The toggle button(checkbox)
const password = document.getElementById("password"); // The actual password

passwordVisibility.addEventListener("click", function toggleVisible() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    };
});