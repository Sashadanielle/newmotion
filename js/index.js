document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.catalogo img');
    let currentIndex = 0;

    function changeImage() {
        // Remover la clase active de la imagen actual
        images[currentIndex].classList.remove('active');

        // Mover al siguiente índice (circular)
        currentIndex = (currentIndex + 1) % images.length;

        // Agregar la clase active a la nueva imagen
        images[currentIndex].classList.add('active');
    }

    // Inicialmente, mostrar la primera imagen
    images[currentIndex].classList.add('active');

    // Cambiar imágenes cada 4 segundos
    setInterval(changeImage, 4000);
});

// JavaScript para mostrar y ocultar el submenú
function toggleSubmenu(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    const submenu = document.getElementById('catalogoSubmenu');
    submenu.classList.toggle('show'); // Alterna la clase "show"
}

// JavaScript para el mensaje al registrar cuenta
document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById('registroForm');
    
    registroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();

        // Mostrar mensaje personalizado
        alert(`${nombre} ${apellido}, te has registrado exitosamente.`);
    });
});


// JavaScript para el mensaje al registrar 
document.addEventListener("DOMContentLoaded", function () {
    const suscripcionForm = document.getElementById('suscripcionForm');

    // Evento para manejar el envío del formulario de suscripción
    suscripcionForm.addEventListener('submit', function (event) {
        // Prevenir el envío real del formulario
        event.preventDefault();

        // Obtener el valor del correo electrónico
        const email = suscripcionForm.querySelector('input[name="email"]').value.trim();

        // Verificar si el correo es válido (puedes ajustar esta validación según tus necesidades)
        if (email) {
            // Mostrar el mensaje de suscripción exitosa con cupón
            alert("Te has suscrito y has ganado un cupón de 10% de descuento: NEWNOTION2024");
        }
    });
});

// JavaScript para el catalogo de prenda individual
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".image-slider .product-img");
    const totalSlides = slides.length;

    // Ocultar la imagen actual
    slides[currentSlide].style.display = "none";

    // Cambiar a la nueva imagen
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    // Mostrar la nueva imagen
    slides[currentSlide].style.display = "block";
}

// Inicializar el slider (mostrar solo la primera imagen)
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".image-slider .product-img");
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });
});

    // JavaScript para manejar la selección de un solo tamaño
    const sizeButtons = document.querySelectorAll('.size-button');

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Eliminar la clase 'selected' de todos los botones
            sizeButtons.forEach(btn => btn.classList.remove('selected'));

            // Agregar la clase 'selected' al botón clickeado
            button.classList.add('selected');
        });
    });






