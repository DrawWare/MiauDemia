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

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Cambiar a Modo Claro";
        } else {
            themeToggle.textContent = "Cambiar a Modo Oscuro";
        }
    });
});

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {        
            const toast = new bootstrap.Toast(document.getElementById('successToast'));
            toast.show();

            // Redirige después de que el toast se cierre (opcional, ajusta el tiempo)
            setTimeout(() => {
                window.location.href = form.querySelector('[name="_next"]').value;
            }, 3000); // Redirige después de 3 segundos
        
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}

