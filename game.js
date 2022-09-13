import {Raquette} from "./raquette.js"

class Game {
    constructor(){
        this.canvas = document.getElementById('terrain');
        this.ctx = this.canvas.getContext('2d'); 
        this.width=this.canvas.scrollWidth;
        this.height=this.canvas.scrollHeight;

        this.raquette = new Raquette(this.width, this.height);
        this.direction = 0
    }

    start = () => {
        this.listenArrows()
        this.update()
    }

    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.raquette.updateDirection(this.direction)
        this.raquette.updatePosition()
        this.raquette.draw(this.ctx)
        setTimeout(this.update, 10)
    }

    listenArrows = () => {
        window.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft"){
                this.direction = -1
            } else if (e.key === "ArrowRight") {
                this.direction = 1
            }
        })
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowLeft" || this.direction === -1) {
                this.direction = 0
            } else if (e.key === "ArrowRight" ||this.direction === 1) {
                this.direction = 0
            }
        })
    }
}

const game = new Game
game.start()
