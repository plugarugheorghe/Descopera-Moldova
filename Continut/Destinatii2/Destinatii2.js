document.addEventListener("DOMContentLoaded", () => {
    fetch('../Navbar/Navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading Navbar:', error));
    fetch('../Footer/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading Footer:', error));
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.pagination-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !link.classList.contains('active')) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 600); 
      }
    });
  });
});