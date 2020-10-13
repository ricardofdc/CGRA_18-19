class MyBird extends CGFobject {
    constructor (scene) {
        super(scene);

        this.orientation = Math.PI; //ang em torno de YY
        this.speed = 0;             //velocidade em unid/seg
        this.positionX = 0;         //posicao em unid
        this.positionY = 3;         //posicao em unid
        this.positionZ = 0;         //posicao em unid
        this.goingUp = true;
        this.wingAngle = 0;
        this.wingSpeed = 0;
        this.scale = 1;

        this.head = new MyHeadBird(scene,0.4,10);
        this.body = new MyCylinder(scene,1,0.4,7);
        this.leftWing = new MyLeftWingBird(scene);
        this.righWing = new MyRightWingBird(scene);
        this.leg = new MyCylinder(scene,0.5,0.05,4);

        //corpo (vermelho)
        this.redMaterial = new CGFappearance(this.scene);
        this.redMaterial.setAmbient(255/255, 117/255, 26/255, 1);
        this.redMaterial.setDiffuse(255/255, 117/255, 26/255, 1);
        this.redMaterial.setSpecular(255/255, 117/255, 26/255, 1);
        this.redMaterial.setShininess(10.0);
        this.redMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //tail (verde escuro)
        this.darkGreenMaterial = new CGFappearance(this.scene);
        this.darkGreenMaterial.setAmbient(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setDiffuse(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setSpecular(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setShininess(10.0);
        this.darkGreenMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //legs and feet (quase preto)
        this.blackishMaterial = new CGFappearance(this.scene);
        this.blackishMaterial.setAmbient(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setDiffuse(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setSpecular(0/255, 13/255, 26/255, 1);
        this.blackishMaterial.setShininess(10.0);
        this.blackishMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.tail = new MyUnitCubeQuad(scene,this.darkGreenMaterial,this.darkGreenMaterial,this.darkGreenMaterial);
        this.foot = new MyUnitCubeQuad(scene,this.blackishMaterial,this.blackishMaterial,this.blackishMaterial);
        
        this.positionYoffset = 0;
        this.pickDown = true;
        this.treeBranch = [];

    }
    display()
    {
        
        this.scene.translate(this.positionX,this.positionY,this.positionZ);
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.scale(this.scale,this.scale,this.scale);
      
        //head (myhead)
        this.scene.pushMatrix();
        this.scene.translate (-0.7,1.2,0);
        this.head.display();
        this.scene.popMatrix();

        //body (cylinder)
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2.5,0,0,1);
        this.scene.translate(0.7,-0.25,0);
        this.redMaterial.apply();
        this.body.display();
        this.scene.popMatrix();

        //tail (cube)
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/9,0,0,1);
        this.scene.scale(0.5,0.02,0.33);
        this.scene.rotate(-Math.PI/1.9,0,0,1);
        this.scene.translate(-25,-0.7,0);
        this.darkGreenMaterial.apply();
        this.tail.display();
        this.scene.popMatrix();

        //leg1 (cylinder)
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.15);
        this.blackishMaterial.apply();
        this.leg.display();
        this.scene.popMatrix();

        //leg2 (cylinder)
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.15);
        this.blackishMaterial.apply();
        this.leg.display();
        this.scene.popMatrix();

        //foot1 (quad)
        this.scene.pushMatrix();
        this.scene.translate(-0.05,0,0.075);
        this.scene.scale(0.2,0.03,0.15);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.foot.display();
        this.scene.popMatrix();

        //foot2 (quad)
        this.scene.pushMatrix();
        this.scene.translate(-0.05,0,-0.075);
        this.scene.scale(0.2,0.03,0.15);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.foot.display();
        this.scene.popMatrix();

        //left wing (mywing)
        this.scene.pushMatrix();
        this.scene.translate(-0.3,0.9,0.34);
        this.scene.rotate(-0.2,0,0,1);
        this.scene.rotate(this.wingAngle,1,0,0);
        this.leftWing.display();
        this.scene.popMatrix();

        //right wing (mywing)
        this.scene.pushMatrix();
        this.scene.translate(-0.3,0.9,-0.34);
        this.scene.rotate(-0.2,0,0,1);
        this.scene.rotate(-this.wingAngle,1,0,0);
        this.righWing.display();
        this.scene.popMatrix();

        //treeBranch
        if(this.treeBranch.length>0){
            this.scene.pushMatrix();
            this.scene.translate(-this.treeBranch[0].getX(), this.treeBranch[0].getY(), -this.treeBranch[0].getZ());
            this.treeBranch[0].display();
            this.scene.popMatrix();
        }

        
      
    }

    reset(){
        this.orientation = Math.PI;
        this.speed = 0;
        this.positionX = 0;
        this.positionY = 3;
        this.positionZ = 0;
        this.leftWing.resetAngle();
        this.righWing.resetAngle();
        this.wingAngle = 0;
        this.wingSpeed = 0;
        this.goingUp = true;
    }

    update(){

        //mover o passaro
        this.positionX += this.speed * 0.05 * -Math.cos(this.orientation);
        this.positionZ += this.speed * 0.05 * Math.sin(this.orientation);

        //mover as asas
        this.leftWing.updateAngle(this.goingUp,this.speed);
        this.righWing.updateAngle(this.goingUp,this.speed);

        if(Math.abs(this.wingAngle) <= 0.01 && this.goingUp == true){
            this.wingSpeed = this.speed;
            this.wingAngle = 0;
        }
        if(this.goingUp){
            if((this.wingAngle + Math.round((Math.abs(this.wingSpeed)+1))*0.02) <=1){
                this.wingAngle += Math.round((Math.abs(this.wingSpeed)+1))*0.02;
            }
        }
        else{
            if((this.wingAngle - Math.round((Math.abs(this.wingSpeed)+1))*0.02) >= -1){
                this.wingAngle -= Math.round((Math.abs(this.wingSpeed)+1))*0.02;
            }
        }


        //oscilar para cima e para baixo
        if(this.goingUp){
            this.positionY += 0.05;
            if(this.positionY >= (3.2 + this.positionYoffset)){
                this.goingUp = false;
            }
        }
        else{
            this.positionY -= 0.05;
            if(this.positionY <= (2.8 + this.positionYoffset)){
                this.goingUp = true;
            }
        }

        //para a ave nao sair do cubemap
        if(this.positionX < -34){this.positionX = -34;}
        if(this.positionX > 34){this.positionX = 34;}
        if(this.positionZ < -34){this.positionZ = -34;}
        if(this.positionZ > 34){this.positionZ = 34;}
    }

    turn(v){
            this.orientation += v/4;
    }
    accelerate(v){
            this.speed += v;
    }
    updateScale(v){
            this.scale = v;
    }
    pick(){

        if(this.pickDown){
            this.positionY -= 0.2; 
            this.positionYoffset -= 0.2;
            if(Math.abs(this.positionY) < 0.15){
                this.pickDown = false;
            }
        }
        else{
            this.positionY += 0.2;
            this.positionYoffset += 0.2;
            if(3-Math.abs(this.positionY) < 0.15){
                this.pickDown = true;
                return false;
            }
        }
        return true;            
    }
    addTreeBranch(treeBranch){
        treeBranch.setOrientacao(treeBranch.getOrientacao()+this.orientation);
        this.treeBranch.push(treeBranch);        
    }
    getTreeBranch(){
        return this.treeBranch;
    }
    removeTreeBranch(){
        this.treeBranch[0].setOrientacao(this.treeBranch[0].getOrientacao()+this.orientation);
        return this.treeBranch.pop();
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
}


