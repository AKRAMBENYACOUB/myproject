// Événement pour naviguer vers la page d'invitation
document.getElementById('invitation-btn').addEventListener('click', navigateToInvitationPage);

function navigateToInvitationPage() {
  // Logique pour naviguer vers la page d'invitation
  window.location.href = 'invitation-page.html';
}

// Événement pour afficher/masquer le menu hamburger
document.getElementById('check').addEventListener('click', toggleMenu);

function toggleMenu() {
  var navBar = document.getElementById('nav-bar');
  if (document.getElementById('check').checked) {
    navBar.style.display = 'block';
  } else {
    navBar.style.display = 'none';
  }
}
