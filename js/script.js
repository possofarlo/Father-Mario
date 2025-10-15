// Minimal JavaScript file for future enhancements
// Currently empty — the site is fully functional as static HTML/CSS

console.log("Father Mario Foundation – Watamu");

// Make profile image open in lightbox when clicked
document.querySelector('.profile-circle img').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  modalImg.src = this.src;
  modal.classList.add('show');
});

// Existing lightbox code for gallery/about images
document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    modalImg.src = this.href;
    modal.classList.add('show');
  });
});

document.querySelector('.lightbox-close').onclick = function() {
  document.getElementById('lightbox-modal').classList.remove('show');
};

window.onclick = function(event) {
  const modal = document.getElementById('lightbox-modal');
  if (event.target === modal) {
    modal.classList.remove('show');
  }
};