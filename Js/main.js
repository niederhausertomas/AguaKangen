function toggleTitulo(className) {
    let titulos = document.querySelectorAll('.itemNavBar'); 
    titulos.forEach(function(titulo) {
        if (titulo.classList.contains(className.substr(1)) && titulo.style.display != 'block') {
            titulo.style.display = 'block'; 
        } else {
            titulo.style.display = 'none'; 
        }
    });
}


window.addEventListener('scroll', function() {
    let titulo = document.querySelector('.titulo');
    let umbral;
    
    if (window.innerWidth <= 500) { 
        umbral = 100; 
    } else {
        umbral = 300;
    }

    if (window.scrollY > umbral) {
        titulo.classList.add('scroll-down');
    } else {
        titulo.classList.remove('scroll-down');
    }
});