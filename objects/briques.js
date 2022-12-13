export class BriqueWall {
    constructor(ctx){
        this.ctx = ctx
        this.briques = []
        this.initializeBriquesPositions(1)
    }

    initializeBriquesPositions(nbBriques){
        for (let numBrique = 0; numBrique < nbBriques; numBrique++ ){
            this.briques.push(new Brique(this.ctx, 40, 40))
        }
    }

    draw() {
        this.briques.forEach(brique => brique.draw())
    }
}

class Brique {
    constructor(ctx, x, y){
        this.ctx = ctx
        this.position = {"x": x, "y": y}
        this.width = 90
        this.height = 40
    }

    draw(){
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
