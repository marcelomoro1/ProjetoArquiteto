const reviews = [
    {
        id: 1,
        img: './assets/img/imglucas1.jpg',
    },
    {
        id: 2,
        img: './assets/img/imglucas2.png',
    },
    {
        id: 3,
        img: './assets/img/imglucas3.jpg',
    },

];

const img = document.querySelector('.imagem');

const prevBtn = document.querySelector('.btn-esquerda')
const nextBtn = document.querySelector('.btn-direita')

let currentItem = 0;


function mostraFoto(){
    img.src = reviews[currentItem].img;
}

window.addEventListener('DOMContentLoaded', function(){
    mostraFoto();
});

nextBtn.addEventListener('click', function(){
    currentItem = currentItem + 1;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    mostraFoto();
});
prevBtn.addEventListener('click', function(){
    currentItem = currentItem -1;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    mostraFoto();

});
