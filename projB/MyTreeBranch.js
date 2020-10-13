class MyTreeBranch extends CGFobject {
    constructor (scene,orientacao,positionX,positionY,positionZ) {
        super(scene);

        this.treeBranch = new MyCylinder(scene, 1, 0.05, 4);
        this.orientacao = orientacao;   //ang em torno de YY
        this.positionX = positionX;     //posicao em unid
        this.positionY = positionY;     //posicao em unid
        this.positionZ = positionZ;     //posicao em unid

        //textura treeBranck
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.loadTexture('images/treeBranch2.jpeg');
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display()
    {

        
        this.scene.pushMatrix();
        this.scene.translate(this.positionX,this.positionY+0.03,this.positionZ);
        this.scene.rotate(this.orientacao,0,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.translate(0,-0.5,0);
        this.woodMaterial.apply();
        this.treeBranch.display();
        this.scene.popMatrix();
      
    }
    setX(x){
        this.positionX=x;
    }
    setY(y){
        this.positionY=y;
    }
    setZ(z){
        this.positionZ=z;
    }
    setOrientacao(o){
        this.orientacao=o;
    }
    getX(){
        return this.positionX;
    }
    getY(){
        return this.positionY;
    }
    getZ(){
        return this.positionZ;
    }
    getOrientacao(){
        return this.orientacao;
    }
}


