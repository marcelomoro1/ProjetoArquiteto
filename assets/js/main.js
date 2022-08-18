//ABRIR E FECHAR MENU PELO NAV TOGGLE
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
});

//ABRIR E FECHAR MENU PELOS LINKS
document.querySelectorAll('.texto-links').forEach(e => e.addEventListener('click', () => {
    linksContainer.classList.remove('show-links');
}));


//BACK TO TOP
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){ //Quando a tela carrega
    const scrollHeight = window.pageYOffset; //Tamanho da tela em pixels no meu scroll
    if (scrollHeight>=400){
        topLink.classList.add('show-back-to-top');
    }
    else{
        topLink.classList.remove('show-back-to-top');
    }
});

//DATA NO FOOTER
const date = document.getElementById('date');
date.innerHTML = `${new Date().getFullYear()}`;