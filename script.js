// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const mainContainer = document.querySelector('.main-container');
console.log(mainContainer);
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


btnPlay.addEventListener('click', function(){
    switch (levels.value){
        case 'easy':
            console.log('level easy')

            for(let i = 1; i <= boxesEasy; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = `calc(100% / ${colEasy})`;
                box.append(i);
                easyWrapper.append(box);
                easyWrapper.classList.add('active');
                normalWrapper.classList.remove('active');
                crazyWrapper.classList.remove('activnormal');
            }
            mainContainer.style.backgroundColor = '#7FFFD4';
            console.log(mainContainer);
            break;
    
        case 'normal':
            console.log('level normal');

            for(let i = 1; i <= boxesNormal; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = `calc(100% / ${colNormal})`;
                box.append(i);
                normalWrapper.append(box);
                normalWrapper.classList.add('active');
                easyWrapper.classList.remove('active')
                crazyWrapper.classList.remove('activnormal');
            }
            mainContainer.style.backgroundColor = '#FFD700';
            console.log(mainContainer);
            break;
        
        case 'crazy':
            console.log('level crazy');

            for(let i = 1; i <= boxesCrazy; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = `calc(100% / ${colCrazy})`;
                box.append(i);
                crazyWrapper.append(box);
                crazyWrapper.classList.add('active');
                easyWrapper.classList.remove('active')
                normalWrapper.classList.remove('active');
            }
            console.log(mainContainer);
            mainContainer.style.backgroundColor = '#FF6347';
            break;
    
    }
})



