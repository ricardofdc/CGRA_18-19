class MyHeadBird extends CGFobject {
    constructor (scene,size) {
        super(scene);

        this.head = new MySphere(scene,size,8);
        this.beak = new MyCone(scene,size*0.6,size*0.25,5);
        this.eye0 = new MyCylinder(scene, size*0.02, size*0.15,6);
        this.eye1 = new MyCylinder(scene, size*0.01, size*0.07,6);
        
        this.size = size;

        //olho branco
        this.whiteMaterial = new CGFappearance(this.scene);
        this.whiteMaterial.setAmbient(1, 1, 1, 1);
        this.whiteMaterial.setDiffuse(1, 1, 1, 1);
        this.whiteMaterial.setSpecular(1, 1, 1, 1);
        this.whiteMaterial.setShininess(10.0);
        this.whiteMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //olho preto
        this.blackMaterial = new CGFappearance(this.scene);
        this.blackMaterial.setAmbient(0, 0, 0, 1);
        this.blackMaterial.setDiffuse(0,0,0, 1);
        this.blackMaterial.setSpecular(102/255, 194/255, 255/255, 1);
        this.blackMaterial.setShininess(10.0);
        this.blackMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //cabeça salmao
        this.salmaoMaterial = new CGFappearance(this.scene);
        this.salmaoMaterial.setAmbient(255/255, 173/255, 51/255, 1);
        this.salmaoMaterial.setDiffuse(255/255, 173/255, 51/255, 1);
        this.salmaoMaterial.setSpecular(255/255, 173/255, 51/255, 1);
        this.salmaoMaterial.setShininess(10.0);
        this.salmaoMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //bico semi-preto
        this.blackishMaterial = new CGFappearance(this.scene);
        this.blackishMaterial.setAmbient(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setDiffuse(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setSpecular(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setShininess(10.0);
        this.blackishMaterial.setTextureWrap('REPEAT', 'REPEAT');
        }
    display(){
        
        

        //head (sphere)
        this.scene.pushMatrix();
        this.salmaoMaterial.apply();
        this.head.display();
        this.scene.popMatrix();
      
        //eye0 (2 cylinders, white and black)
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/3,0,1,0);
        this.scene.rotate(Math.PI/2.5,1,0,0);
        this.scene.translate(0,this.size*0.88,0);
        this.whiteMaterial.apply();
        this.eye0.display();
        this.scene.translate(0,this.size*0.02,0);
        this.blackMaterial.apply();
        this.eye1.display();
        this.scene.popMatrix();

        //eye0 (2 cylinders, white and black)
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/3,0,1,0);
        this.scene.rotate(-Math.PI/2.5,1,0,0);
        this.scene.translate(0,this.size*0.88,0);
        this.whiteMaterial.apply();
        this.eye0.display();
        this.scene.translate(0,this.size*0.02,0);
        this.blackMaterial.apply();
        this.eye1.display();
        this.scene.popMatrix();

        //beak (cone)
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/8,0,0,1);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.translate(0,this.size*0.88,0);
        this.blackishMaterial.apply();
        this.beak.display();
        this.scene.popMatrix()
        
      
    }
}


