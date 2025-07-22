document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    document.getElementById('formMessage').textContent = `Thanks for your message, ${name}! I’ll get back to you soon.`;
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = `Please fill in all fields.`;
  }
});











