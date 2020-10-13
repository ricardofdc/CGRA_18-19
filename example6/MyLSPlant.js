/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene, bcolor, lcolor) {
        
        super(scene);
       this.bcolor = bcolor;
        this.lcolor = lcolor; 
        this.initGramar2();
    }
    

    // cria o lexico da gramática
    initGrammar(){
        //por causa das cores
    }

    initGramar2(){
        this.grammar = {
            "F": new MyBranch(this.scene, this.bcolor),
            "X": new MyLeaf(this.scene, this.lcolor)
        };
    }

 }