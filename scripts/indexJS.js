const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarButton = document.getElementsByClassName('navbar-button')[0]

toggleButton.addEventListener('click', () => {
  navbarButton.classList.toggle('active')
})