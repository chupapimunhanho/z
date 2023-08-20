class Cell {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


class Snake {
    constructor(x, y, directionX, directionY, unitSize, color) {
        this.snakeBody = [new Cell(x, y)];
        this.unitSize = unitSize;
        this.color = color;
        // directionX = 1: x increase; 0: x unchanged; -1: x decreased
        this.directionX = directionX;
        this.directionY = directionY;
    }

    turnUp() {
        if (this.directionY == 0) {
            this.directionX = 0;
            this.directionY = -1;
        }
    }

    turnDown() {
        if (this.directionY == 0) {
            this.directionX = 0;
            this.directionY = 1;
        }
    }

    turnLeft() {
        if (this.directionX == 0) {
            this.directionX = -1;
            this.directionY = 0;
        }

    }

    turnRight() {
        if (this.directionX == 0) {
            this.directionX = 1;
            this.directionY = 0;
        }

    }

    move() {

        let oldHead = this.snakeBody[0]
        let x = oldHead.x + this.directionX * this.unitSize
        let y = oldHead.y + this.directionY * this.unitSize

        const newHead = new Cell(x, y)
        this.snakeBody.unshift(newHead)
        this.snakeBody.pop()
    }
}

