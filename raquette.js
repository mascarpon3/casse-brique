export class Raquette {
    constructor(ctx){
        this.ctx = ctx
        this.gameWidth = ctx.canvas.clientWidth;
        this.gameHeight = ctx.canvas.clientHeight;
        this.borderLeft = 0;
        this.borderRight = this.gameWidth - this.width

        this.width = 120;
        this.height= 20; 

        this.direction = 0;
        this.position = (this.gameWidth - this.width) / 2;
    }

    updatePosition(){
        this.position += 4 * this.direction
    }

    updateDirection(direction){
        if (this.position != this.borderLeft && direction === -1) {
            this.direction = -1
        } else if (this.position != this.borderRight  && direction === 1) {
            this.direction = 1
        } else {
            this.direction = 0
        }
    }

    draw(){
        this.ctx.fillRect(this.position, this.gameHeight - 60, this.width, this.height)
    }
}
