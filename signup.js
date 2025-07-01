document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple form validation
    if (name && email && password) {
        alert('Sign Up Successful');
        // You can add AJAX call here to submit data to your server
    } else {
        alert('Please fill all fields');
    }
});
