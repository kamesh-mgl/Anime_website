document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        const loginEmailInput = document.getElementById('loginEmail');
        const loginPasswordInput = document.getElementById('loginPassword');
        const toggleLoginPasswordBtn = document.getElementById('toggleLoginPassword');

        // --- Password Toggle Functionality for Login ---
        const setupLoginPasswordToggle = (inputElement, toggleButton) => {
            if (toggleButton) {
                toggleButton.addEventListener('click', () => {
                    const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
                    inputElement.setAttribute('type', type);
                    toggleButton.querySelector('i').classList.toggle('fa-eye');
                    toggleButton.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }
        };

        setupLoginPasswordToggle(loginPasswordInput, toggleLoginPasswordBtn);

        // --- Form Validation Functionality for Login ---
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Clear previous feedback
            loginEmailInput.classList.remove('is-invalid');
            loginPasswordInput.classList.remove('is-invalid');
            document.getElementById('loginEmailFeedback').textContent = '';
            document.getElementById('loginPasswordFeedback').textContent = '';

            // Validate Email/Username
            if (loginEmailInput.value.trim() === '') {
                loginEmailInput.classList.add('is-invalid');
                document.getElementById('loginEmailFeedback').textContent = 'Email or Username cannot be empty.';
                isValid = false;
            }

            // Validate Password
            if (loginPasswordInput.value.trim() === '') {
                loginPasswordInput.classList.add('is-invalid');
                document.getElementById('loginPasswordFeedback').textContent = 'Password cannot be empty.';
                isValid = false;
            }

            if (isValid) {
                // In a real application, you would send these credentials to a server for authentication.
                // For this front-end only example, we'll simulate a successful login.
                alert('Login Successful! (Authentication logic would go here)');
                loginForm.reset(); // Clear the form
                // Redirect to a user dashboard or home page after successful login
                // window.location.href = 'index.html'; // Example redirect
            }
        });
    }
});