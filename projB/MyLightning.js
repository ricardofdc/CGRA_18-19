/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene,x,y,z) {
        super(scene,x,y,z);

        
        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX1, this.ruleX2, this.ruleX3, this.ruleX4, this.ruleX5, this.ruleX6, this.ruleX7, this.ruleX8, this.ruleX9]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
            
        }

		this.x=x;
		this.y=y;
		this.z=z;
        this.depth = 0;
        this.date = new Date();
        this.startTime = 0;
    }
    

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
			"F": new MyLightningObject(this.scene),
			"X": new MyLightningObject(this.scene)
		};
    }

    update(){
    	this.date = new Date();
    	this.time = this.date.getTime();
    	if(this.time - this.startTime <= 1000){
    		this.depth=Math.round((this.time-this.startTime)*this.axiom.length/1000);
    	}
    	if(this.time - this.startTime > 1000){
    		this.depth=0;
    	}

    }

    startAnimation(t){
		this.depth = 1;
		this.date = new Date();
		this.startTime = this.date.getTime();
		this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX1 = "F[-X][X]F[-X]+FX";
        this.ruleX2 = "F[-X][X]+F[-X]+F[+X]-FX";
        this.ruleX3 = "F[+X][X]-F[-X]/F[+X]\FX";
        this.ruleX4 = "F[/X][X]F[\\X]+F[+X]-FX";   
        this.ruleX5 = "F[\X][X]/F[-X]+F[+X]\FX";
        this.ruleX6 = "F[/X][X]\F[-X]+F[+X]/FX";
        this.ruleX7 = "F[^X][X]F[&X]^F[&X]-FX";
        this.ruleX8 = "F[^X][X]&F[-X]+F[+X]-FX";
        this.ruleX9 = "F[&X][X]^F[-X]+F[^X]-FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
		this.doGenerate();
		//this.iterate();  //iterate ja é chamado dentro do doGenerate()
		
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;
                
                case "\\":
                    // rotação em sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    // rotação em sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    // rotação em sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;
                
                case "&":
                    // rotação em sentido negativo sobre o eixo dos YY
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;
                    
                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }

   

 }