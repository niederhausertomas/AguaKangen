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


// window.addEventListener('scroll', function() {
//     let titulo = document.querySelector('.titulo')
//     let itemNavBars = document.querySelectorAll('.itemNavBar')
    
//     let umbral
    
//     if (window.innerWidth <= 500) { 
//         umbral = 100; 
//     } else {
//         umbral = 300;
//     }

//     if (window.scrollY > umbral) {
//         titulo.classList.add('scroll-down')
//         itemNavBars.forEach(function(itemNavBar) {
//             itemNavBar.classList.add('scroll-down')
//         });
//     } else {
//         titulo.classList.remove('scroll-down');
//         itemNavBars.forEach(function(itemNavBar) {
//             itemNavBar.classList.remove('scroll-down')
//         });
//     }
// });

// ------- mail --------------

//Formulario de contacto. formspree.io
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset();
        alert("Mensaje enviado!")
    }
}
