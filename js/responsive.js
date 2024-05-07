document.addEventListener('DOMContentLoaded', myFunction);

function myFunction() {
    var x = window.matchMedia("(max-width: 992px)")

    if (x.matches) { // If media query matches
        var element = document.querySelector("#lev-right");
        element.classList.replace("text-end", "text-start");
    }
}
