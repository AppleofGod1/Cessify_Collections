// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Close menu when a link is clicked (optional)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
});


