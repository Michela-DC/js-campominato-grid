// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const gameContainer = document.querySelector('.game-container');

// LEVEL 1
for(let i = 1; i <=100; i++){
    box = document.createElement('div');
    box.append(i);
    box.style.width = '10%';
    box.style.border = '1px solid black';
    gameContainer.append(box);
}

/*
// LEVEL 2
for(let i = 1; i <=81; i++){
    box = document.createElement('div');
    box.style.width = 'calc(100% / 9)';
    box.style.border = '1px solid black';
    gameContainer.append(box);
}

// LEVEL 3
for(let i = 1; i <=49; i++){
    box = document.createElement('div');
    box.style.width = 'calc(100% / 7)';
    box.style.border = '1px solid black';
    gameContainer.append(box);
}
*/