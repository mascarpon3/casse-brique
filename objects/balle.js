export class Balle{
    constructor(ctx) {
        this.ctx = ctx;

        this.radius = 8

        this.position = {
            "x": Math.round(ctx.canvas.clientWidth * (1 / 2)),
            "y": Math.round(ctx.canvas.clientHeight * (2 / 3)),
        }

        this.speed = {
            "x": 0,
            "y": 1,
        }
    }

    updatePosition() {
        this.position = {
            "x": this.position.x + 3 * this.speed.x,
            "y": this.position.y + 3 * this.speed.y,
        }
    }

    updateSpeedAfterRaquetteCollision(raquette){
        if (Math.abs(this.position.y + this.radius - raquette.position.y) < 2) {
            var ballRatioPositioning = (
                (this.position.x - raquette.position.x - raquette.width / 2) /
                raquette.width
            )
            this.updateSpeedFromBallRatioPositioning(ballRatioPositioning)
        }
    }

    updateSpeedAfterBriqueWallCollision(briqueWall){
        for (var brique of briqueWall.briques) {
            var collition = this.updateSpeedAfterBriqueCollision(brique)
            if(collition) {
                break
            }
        }
    }

    updateSpeedAfterBriqueCollision(brique){
        const yCondition = (Math.min(this.position.y - brique.position.y,  brique.height ) < brique.height)
        const xLeftCondition = (Math.abs(this.position.x - brique.position.x) < 2)
        const xRightCondition = (Math.abs(this.position.x - brique.position.x - brique.width) < 2)
  
        const xCondition = (Math.min(this.position.x - brique.position.x, brique.width) < brique.width)
        const yTopCondition = (Math.abs(this.position.y - brique.position.y) < 2)
        const yBotomCondition = (Math.abs(this.position.y - brique.position.y - brique.height) < 2)

        if (yCondition & (xLeftCondition || xRightCondition)) {
            console.log("x", brique.position.x)
            this.speed.x = - this.speed.x
            return true
        }
        if (xCondition & (yTopCondition || yBotomCondition)) {
            console.log("y", brique.position.x)
            this.speed.y = - this.speed.y
            return true
        }
    }


    updateSpeedFromBallRatioPositioning(ballRatioPositioning) {
        if (Math.abs(ballRatioPositioning) < 0.6){
            this.speed.x = ballRatioPositioning * 2
            this.speed.y = -this.speed.y
            this.speed = normalizeSpeed(this.speed)
        }

    }

    updateSpeedAfterWallCollision() {
        if(this.position.x - this.radius < 0 || this.position.x + this.radius > this.ctx.canvas.clientWidth){
            this.speed.x = - this.speed.x
        }
        if(this.position.y - this.radius < 0 ){
            this.speed.y = - this.speed.y
        }
    }

    isAlive(){
        if (this.position.y + this.radius < this.ctx.canvas.clientHeight){
            return true
        } else {
            return false
        }
    }


    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '@DBE139';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();    
    }
}

const normalizeSpeed = (speed) => {
    const norm = Math.sqrt(speed.x ** 2+ speed.y ** 2)
    return {
        "x": speed.x / norm,
        "y": speed.y / norm,
    }
}
