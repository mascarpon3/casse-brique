export class Raquette {
    constructor(ctx){
        this.ctx = ctx
        this.gameWidth = ctx.canvas.clientWidth;
        this.gameHeight = ctx.canvas.clientHeight;

        this.width = 120;
        this.height= 10; 
        this.borderLeft = 0;
        this.borderRight = this.gameWidth - this.width

        this.direction = 0;
        this.arrow_direction = 0;
        this.position = {
            "x": (this.gameWidth - this.width) / 2,
            "y": this.gameHeight - 60,
        }
        this.listenArrows()
    }

    listenArrows = () => {
        window.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft"){
                this.arrow_direction = -1
            } else if (e.key === "ArrowRight") {
                this.arrow_direction = 1
            }
        })
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowLeft" || this.arrow_direction === -1) {
                this.arrow_direction = 0
            } else if (e.key === "ArrowRight" ||this.arrow_direction === 1) {
                this.arrow_direction = 0
            }
        })
    }

    updatePosition() {
        this.position.x += 4 * this.direction
    }

    updateDirection(){
        if (this.position.x >= this.borderLeft && this.arrow_direction === -1) {
            this.direction = -1
        } else if (this.position.x <= this.borderRight  && this.arrow_direction === 1) {
            this.direction = 1
        } else {
            this.direction = 0
        }
    }

    draw(){
        this.ctx.fillStyle = '#70880F'
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
