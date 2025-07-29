function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleText = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleText.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleText.textContent = 'Show';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
  
      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");
  
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
  
      if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        alert("Incorrect email or password.");
      }
    });
  });
  