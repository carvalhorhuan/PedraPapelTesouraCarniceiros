var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor')

    if(playerOpt == "papel"){

        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Empate!!";
            //Empate
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Seu Derrotado!!";
            //Seu Derrotado!
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Você Ganhou!!";
            //Você venceu!

        }
    }
    if(playerOpt == "pedra"){

        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Seu Derrotado!!";
            //Empate
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Você Ganhou!!";
            //Seu Derrotado!
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Empate!!";
            //Você venceu!

        }
    }
    if(playerOpt == "tesoura"){

        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Você Ganhou!!";
            //Empate
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Empate!!";
            //Seu Derrotado!
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Seu Derrotado!!";
            //Você venceu!

        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.4;
    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}



function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.4;
        }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();

    });
}



