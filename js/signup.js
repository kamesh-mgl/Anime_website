// --- General Navbar Scroll Effect (from previous step) ---
document.addEventListener('DOMContentLoaded', () => {
    // const navbar = document.querySelector('.navbar');

    // if (navbar) { // Ensure navbar exists before adding listener
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 50) {
    //             navbar.classList.add('scrolled-nav');
    //         } else {
    //             navbar.classList.remove('scrolled-nav');
    //         }
    //     });
    // }

    // --- Sign Up Page Specific JavaScript (NEW) ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) { // Only run if signupForm exists on the page
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const togglePasswordBtn = document.getElementById('togglePassword');
        const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPassword');

        // --- Password Toggle Functionality ---
        const setupPasswordToggle = (inputElement, toggleButton) => {
            if (toggleButton) {
                toggleButton.addEventListener('click', () => {
                    const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
                    inputElement.setAttribute('type', type);
                    // Toggle the eye icon
                    toggleButton.querySelector('i').classList.toggle('fa-eye');
                    toggleButton.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }
        };

        setupPasswordToggle(passwordInput, togglePasswordBtn);
        setupPasswordToggle(confirmPasswordInput, toggleConfirmPasswordBtn);

        // --- Form Validation Functionality ---
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Clear previous feedback
            emailInput.classList.remove('is-invalid');
            usernameInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.remove('is-invalid');
            document.getElementById('usernameFeedback').textContent = '';
            document.getElementById('passwordFeedback').textContent = '';
            document.getElementById('confirmPasswordFeedback').textContent = '';


            // Validate Email
            if (emailInput.value.trim() === '') {
                emailInput.classList.add('is-invalid');
                emailInput.nextElementSibling.textContent = 'Email cannot be empty.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // Simple email regex
                emailInput.classList.add('is-invalid');
                emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Username
            if (usernameInput.value.trim() === '') {
                usernameInput.classList.add('is-invalid');
                document.getElementById('usernameFeedback').textContent = 'Username cannot be empty.';
                isValid = false;
            } else if (usernameInput.value.trim().length < 3) {
                usernameInput.classList.add('is-invalid');
                document.getElementById('usernameFeedback').textContent = 'Username must be at least 3 characters long.';
                isValid = false;
            }

            // Validate Password
            if (passwordInput.value.trim() === '') {
                passwordInput.classList.add('is-invalid');
                document.getElementById('passwordFeedback').textContent = 'Password cannot be empty.';
                isValid = false;
            } else if (passwordInput.value.trim().length < 6) {
                passwordInput.classList.add('is-invalid');
                document.getElementById('passwordFeedback').textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            }

            // Validate Confirm Password
            if (confirmPasswordInput.value.trim() === '') {
                confirmPasswordInput.classList.add('is-invalid');
                document.getElementById('confirmPasswordFeedback').textContent = 'Please confirm your password.';
                isValid = false;
            } else if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.classList.add('is-invalid');
                document.getElementById('confirmPasswordFeedback').textContent = 'Passwords do not match.';
                isValid = false;
            }

            if (isValid) {
                // If all validations pass, you would typically send data to a server
                // For now, let's just show an alert
                alert('Sign Up Successful!');
                signupForm.reset(); // Clear the form
                // Redirect or perform other actions
                window.location.href = '../index.html';
            }
        });
    }
});