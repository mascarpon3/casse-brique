export class Bar {
    constructor(game_width, game_height){
        this.width = 120;
        this.height= 20; 

        this.game_width = game_width 
        this.game_height = game_height;
        this.borderLeft = 0;
        this.borderRight = this.game_width - this.width

        this.direction = 0;
        this.position = (this.game_width - this.width) / 2;
    }

    updatePosition(){
        this.position += 4 * this.direction
    }

    updateDirection(direction){
        if (this.position != this.borderLeft && direction === -1) {
            this.direction = -1
        } else if (this.position != this.borderRight  && direction === 1) {
            this.direction = 1
        } else {
            this.direction = 0
        }
    }

    draw(ctx){
        ctx.fillRect(this.position, this.game_height - 60, this.width, this.height)
    }
}
