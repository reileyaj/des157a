(function(){
    'use strict'
    //console.log('running JS');

    //Characters
    const zomb = document.querySelector('#zomb');
    const ghoul = document.querySelector('#ghoul');
    const necro = document.querySelector('#necro');
    const vamp = document.querySelector('#vamp');

    //Players 
    const player1 = document.querySelector('#p1');
    const player2 = document.querySelector('#p2');

    //Directions
    const playerDirections = document.querySelector('#directions');
    const turnDirections = document.querySelector('#turnDirections');

    //HP
    const p1HP = document.querySelector('#p1HP');
    const p2HP = document.querySelector('#p2HP');

    let attacker;
    let defender;
    let defenderIndex;
    const gameData = {
        monsters: [zomb, ghoul, necro, vamp],
        health: [100, 100],
        strongAttack: [0, 20, 40],
        medAttack: [0, 15, 30],
        weakAttack: [5, 10, 15],
    };

})();