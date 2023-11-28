(function(){
    'use strict'
    //console.log('running JS');
    //Sections
    const characterSelect = document.querySelector('#characterSelect')
    const game = document.querySelector('#Game')

    //Characters
    const zomb = document.querySelector('#zomb');
    const ghoul = document.querySelector('#ghoul');
    const necro = document.querySelector('#necro');
    const vamp = document.querySelector('#vamp');

    let characters = document.querySelectorAll('.character');

    //Start Button
    const startBtn = document.querySelector('#confirm1')

    //Attack Button
    const attackBtn = document.querySelector('#confirm2')

    //Players 
    const player1Img = document.querySelector('#p1 img')
    const player2Img = document.querySelector('#p2 img')

    //Directions
    const playerDirections = document.querySelector('#directions');
    const turnDirections = document.querySelector('#turnDirections');

    //HP
    const p1HP = document.querySelector('#p1HP');
    const p2HP = document.querySelector('#p2HP');

    //Attacks
    let attackElements = document.querySelectorAll('.attck');
    let attackContainers = document.querySelectorAll('.attack');

    //Attack Names
    const zombAttcks = ['Brain Gnaw', 'Sinew Slurp', 'Flesh Chomp'];
    const ghoulAttcks = ['Corpse Feed', 'Phantom Wail', 'Spine Chill'];
    const necroAttcks = ['Wrath of the Dead', 'Rigor Mortis', 'Skull Throw'];
    const vampAttcks = ['Blood Feast', 'Throat Tear', 'Fang Slice'];

    let attacker;
    let defender;

    let gameData = {
        player1Char: null,
        player2Char: null,
        currentPlayer: 1,
        monsters: [zomb, ghoul, necro, vamp],
        player1Health: 100,
        player2Health: 100,
        index: 0
    };

    //HOLY SHIT WE'RE DONE WITH THE VARIABLES ONTO THE CODEEEE


    //Choose your Character
    characters.forEach(function(eachChara){
        eachChara.addEventListener('click', function(e){
            const charId1 = e.currentTarget.id;
            //console.log(`you clicked the ${charId1}`);
            //console.log(gameData.currentPlayer)

            switch(charId1){ //makes it so only one character can be selected at a time.
                case 'zomb': 
                    //console.log('u selected zomb good job ')
                    zomb.className = 'character selected'; 
                    ghoul.className = 'character unselected'
                    necro.className = 'character unselected'
                    vamp.className = 'character unselected'
                break;
                case 'ghoul':
                    zomb.className = 'character unselected'; 
                    ghoul.className = 'character selected'
                    necro.className = 'character unselected'
                    vamp.className = 'character unselected'
                break;
                case 'necro':
                    zomb.className = 'character unselected'; 
                    ghoul.className = 'character unselected'
                    necro.className = 'character selected'
                    vamp.className = 'character unselected'
                break;
                case 'vamp':
                    zomb.className = 'character unselected'; 
                    ghoul.className = 'character unselected'
                    necro.className = 'character unselected'
                    vamp.className = 'character selected'
                break;
            };
        });
    });

    startBtn.addEventListener('click', function(){
        const selectedElement = document.querySelector('.selected');

        if (gameData.currentPlayer === 1 && selectedElement) {
            gameData.player1Char = document.querySelector('.selected').id; //grabs the ID of the selected figure/character
            //console.log(gameData.player1Char);

            player1Img.src = `images/${gameData.player1Char}.png`; //inserts the id of the selected character into the image of player 1, making the chosen character visible
            playerDirections.innerHTML = 'Player 2: Choose your character!' // changes text to direct player 2 to choose character
            gameData.currentPlayer = 2;            

            zomb.className = 'character unselected'; ghoul.className = 'character unselected';necro.className = 'character unselected'; vamp.className = 'character unselected'; //makes everything unselected again

        } else if (gameData.currentPlayer === 2 && selectedElement) {
            gameData.player2Char = document.querySelector('.selected').id;
            //console.log(gameData.player2Char);    
            player2Img.src = `images/${gameData.player2Char}.png`;
            gameData.currentPlayer = 1;
            characterSelect.className = 'invis'; game.className = 'vis'; //switches visible section from character select to the game itself
            

            zomb.className = 'character unselected'; ghoul.className = 'character unselected';necro.className = 'character unselected'; vamp.className = 'character unselected';

            turnDirections.innerHTML = 'FIGHT!'
            attackBtn.className = 'noOpacity'; attackBtn.style.pointerEvents = "none";
            attackContainers.forEach(function(eachAttack){ //makes attacks invisible 
                eachAttack.className = 'attack noOpacity'
                eachAttack.style.pointerEvents = "none"
            })


            setTimeout(function(){ //starts game after 1 second
                startTurn();
            }, 1000)

        } else {
            playerDirections.innerHTML += ' !' //adds an exclamation point at the end of the directions if player clicks confirm w/o selecting a character
        };    
    });
    
    //THAT TOOK SO LONG AT LEAST WE'RE AT THE GAME NOW!!!

    function startTurn(){ //runs at the start of the game, is called after p2 confirms their character
        attackBtn.className = ''; attackBtn.style.pointerEvents = "auto"; //makes buttons available again
        attackContainers.forEach(function(eachAttack){
            eachAttack.className = 'attack'
            eachAttack.style.pointerEvents = "auto"
        })

        switch (gameData.currentPlayer){ //tells browser what to do when each character is the current player
            case 1:
                //console.log('player1')
                turnDirections.innerHTML = 'Player 1: Choose your attack!';
                attacker = 'Player 1';
                defender = 'Player 2';

                switch (gameData.player1Char){ //assigns the correct attack names for each player
                    case 'zomb': 
                    for (let i = 0; i < attackElements.length; i++){
                        attackElements[i].textContent = zombAttcks[i];
                    } break;
                    case 'ghoul':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = ghoulAttcks[i];
                        } break;
                    case 'necro':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = necroAttcks[i];
                        } break;
                    case 'vamp':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = vampAttcks[i];
                        } break;
                };

                selectAttack(); //run function to select an attack
                confirmAttack(); //run function when user clicks confirm to perform an attack

                /* attackBtn.addEventListener('click', attackplay) // runs function for attack */
            break;
            case 2:
                turnDirections.innerHTML = 'Player 2: Choose your attack!';
                attacker = 'Player 2';
                defender = 'Player 1';
                switch (gameData.player2Char){
                    case 'zomb': 
                    for (let i = 0; i < attackElements.length; i++){
                        attackElements[i].textContent = zombAttcks[i];
                    } break;
                    case 'ghoul':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = ghoulAttcks[i];
                        } break;
                    case 'necro':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = necroAttcks[i];
                        } break;
                    case 'vamp':
                        for (let i = 0; i < attackElements.length; i++){
                            attackElements[i].textContent = vampAttcks[i];
                        } break;
                };
            
            break;
        };
    };

    function selectAttack(){
        //console.log('select attack')
        attackContainers.forEach(function(container){
            container.addEventListener('click', function(event){
                const attackId = event.currentTarget.id;
                //console.log(attackId);

                switch(attackId){
                    case 'strongAttack':
                        attackContainers[0].className = 'attack selectedAttack';
                        attackContainers[1].className = 'attack';
                        attackContainers[2].className = 'attack';
                        break;
                    case 'medAttack':
                        attackContainers[0].className = 'attack';
                        attackContainers[1].className = 'attack selectedAttack';
                        attackContainers[2].className = 'attack';
                        break;
                    case 'weakAttack':
                        attackContainers[0].className = 'attack';
                        attackContainers[1].className = 'attack';
                        attackContainers[2].className = 'attack selectedAttack';
                        break;
                }
            });
        });


    };

    function confirmAttack(){
        attackBtn.removeEventListener('click', attackBtnHandler); //removes the event listener so it isn't called more than once

        attackBtn.addEventListener('click', attackBtnHandler); //adds event listener back
        
    };
    //the function being called while clicking the attackbtn
    var attackBtnHandler = function(){
            const selectedAttack = document.querySelector('.selectedAttack').id;
            const attackLevel = Math.floor(Math.random()*10);

            attackContainers.forEach(function(eachAttack){ //makes attacks invisible 
                eachAttack.className = 'attack noOpacity'
                eachAttack.style.pointerEvents = "none"
            })

            attackBtn.className = 'noOpacity';
            attackBtn.style.pointerEvents = "none"

            //console.log(selectedAttack);
            //console.log(attackLevel);

            switch(selectedAttack){ 
                case 'strongAttack': 
                    switch(attackLevel){
                        case 0: case 1: case 2 : case 3: case 4: //50% chance of no damage
                            //console.log('no damage'); 
                            if(gameData.currentPlayer == 1){ //ensures health is taken from the opponent of the currentPlayer
                                gameData.player2Health = gameData.player2Health - 0 //0 //taking health away from defender
                                //console.log(gameData.player2Health);
                            } else {
                                gameData.player1Health = gameData.player1Health - 0
                            };

                            turnDirections.innerHTML = `Player ${gameData.currentPlayer} attacks with all their might! ${defender} dodges completely!`
                            break;
                        case 5: case 6: case 7: //30% chance of half damage
                            //console.log('half damage'); 
                            if(gameData.currentPlayer == 1){
                                gameData.player2Health = gameData.player2Health - 20 //20
                            } else {
                                gameData.player1Health = gameData.player1Health - 20
                            };
                            turnDirections.innerHTML = `Player ${gameData.currentPlayer} attacks with all their might! ${defender} throws up their hands to protect itself!`
                            break;
                        case 8: case 9: //20% chance full damage
                            //console.log('full damage');
                            if(gameData.currentPlayer == 1){
                                gameData.player2Health = gameData.player2Health - 40 //40
                            } else {
                                gameData.player1Health = gameData.player1Health - 40
                            };
                            turnDirections.innerHTML = `Player ${gameData.currentPlayer} attacks with all their might! ${defender} is severely wounded!`
                            break;
                    }
                    break;
                case 'medAttack': 
                switch(attackLevel){
                    case 0: case 1: case 2: //30% chance of no damage
                        if(gameData.currentPlayer == 1){
                            gameData.player2Health = gameData.player2Health - 0
                        } else {
                            gameData.player1Health = gameData.player1Health - 0
                        };
                        turnDirections.innerHTML = `${attacker} fiercely attacks! ${defender} dodges completely!`;
                        break;
                    case 3: case 4: case 5: case 6: //40% chance of half damage
                        if(gameData.currentPlayer == 1){
                            gameData.player2Health = gameData.player2Health - 12
                        } else {
                            gameData.player1Health = gameData.player1Health - 12
                        }; 
                        turnDirections.innerHTML = `${attacker} fiercely attacks! ${defender} throws up their hands to protect itself!`;
                        break;
                    case 7: case 8: case 9: //30% chance of full damage
                        if(gameData.currentPlayer == 1){
                            gameData.player2Health = gameData.player2Health - 20
                        } else {
                            gameData.player1Health = gameData.player1Health - 20
                        };
                        turnDirections.innerHTML = `${attacker} fiercely attacks! ${defender} takes a hit!`;
                        break;
                }
                    break;
                case 'weakAttack':
                    switch(attackLevel){
                        case 0: //10% chance of no damage
                            if(gameData.currentPlayer == 1){
                                gameData.player2Health = gameData.player2Health - 1
                            } else {
                                gameData.player1Health = gameData.player1Health - 1
                            };
                            turnDirections.innerHTML = `${attacker} hesitantly attacks! ${defender} doesn't notice at all!`;
                            break;
                        case 1: case 2: case 3: case 4: //40% chance of half damage
                            if(gameData.currentPlayer == 1){
                                gameData.player2Health = gameData.player2Health - 5
                            } else {
                                gameData.player1Health = gameData.player1Health - 5
                            };
                            turnDirections.innerHTML = `${attacker} hesitantly attacks! ${defender} yawns too hard from boredom and loses a little HP!`;
                            break;
                        case 5: case 6: case 7: case 8: case 9: //50% chance of full damage
                            if(gameData.currentPlayer == 1){
                                gameData.player2Health = gameData.player2Health - 10
                            } else {
                                gameData.player1Health = gameData.player1Health - 10
                            };
                            turnDirections.innerHTML = `${attacker} hesitantly attacks! ${defender} loses balance and scrapes its knee!`;
                            break;
                    }
                    break;
            }

            switch(gameData.currentPlayer){ //switches default sprite to attack sprite
                case 1: player1Img.src = `images/${gameData.player1Char}At.png`; break;
                case 2: player2Img.src = `images/${gameData.player2Char}At.png`; break;
            }

            //console.log(`Player 1: ${gameData.player1Health}`); console.log(`Player 2: ${gameData.player2Health}`);

            p1HP.style.width = `${gameData.player1Health}%`; p2HP.style.width = `${gameData.player2Health}%`; //update the width of the healthbar to reflect the % of health left

            if (gameData.player1Health < 1) {
                p1HP.style.width = '0%'
            } else if (gameData.player2Health < 1){
                p2HP.style.width = '0%'
            } //makes the health bar empty if health is 0 or below

            checkWinCondition();
    };

    function checkWinCondition(){
        setTimeout(function(){

            if (gameData.player1Health < 1){
                turnDirections.innerHTML = 'Player 1 has been slain! Player 2 defeats its foe!'
                player1Img.style.filter = "grayscale(80%)"; //greys out losing player

                attackContainers.forEach(function(eachAttack){ //makes attack namaes disappear when game has been completed
                    eachAttack.className = 'attack noOpacity'
                })

                attackBtn.className = ''; attackBtn.style.pointerEvents = "auto"//makes confirm button visible & responsive again
                attackBtn.innerHTML = "New Game" //changes attack button to new game button
                attackBtn.addEventListener('click', newGame);

            } else if (gameData.player2Health < 1){
                turnDirections.innerHTML = 'Player 2 has been slain! Player 1 defeats its foe!'
                player2Img.style.filter = "grayscale(80%)";

                attackContainers.forEach(function(eachAttack){
                    eachAttack.className = 'attack noOpacity'
                })

                attackBtn.className = ''; attackBtn.style.pointerEvents = "auto"//makes confirm button visible & responsive again
                attackBtn.innerHTML = "New Game" 
                attackBtn.addEventListener('click', newGame);

            } else { //if no one has won
                attackContainers[0].className = 'attack'; attackContainers[1].className = 'attack'; attackContainers[2].className = 'attack'; //makes all attacks unselected so next turn can start w/o a selected attack

                player1Img.src = `images/${gameData.player1Char}.png`; player2Img.src = `images/${gameData.player2Char}.png`; //switches attack sprite back to default sprite

                attackContainers.forEach(function(eachAttack){ //makes attacks visible again
                    eachAttack.className = 'attack';
                    eachAttack.style.pointerEvents = "auto";
                })
                attackBtn.className = ''; attackBtn.style.pointerEvents = "auto"//makes confirm button visible & responsive again
    
                switch(gameData.currentPlayer){ //switches current player
                    case 1: gameData.currentPlayer = 2; break;
                    case 2: gameData.currentPlayer = 1; break;
                }
                startTurn();//starts the next turn
            }
        }, 3000)
    };

    function newGame(){
        location.reload(); //refreshes page for new game

    };

})();