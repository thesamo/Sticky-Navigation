const navbar = document.querySelector('.navbar');
const logo = document.querySelector(".logo a ");
const navLinks = document.querySelectorAll('.navbar ul li a');
const active =  document.querySelector('.navbar ul li a.active')
const backToTopButton   = document.querySelector(".back-to-top");

 const changeaNavbar = ()=> {
    if (window.scrollY >= 200) {
      navbar.style.cssText = `z-index:10`
      navbar.style.backgroundColor = "white";
      logo.style.color = "black";

      navLinks.forEach(link => {
        link.style.color = "black";
      });
      active.style.color = "red";

    } else {
      navbar.style.backgroundColor = "#222";
      logo.style.color = "white";

      navLinks.forEach(link => {
        link.style.color = "white";
      });
      active.style.color = "red";

    }
}
  
window.addEventListener("scroll", changeaNavbar);

window.addEventListener("load", changeaNavbar);

backToTopButton.addEventListener('click', () =>{
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})

;