let nav = document.querySelector('nav')

window.addEventListener('scroll', function(){
  if(this.window.pageYOffset > 700){
    nav.classList.add('bg-dark')
  }else{
    nav.classList.remove('bg-dark')
  }
})


// Adding and removing Active Class while clicking the link
let navLinks = document.querySelectorAll('.navbar-nav .nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'))
        link.classList.add('active')
    })
})





// To Top Button
let Totop = document.querySelector(".top");

window.onscroll = function (){
    if (this.scrollY >= 500){
        Totop.classList.add("show")
    }
    else{
        Totop.classList.remove("show")
    }
};


let navigation = document.querySelector(".navigation")
let toggle = document.querySelector(".toggle")


toggle.onclick = function(){
  navigation.classList.toggle("active")
}