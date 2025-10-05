// Minimal JavaScript file for future enhancements
// Currently empty — the site is fully functional as static HTML/CSS

console.log("Father Mario Foundation – Watamu");

document.querySelectorAll('.gallery .lightbox').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    modalImg.src = this.href;
    modal.style.display = 'block';
  });
});

document.querySelector('.lightbox-close').onclick = function() {
  document.getElementById('lightbox-modal').style.display = 'none';
};

window.onclick = function(event) {
  const modal = document.getElementById('lightbox-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};