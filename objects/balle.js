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
