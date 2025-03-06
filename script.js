// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de scroll para la navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 1rem';
    } else {
        navbar.style.padding = '1rem';
    }
});


 src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js">


    function descargarCV() {
        const element = document.querySelector('.main'); // Selecciona el contenido del CV
        const options = {
            margin: 10,
            filename: 'CV_Angel_David_Garcia.pdf', // Nombre del archivo PDF
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }, // Calidad de la imagen
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Formato A4
        };

        // Generar y descargar el PDF
        html2pdf().from(element).set(options).save();
    }
