/* ================== SHOW MENU ================== */

const showMenu  = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate thet variable exist
    if(toggle && nav) {
        toggle.addEventListener("click", () =>{
            // We add the show-menu class to the div tag with the nav-manu class
            nav.classList.toggle("show-menu")
        }) 
    }
}
showMenu("nav-toggle", "nav-menu")

/* =============== REMOVE MENU MOBILE =============== */

const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    // When we click in each nav-link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/* =============== SCROLL SECTION ACTIVE LINK =============== */

const section = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY =window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.add("active-link")
        } else {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

/* ================ CHANGE BACKGROUND HEADER ================ */
function scrollHeader(){
    const header = document.getElementById("header")
    //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

 /* ================ SHOW SCROLL ================ */
 function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scrollUp 
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll"); 
    else scrollTop.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTopp)