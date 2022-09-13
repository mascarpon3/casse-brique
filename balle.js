export class Balle{
    constructor(ctx) {
        this.ctx = ctx;

        this.radius = 12

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
            "x": this.position.x + this.speed.x,
            "y": this.position.y + this.speed.y,
        }
    }

    updateSpeedAfterRaquetteCollision(ballRatioPositioning) {
        if (Math.abs(ballRatioPositioning) < 0.6){
            this.speed.x = ballRatioPositioning * 5
            this.speed.y = -this.speed.y
        }
    }

    updateSpeedAfterWallCollision() {
        if(this.position.x - this.radius < 0 || this.position.x + this.radius > this.ctx.canvas.clientWidth){
            this.speed.x = - this.speed.x
        }
        if(this.position.y - this.radius < 0 || this.position.y + this.radius > this.ctx.canvas.clientHeight){
            this.speed.y = - this.speed.y
        }
    }


    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();    
    }
}
