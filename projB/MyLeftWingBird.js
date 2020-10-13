class MyLeftWingBird extends CGFobject {
    constructor (scene,size) {
        super(scene);

        this.quad = new MyQuad2(scene);
        this.triangle = new MyTriangle2(scene);
       
        this.darkGreenMaterial = new CGFappearance(this.scene);
        this.darkGreenMaterial.setAmbient(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setDiffuse(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setSpecular(38/255, 77/255, 46/255, 1);
        this.darkGreenMaterial.setShininess(10.0);
        this.darkGreenMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.angle = 0;
        this.speed = 0;
        
        }
    display(){
        
        

        //quad
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.7,0.5,0);
        this.darkGreenMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        //triangle
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.rotate(this.angle,1,0,0);
        this.scene.scale(0.7,0,0.5);
        this.triangle.display();
        this.scene.popMatrix();
      
    }

    updateAngle(goingUp,speed){
        if(this.angle == 0 && goingUp == true){
            this.speed = speed;
        }
       if(goingUp){
            if((this.angle + Math.round((Math.abs(this.speed)+1))*0.04) <=1.5){
                this.angle += Math.round((Math.abs(this.speed)+1))*0.04;
            }
        }
        else{
            if((this.angle - Math.round((Math.abs(this.speed)+1))*0.04) >= -1.5){
                this.angle -= Math.round((Math.abs(this.speed)+1))*0.04;
            }
        }
        
        
    }

    resetAngle(){
        this.angle = 0;
    }
}


