
// Changing the navigation links color on cursor hover
const CTA_buttons = document.querySelectorAll('#navlink-items a');
CTA_buttons.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "red";
    });

    link.addEventListener('mouseout', () => {
        link.style.color = "black";
    });
});



// changing the color and fontSize of about section on hover
let text = document.getElementById('about-info');
text.addEventListener('mouseover', () => {
    text.style.color = "#298d6aff";
    text.style.fontSize = "20px"; 
    
});
text.addEventListener('mouseout', () => {
    text.style.color = "black";
    text.style.fontSize = ""; // Reset to default
});


// Focus the input boxes when filling an input
let input = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

//focus event
input.forEach(input => {
    input.addEventListener('focus', function(){
        input.style.backgroundColor = 'lightblue';
    });
//blur event
    input.addEventListener('blur', function(){
        input.style.backgroundColor = '';
    });
});

// Form Validation
document.getElementById('MyForm').addEventListener('submit', function(e) {
    let valid = true;

    // Username validation
    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-error');

    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        valid = false;
    }

    else if (username.value.trim().length < 5) {
        usernameError.textContent = "Username must be at least 5 characters.";
        usernameError.style.display = "block";
        valid = false;
    } else {
        usernameError.textContent = "";
        usernameError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        valid = false;
    }
    else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        valid = false;
    }
    
    else {
        emailError.textContent = "";
        emailError.style.display = "none";
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.textContent = "";
        passwordError.style.display = "none";
    }

    if (!valid) {
        e.preventDefault();  // prevents the form submission while there is an error in the user input
    }
   

});



const themeToggle = document.getElementById('dark-mode-toggle');
themeToggle.addEventListener('click', function() {
    if (document.body.style.backgroundColor !== "rgb(34, 34, 34)") {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#0a0a0aff";
        themeToggle.style.backgroundColor = "#444";
        themeToggle.style.color = "#131212ff";
        themeToggle.textContent = "Light Mode";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        themeToggle.style.backgroundColor = "";
        themeToggle.style.color = "black";
        themeToggle.textContent = "Dark Mode";
    }
});

themeToggle.addEventListener('mouseover', function() {
    themeToggle.style.color = "black";
});
themeToggle.addEventListener('mouseout', function() {
    if (document.body.style.backgroundColor !== "rgb(34, 34, 34)") {
        themeToggle.style.color = "black";
    } else {
        themeToggle.style.color = "#fff";
    }
});