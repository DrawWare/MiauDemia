// FETCH PARA EL NavBar y el Footer
document.addEventListener("DOMContentLoaded", function() {
      fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

      fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
    });


// Efecto de ocultamiento y aparicion
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
    );

    elements.forEach((element, index) => {
        // Alternar entre "from-left" y "from-right"
        if (index % 2 === 0) {
            element.classList.add("from-left");
        } else {
            element.classList.add("from-right");
        }

        observer.observe(element);
    });
});

// EVITA CLICK DERECHO
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// EVITA SELECCIONAR TEXTO
document.addEventListener("selectstart", function (event) {
    event.preventDefault();
});

