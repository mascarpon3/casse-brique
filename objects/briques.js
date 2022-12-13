export class BriqueWall {
    static borderOffSet = 40
    static bricGap = 10
    static nbBriquesPerLine = 5
    constructor(ctx){
        this.ctx = ctx
        this.briques = []
        this.initializeBriquesPositions(BriqueWall.nbBriquesPerLine)
    }

    initializeBriquesPositions(nbBriques){
        for (let numBrique = 0; numBrique < nbBriques; numBrique++ ){
            this.briques.push(new Brique(
                this.ctx, 
                BriqueWall.borderOffSet + numBrique * (Brique.getWidth(this.ctx) + BriqueWall.bricGap), 
                BriqueWall.borderOffSet
            ))
        }
    }

    draw() {
        this.briques.forEach(brique => brique.draw())
    }
}

class Brique {
    static getWidth(ctx){
        return (
            ( ctx.canvas.clientWidth - 2 * BriqueWall.borderOffSet ) / 
            BriqueWall.nbBriquesPerLine
            - BriqueWall.bricGap
        )       
    }
    static height = 30
    constructor(ctx, x, y){
        this.ctx = ctx
        this.width = Brique.getWidth(ctx)
        this.height = Brique.height
        this.position = {"x": x, "y": y}
    }

    draw(){
        this.ctx.fillStyle = '#814436'
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
