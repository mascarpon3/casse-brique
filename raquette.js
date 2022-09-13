export class Raquette {
    constructor(ctx){
        this.ctx = ctx
        this.gameWidth = ctx.canvas.clientWidth;
        this.gameHeight = ctx.canvas.clientHeight;
        console.log(ctx.canvas.clientWidth)

        this.width = 120;
        this.height= 10; 
        this.borderLeft = 0;
        this.borderRight = this.gameWidth - this.width

        this.direction = 0;
        this.position = {
            "x": (this.gameWidth - this.width) / 2,
            "y": this.gameHeight - 60,
        }
    }

    updatePosition() {
        this.position.x += 4 * this.direction
    }

    updateDirection(direction){
        if (this.position.x >= this.borderLeft && direction === -1) {
            this.direction = -1
        } else if (this.position.x <= this.borderRight  && direction === 1) {
            this.direction = 1
        } else {
            this.direction = 0
        }
    }

    draw(){
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
