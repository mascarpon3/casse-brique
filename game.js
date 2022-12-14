import {Raquette} from "./objects/raquette.js"
import {Balle} from "./objects/balle.js"
import {BriqueWall} from "./objects/briques.js"


class Game {
    constructor(){
        this.ctx = document.getElementById('terrain').getContext('2d')

        this.width=this.ctx.canvas.scrollWidth
        this.height=this.ctx.canvas.scrollHeight
    }

    start = () => {
        this.alive = true
        this.raquette = new Raquette(this.ctx)
        this.balle = new Balle(this.ctx)
        this.briqueWall = new BriqueWall(this.ctx)

        this.refresh()
    }

    refresh = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)

        this.raquette.updateDirection()

        this.updatePositions()
        this.updateBalleSpeed()
        this.draw()

        if (this.balle.isAlive()) {
            setTimeout(this.refresh, 5)
        } else {
            this.start()
        }
    }

    updatePositions(){
        this.raquette.updatePosition()
        this.balle.updatePosition()
    }

    updateBalleSpeed(){
        this.balle.updateSpeedAfterWallCollision()
        this.balle.updateSpeedAfterRaquetteCollision(this.raquette)
        this.balle.updateSpeedAfterBriqueWallCollision(this.briqueWall)
    }

    draw(){
        this.raquette.draw()
        this.balle.draw()
        this.briqueWall.draw()
    }
}


const game = new Game
game.start()
