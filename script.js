document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.sidebar-comp');

  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
});
