/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene,x,y,z) {
        super(scene,x,y,z);

        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX1 = "F[-X][X]F[-X]+X";
        this.ruleX2 = "F[-X][X]+X";
        this.ruleX3 = "F[+X]-X";
        this.ruleX4 = "F[/X][X]F[\\X]+X";   
        this.ruleX5 = "F[\X][X]/X";
        this.ruleX6 = "F[/X]\X";
        this.ruleX7 = "F[^X][X]F[&X]^X";
        this.ruleX8 = "F[^X]&X";
        this.ruleX9 = "F[&X]^X";
        this.angle = 30.0;
        this.iterations = 4;
        this.treesScaleFactor = 0.6;
        
        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX1, this.ruleX2, this.ruleX3, this.ruleX4, this.ruleX5, this.ruleX6, this.ruleX7, this.ruleX8, this.ruleX9]
                },
                this.angle,
                this.iterations,
                this.treesScaleFactor
            );
            
        }

        // do initial generation of trees
        this.doGenerate();
    }

    initGrammar(){
		this.grammar = {
			"F": new MyBranch(this.scene),
			"X": new MyLeaf(this.scene)
		};
	};
 }