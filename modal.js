// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando la página se carga, muestra el modal después de 3 segundos
window.onload = function () {
    setTimeout(function () {
        modal.style.display = "block";
        modal.classList.remove("fade-out"); // Asegura que no tenga la clase fade-out
    }, 3000); // 3000 milisegundos = 3 segundos
};

// Cuando el usuario hace clic en <span> (x), cierra el modal con fadeOut
span.onclick = function () {
    closeModal();
};

// Cuando el usuario hace clic fuera del modal, ciérralo con fadeOut
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Función para cerrar el modal con animación fadeOut
function closeModal() {
    modal.classList.add("fade-out"); // Aplica la animación de salida
    setTimeout(function () {
        modal.style.display = "none"; // Oculta el modal después de la animación
    }, 500); // 500 milisegundos = duración de la animación
}