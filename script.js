// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.display === 'block';

    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));
    document.querySelectorAll('.faq-question').forEach(b => {
      b.classList.remove('active');
      b.querySelector('.icon').textContent = '+';
    });

    // Toggle current
    if (!isOpen) {
      answer.style.display = 'block';
      button.classList.add('active');
      button.querySelector('.icon').textContent = '−'; // Minus sign
    }
  });
});

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Placeholder for actual form handling logic (e.g., send to server)
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Optionally clear the form
  this.reset();
});
