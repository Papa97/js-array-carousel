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

let imgTop = document.querySelector('.img-top');
imgTop.innerHTML = `<img src="${immagini[0]}"/>`;

let titolo = document.querySelector('.titolo');
titolo.innerHTML = `<h3>${luoghi[0]}</h3>`;

let newsDesc = document.querySelector('.desc');
newsDesc.innerHTML = `${news[0]}`;


let verticalImg = document.querySelector('.vertical-img');
// inserimento immagini nella sezione a destra
for (let i = 0; i<immagini.length; i++) {
    verticalImg.innerHTML += `<div class="cont-img-vert"><img src="${immagini[i]}" /> </div>`
}