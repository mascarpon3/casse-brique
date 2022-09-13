export class Balle{
    constructor(ctx) {
        this.ctx = ctx;

        this.position = {
            "x": 2 * ctx.canvas.clientHeight / 3,
            "y": ctx.canvas.clientWidth / 2,
        }
        this.radius = 12
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.position.y, this.position.x, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();    
    }
}
