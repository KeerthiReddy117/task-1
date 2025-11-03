document.addEventListener('DOMContentLoaded', function() {
  const alertButton = document.getElementById('alertButton');
  const colorButton = document.getElementById('colorButton');
  const messageButton = document.getElementById('messageButton');
  const messageArea = document.getElementById('messageArea');

  // 1️⃣ Show alert message
  alertButton.addEventListener('click', function() {
    alert('Hello! You clicked the alert button 🚀');
  });

  // 2️⃣ Change background color randomly
  colorButton.addEventListener('click', function() {
    const colors = ['#f4a261', '#2a9d8f', '#e9c46a', '#264653', '#e76f51', '#6a4c93'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  // 3️⃣ Display message in the page
  messageButton.addEventListener('click', function() {
    messageArea.textContent = "🎉 You just made this page interactive with JavaScript!";
  });
});
