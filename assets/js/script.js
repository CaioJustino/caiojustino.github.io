// Reveal Function

function reveal() {
    var reveals = document.querySelectorAll("#content")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
        } else {
        reveals[i].classList.remove("active")
        }
    }
}

window.addEventListener("scroll", reveal)

// Scroll Function

function scrollPageTo(n) {
    var element = document.querySelector(n);

    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}