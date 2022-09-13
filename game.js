import {Raquette} from "./raquette.js"
import {Balle} from "./balle.js"

class Game {
    constructor(){
        this.ctx = document.getElementById('terrain').getContext('2d');

        this.width=this.ctx.canvas.scrollWidth;
        this.height=this.ctx.canvas.scrollHeight;

        this.raquette = new Raquette(this.ctx);
        this.balle = new Balle(this.ctx);

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

        this.raquette.draw()
        this.balle.draw()

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
