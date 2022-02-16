// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const mainContainer = document.querySelector('.main-container');
const levels = document.getElementById('levels');
const btnPlay = document.getElementById('btn-play');
const boxesEasy = 100;
const colEasy = 10;
const boxesNormal = 81;
const colNormal = 9;
const boxesCrazy = 49;
const colCrazy = 7;

const easyWrapper = document.createElement('div');
easyWrapper.classList.add('easy-wrapper');
mainContainer.append(easyWrapper);

const normalWrapper = document.createElement('div');
normalWrapper.classList.add('normal-wrapper');
mainContainer.append(normalWrapper);

const crazyWrapper = document.createElement('div');
crazyWrapper.classList.add('crazy-wrapper');
mainContainer.append(crazyWrapper);

let box; //la useró nei for passandola alla funzione per creare le cellette

//funzione per creare le caselle e metterle dentro al loro container
function createBox (square, col, index, wrapper){
    square = document.createElement('div');
    square.classList.add('box');
    square.style.width = `calc(100% / ${col})`;
    square.append(index);
    wrapper.append(square);
}


btnPlay.addEventListener('click', function(){
    switch (levels.value){
        case 'easy':
            console.log('level easy')

            for(let i = 1; i <= boxesEasy; i++){
                createBox(box, colEasy, i, easyWrapper);
            }         
            easyWrapper.classList.add('active');
            normalWrapper.classList.remove('active');
            crazyWrapper.classList.remove('active');

            mainContainer.style.backgroundColor = '#7FFFD4';
            console.log(mainContainer);
            break;
    
        case 'normal':
            console.log('level normal');

            for(let i = 1; i <= boxesNormal; i++){
                createBox(box, colNormal, i, normalWrapper);
            }
            normalWrapper.classList.add('active');
            easyWrapper.classList.remove('active');
            crazyWrapper.classList.remove('active');

            mainContainer.style.backgroundColor = '#FFD700';
            console.log(mainContainer);
            break;
        
        case 'crazy':
            console.log('level crazy');

            for(let i = 1; i <= boxesCrazy; i++){
                createBox(box, colCrazy, i, crazyWrapper);
            }
            crazyWrapper.classList.add('active');
            normalWrapper.classList.remove('active');
            easyWrapper.classList.remove('active');

            mainContainer.style.backgroundColor = '#FF6347';
            console.log(mainContainer);
            break;
    
    }
})


