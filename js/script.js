let turno = 0;
        let win = 0;
        let velha = false;
        let jogadas =[
            '', '', '',
            '', '', '',
            '', '', ''
        ];
        const game = document.querySelector("#game");
        const turnId = document.querySelector("#turnId");

        function playerClick(i){
            if(jogadas[i] == '' && win == 0 && velha == false){
                if(turno==0 || turno%2==0){
                    jogadas[i] = 'X';
                }
                if(turno!=0 && turno%2!=0){
                    jogadas[i] = 'O';
                }
                turno++;
                switchTurnId();
                createButtons();
                winCondition();
            }
        }
        function createButtons(){
            game.innerHTML = '';
            for (let i = 0; i < 9; i++){
                game.innerHTML +=`<button class="buttonGame" onclick="playerClick(${i})">${jogadas[i]}</button>`;
        }
    }
        function switchTurnId(){
            if(turno==0 || turno%2==0){
                turnId.innerHTML = 'Vez de X';   
                }
            if(turno!=0 && turno%2!=0){
                turnId.innerHTML = 'Vez de O';    
                }
        }
        function winCondition(){
            if(jogadas[0] == 'X' && jogadas[1] == 'X' && jogadas[2] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[3] == 'X' && jogadas[4] == 'X' && jogadas[5] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[6] == 'X' && jogadas[7] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[0] == 'X' && jogadas[3] == 'X' && jogadas[6] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[1] == 'X' && jogadas[4] == 'X' && jogadas[7] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[2] == 'X' && jogadas[5] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[0] == 'X' && jogadas[4] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }
            else if(jogadas[2] == 'X' && jogadas[4] == 'X' && jogadas[6] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                win = 1;
            }

            /*-------------------------------------------------*/

            else if(jogadas[0] == 'O' && jogadas[1] == 'O' && jogadas[2] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[3] == 'O' && jogadas[4] == 'O' && jogadas[5] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[6] == 'O' && jogadas[7] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[0] == 'O' && jogadas[3] == 'O' && jogadas[6] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[1] == 'O' && jogadas[4] == 'O' && jogadas[7] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[2] == 'O' && jogadas[5] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[0] == 'O' && jogadas[4] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else if(jogadas[2] == 'O' && jogadas[4] == 'O' && jogadas[6] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                win = 1;
            }
            else{
                velha = true;
                for( let i = 0; i < 9; i++){
                    if(jogadas[i] == ''){
                        velha = false;
                    }
                }
                if(velha == true){
                    turnId.innerHTML = 'Velha!';
                } 
            }
        }
    createButtons();