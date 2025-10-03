document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validate name
        if (nameInput.value.trim() === "" || nameInput.value.length > 50) {
            alert("Name is required and should not exceed 50 characters.");
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password length
        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // Validate password complexity
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        // Validate password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
            return;
        }

        // If all validations pass
        alert("Form submitted successfully!");
        form.submit(); // Submit the form
    });
});