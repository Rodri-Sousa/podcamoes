function toggleMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.classList.toggle('active');
}

function closeMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.classList.remove('active');
}

document.addEventListener('click', (e) => {
  const menuOverlay = document.querySelector('.menu-overlay');
  const burger = document.querySelector('.burger');

  if (
    menuOverlay.classList.contains('active') &&
    !menuOverlay.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});
