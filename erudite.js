// Form Toggling
const registerBtn = document.getElementById('showRegister');
const signInBtn = document.getElementById('showSignIn');
const registerFormContainer = document.getElementById('registerFormContainer');
const signInFormContainer = document.getElementById('signInFormContainer');

registerBtn.addEventListener('click', () => {
  registerFormContainer.classList.remove('hidden');
  signInFormContainer.classList.add('hidden');
});

signInBtn.addEventListener('click', () => {
  signInFormContainer.classList.remove('hidden');
  registerFormContainer.classList.add('hidden');
});

// Form Validation (from before)
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (name === "" || email === "" || password === "") {
    alert("Please fill all fields.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Invalid email format.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert(`Registration Successful! Welcome, ${name}`);
  this.reset();
});

document.getElementById("signInForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value.trim();
  const password = document.getElementById("signInPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all fields.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Invalid email format.");
    return;
  }

  alert(`Sign In Successful!`);
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
