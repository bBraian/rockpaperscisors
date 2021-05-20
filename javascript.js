var elementos = document.querySelectorAll('.player-options div > img');
var palyerOpt = "";
var enemyOpt = "";

function whoWins(){

    let winner = document.querySelector('.winner');
    let me = document.querySelector('.me');
    let enemy = document.querySelector('.enemy');

    if(palyerOpt == "paper"){
        if(enemyOpt == "paper"){
            winner.innerHTML = "Empate!";
            me.style.backgroundColor = '#6495ED';
            enemy.style.backgroundColor = '#6495ED';
            //empate
        }else if(enemyOpt == "rock"){
            winner.innerHTML = "Você ganhou!";
            me.style.backgroundColor = '#20ec07';
            enemy.style.backgroundColor = 'red';
            //player wins
        }else if(enemyOpt == "scisor"){
            winner.innerHTML = "Você perdeu!";
            me.style.backgroundColor = 'red';
            enemy.style.backgroundColor = '#20ec07';
            //player loose
        }
    }

    if(palyerOpt == "rock"){
        if(enemyOpt == "paper"){
            winner.innerHTML = "Você perdeu!";
            me.style.backgroundColor = 'red';
            enemy.style.backgroundColor = '#20ec07';
            //player loose
        }else if(enemyOpt == "rock"){
            winner.innerHTML = "Empate!";
            me.style.backgroundColor = '#6495ED';
            enemy.style.backgroundColor = '#6495ED';
            //empate
        }else if(enemyOpt == "scisor"){
            winner.innerHTML = "Você ganhou!";
            me.style.backgroundColor = '#20ec07';
            enemy.style.backgroundColor = 'red';
            //player wins
        }
    }

    if(palyerOpt == "scisor"){
        if(enemyOpt == "paper"){
            winner.innerHTML = "Você ganhou!";
            me.style.backgroundColor = '#20ec07';
            enemy.style.backgroundColor = 'red';
            //player wins
        }else if(enemyOpt == "rock"){
            winner.innerHTML = "Você perdeu!";
            me.style.backgroundColor = 'red';
            enemy.style.backgroundColor = '#20ec07';
            //player loose
        }else if(enemyOpt == "scisor"){
            winner.innerHTML = "Empate!";
            me.style.backgroundColor = '#6495ED';
            enemy.style.backgroundColor = '#6495ED';
            //empate
        }
    }

}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoPlays(){
    let random = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == random){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    whoWins();

}

function resetOpacity(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacity();
        t.target.style.opacity = 1;
        palyerOpt = t.target.getAttribute('opt');

        inimigoPlays();

    })
}

