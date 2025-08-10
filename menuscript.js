 const hamburger=document.getElementById('hamburger')
 const navLinks=document.getElementById('navLinks')

 hamburger.addEventListener('click', () => {
 navLinks.classList.toggle('show');
    
 });

// Close menu when any link is clicked
const links = navLinks.querySelectorAll('li a'); // or 'li a' if links are inside <li>
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});