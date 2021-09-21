let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let bloco = 32;
let snake = [];
snake[0] = {
    x: 8 * bloco,
    y: 8 * bloco
}

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

criarBG();
criarCobrinha();