let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let bloco = 32;
let snake = [];
snake[0] = {
    x: 8 * bloco,
    y: 8 * bloco
}
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * bloco, 16 * bloco);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, bloco, bloco);
    }
}

function iniciarJogo() {
    
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += bloco; //adiciona um bloco 
    if(direction == "left") snakex -= bloco; //retira um bloco
    if(dicrection == "up") snakey -= bloco;
    if(direction == "down") snakey += bloco;

    snake.pop();

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
    
}

let jogo = setInterval(iniciarJogo, 100); //a cada 100ms a tela é renovada e atualiza o jogo

