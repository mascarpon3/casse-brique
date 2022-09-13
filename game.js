import {Raquette} from "./raquette.js"
import {Balle} from "./balle.js"

class Game {
    constructor(){
        this.ctx = document.getElementById('terrain').getContext('2d');

        this.width=this.ctx.canvas.scrollWidth;
        this.height=this.ctx.canvas.scrollHeight;

    }

    start = () => {
        this.alive = true
        this.raquette = new Raquette(this.ctx);
        this.balle = new Balle(this.ctx);
        this.direction = 0

        this.listenArrows()
        this.update()
    }

    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)

        this.raquette.updateDirection(this.direction)
        this.raquette.updatePosition()
        this.balle.updatePosition()
        this.detectCollision()
        this.alive = this.balle.updateSpeedAfterWallCollision()

        this.raquette.draw()
        this.balle.draw()
        if (this.alive) {
            setTimeout(this.update, 5)
        } else {
            this.start()
        }
    }

    detectCollision(){
        if (Math.abs(this.balle.position.y + this.balle.radius - this.raquette.position.y) < 2) {
            var ballRatioPositioning = (
                (this.balle.position.x - this.raquette.position.x - this.raquette.width / 2) /
                this.raquette.width
            )
            this.balle.updateSpeedAfterRaquetteCollision(ballRatioPositioning)
        }
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
