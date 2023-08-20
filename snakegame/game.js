
// let gameCanvas = document.getElementById("gameCanvas");
// gameCanvas.height = 1000;
// gameCanvas.width = 1000;

// let canvasContext = gameCanvas.getContext("2d");


// canvasContext.fillStyle = "red";

// canvasContext.fillRect(0, 0, 400, 400)

class Gameplay {
    canvasContext;
    gameCanvas;


    constructor(inputWidth, inputHeight, backgroundColor, unitSize) {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.canvasContext = gameCanvas.getContext('2d');
        this.snake= new Snake (0,0,0,1,unitSize,"yellow")

        this.gameCanvas.width = inputWidth;
        this.gameCanvas.height = inputHeight;
        this.backgroundColor = backgroundColor;
        this.unitSize = unitSize;

    }
    drawBackground() {
        this.canvasContext.fillStyle = this.backgroundColor;
        this.canvasContext.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height)

    }
    creatApple() {

        let numberSquares = this.gameCanvas.width / this.unitSize;

        let xSquare = Math.floor(Math.random() * numberSquares);
        let ySquare = Math.floor(Math.random() * numberSquares);

        let x = xSquare * this.unitSize;
        let y = ySquare * this.unitSize;
        this.apple = new Apple(x, y, "green");

    }
    drawApple() {

        this.drawRect(this.apple.x,this.apple.y,this.unitSize,this.unitSize,this.apple.color)
       
    }
    drawRect(x, y, width, height, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x, y, width, height);
    }
    drawSnake() {
        for ( let cell of this.snake.snakeBody){
        this.drawRect(cell.x,cell.y,this.unitSize,this.unitSize,this.snake.color)}

    }

}

const game = new Gameplay(658, 658, "red", 40);
game.drawBackground();
game.creatApple();
game.drawApple();
game.drawSnake();


