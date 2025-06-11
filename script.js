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




  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };



