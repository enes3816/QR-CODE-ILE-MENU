// JavaScript ile menülerin açılmasını sağlamak
document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', function() {
      const submenu = this.nextElementSibling;
      // Toggle submenu açma ve kapama
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'block';
      }
    });
  });
  