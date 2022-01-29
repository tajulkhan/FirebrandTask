// js File

function validateform() {
    var name = document.myform.name.value;
    var gmail = document.myform.gmail.value;
    var mobileno = document.myform.mobileno.value;

    if (name == "") {
        alert("Enter the username");
        return false;
    } else if (!isNaN(name)) {
        alert("Enter the alphabets only");
        return false;
    } else if (gmail == "") {
        alert("Enter the email")
        return false;
    } else if (mobileno.length < 10 || mobileno.length > 10) {
        alert("Enter the mobile Number 10 Digit");
        return false;
    }
}



const primaryNav = document.querySelector(".menu-item");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", true);

    }
});