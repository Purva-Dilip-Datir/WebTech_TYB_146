document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        isValid = false;
    }

    // Email validation
    else if (email === "") {
        alert("Please enter your email.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Message validation
    else if (message === "") {
        alert("Message field cannot be empty.");
        isValid = false;
    }

    // If valid, show pop-up message
    if (isValid) {
        alert("Thank you for your feedback!");
        document.getElementById("contactForm").reset();
    }
});
