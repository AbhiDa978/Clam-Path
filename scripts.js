window.onload = function() {
    const form = document.querySelector('form');
    form.style.opacity = 0;
    setTimeout(() => {
        form.style.opacity = 1;
    }, 300);
};


function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var passwordStrength = document.getElementById("passwordStrength");
    let strength = 0;

    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[!@#$%^&*()_+=]+/)) strength++;
    if (password.length >= 7) strength++;

    if (strength <= 2) {
        passwordStrength.innerHTML = "Your password is weak";
        passwordStrength.style.color = "red";
        document.getElementById("regbutton").disabled = true;
    } else if (strength <= 3) {
        passwordStrength.innerHTML = "Your password is medium";
        passwordStrength.style.color = "orange";
        document.getElementById("regbutton").disabled = false;
    } else {
        passwordStrength.innerHTML = "Your password is strong";
        passwordStrength.style.color = "green";
        document.getElementById("regbutton").disabled = false;
    }

    if (password.length == 0) {
        passwordStrength.innerHTML = "";
        document.getElementById("regbutton").disabled = true;
    }
}

document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign-up successful!");
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 500);
    }
};
 



