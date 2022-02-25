function myFunction(x) {
    x.classList.toggle("cont");
    another();
}

function another() {
    let element = document.getElementById("contentMenu");
    element.classList.toggle("hide")
}