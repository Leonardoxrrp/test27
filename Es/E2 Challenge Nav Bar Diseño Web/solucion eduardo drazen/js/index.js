const navToogle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-visible");

    if  (navMenu.classList.contains("nav-visible")){
        navToogle.setAttribute("aria-label", "Cerrar Menú");
    } else{
        navToogle.setAttribute("aria-label", "Abrir Menú" );
    }
})