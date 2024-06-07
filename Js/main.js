function toggleTitulo1(className) {
    let titulos = document.querySelectorAll('.itemNavBar')
    titulos.forEach(function(titulo) {
        if (titulo.classList.contains(className.substr(1)) ) {
            titulo.style.display = 'block'
        } 
    });
}

function toggleTitulo2(className) {
    let titulos = document.querySelectorAll('.itemNavBar'); 
    titulos.forEach(function(titulo) {
        if (titulo.classList.contains(className.substr(1)) ) {
            setTimeout(function() {
            titulo.style.display = 'none'
        }, 2000);
        } 
    })
}

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


// -------- Carrousel -------------- 

let bannerImage = document.querySelector('.banner img');
let bannerTitle = document.querySelector('.banner h5');
let bannerParagraph = document.querySelector('.banner p');

function changeBannerImage(newImageSrc, title, paragraph) {
    bannerImage.src = newImageSrc;
    bannerTitle.textContent = title;
    bannerParagraph.textContent = paragraph;
}

const images = [
    { src: './images/LEVELUK K8.png', title: 'LEVELUK K8', paragraph: 'Es el equipo de alta gama de Enagic. El Leveluk K8 fue diseñado para ofrecer la máxima potencia, dado que consigue incrementar los niveles de anti-oxidación, gracias a sus 8 placas de titanio bañadas en platino, hasta en -1.000 ORP. Este modelo es multivoltaje, se prende y apaga automáticamente, ahorrando energía en hasta un 30%, y posee una pantalla táctil muy amigable que habla en 8 idiomas diferentes. Cuenta también con un sistema de limpieza semiautomático y un contador de litros para el recambio del filtro interno.' },
    { src: './images/Leveluk-SD501-Platinum.png', title: 'LEVELUK SD-501 Platinum', paragraph: 'Este equipo de Enagic es el más vendido en el mundo, dado su excelente equilibrio precio/prestaciones. Cuenta con niveles de anti-oxidación de hasta -800 ORP, gracias a sus 7 placas de titanio bañadas en platino. El Leveluk SD501 Platinum posee un diseño plateado que se acopla muy bien a casi toda cocina y una pantalla muy amigable que habla en 5 idiomas diferentes.' },
    { src: './images/Leveluk-SD501.png', title: 'LEVELUK SD-501', paragraph: 'En su interior, este equipo es exactamente el mismo que el Leveluk SD501 Platinum. Básicamente sus diferencias se encuentran en su diseño externo y en la cantidad de idiomas: el Leveluk SD501 habla en inglés. Al igual que los otros Leveluk' },
    { src: './images/anespa.png', title: 'ANESPA DX', paragraph: 'Esta ducha protege tu piel y pelo brindando un efecto relajante. ANESPA-DX contiene una mezcla de ingredientes provenientes de las aguas termales naturales y minerales. Proporciona agua con iones minerales que potencian los efectos relajantes. Beneficios: produce agua especialmente eficaz contra los sarpullidos, la piel seca, problemas de circulación, eczemas, contusiones y esguinces, rigidez en los hombros, entre muchos otros beneficios. Retira completamente los residuos del cloro y bacterias del agua a través del sistema de purificación del cartucho interno.' }
];

let currentIndex = 0;
let intervalId;

function autoChangeBannerImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBannerImage(images[currentIndex].src, images[currentIndex].title, images[currentIndex].paragraph);
}

function startAutoChange() {
    intervalId = setInterval(autoChangeBannerImage, 5000);
}

function stopAutoChange() {
    clearInterval(intervalId);
}

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        changeBannerImage(images[currentIndex].src, images[currentIndex].title, images[currentIndex].paragraph);
        
        stopAutoChange();
        setTimeout(() => {
            startAutoChange();
        }, 10000);
    });
});

startAutoChange();





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
