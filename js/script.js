const immagini = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const luoghi = [
    'Svizzera',
    'Spagna',
    'Italia',
    'Germania',
    'Bora Bora'
];

const news = [
    'voluptas, iure ad reiciendis!',
    'commodi. Delectus explicabo perspiciatis voluptatibus',
    'tempore dolorum necessitatibus qui quasi blanditiis',
    'Omnis perferendis repellat quas reprehenderit a ut',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit'
];
let indice = 0 ;

let imgTop = document.querySelector('.img-top');

let titolo = document.querySelector('.titolo');

let active = document.getElementsByClassName('img-top-none');


let newsDesc = document.querySelector('.desc');
newsDesc.innerHTML = `${news[indice]}`;


let verticalImg = document.querySelector('.vertical-img');
// inserimento immagini nella sezione a destra
for (let i = 0; i<immagini.length; i++) {
    verticalImg.innerHTML += `<div class="cont-img-vert"><img src="${immagini[i]}" /> </div>`;
    imgTop.innerHTML +=  `<div class="img-top-none"><img src="${immagini[i]}"  /> </div>`;
}



const down = document.querySelector('.down-arrow');

down.addEventListener('click', function(){
    if ( indice < immagini.length  )
    indice = indice + 1;
    console.log(indice)
    titolo.innerHTML = `<h3>${luoghi[indice]}</h3>`;
    newsDesc.innerHTML = `${news[indice]}`;
    active.remove('img-top-none');
    active.add('active-img');

});

const up = document.querySelector ('.up-arrow');

up.addEventListener ('click' ,function(){
    if (indice > 0) {
    indice = indice - 1 ;
    console.log(indice);
    titolo.innerHTML = `<h3>${luoghi[indice]}</h3>`;
    newsDesc.innerHTML = `${news[indice]}`;
    active.remove('img-top-none');
    active.add('active-img')
    }
})



