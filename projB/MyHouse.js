class MyHouse extends CGFobject {
    constructor (scene, sideSize, x, y, z, ang) {
        super(scene);

        this.sideSize = sideSize;
        this.x = x;
        this.y = y;
        this.z = z;
        this.ang = ang;

        //wall
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.loadTexture('images/wall.jpg');
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.walls = new MyUnitCubeQuad(scene, this.wallMaterial, this.wallMaterial, this.wallMaterial);
        this.walls.front.updateTexCoords([0,3,0,0,3,0,3,3]);
        this.walls.back.updateTexCoords([0,3,0,0,3,0,3,3]);
        this.walls.left.updateTexCoords([0,3,0,0,3,0,3,3]);
        this.walls.right.updateTexCoords([0,3,0,0,3,0,3,3]);
        this.walls.bottom.updateTexCoords([0,3,0,0,3,0,3,3]);
        this.walls.top.updateTexCoords([0,3,0,0,3,0,3,3]);

        //column
        this.columnMaterial = new CGFappearance(this.scene);
        this.columnMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.columnMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setShininess(10.0);
        this.columnMaterial.loadTexture('images/column2.jpg');
        this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.columns = new MyPrism(scene,0.93,0.08, 9);
        
        //roof
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.loadTexture('images/roof2.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roof = new MyPyramid(scene, 0.6, sideSize/2.8,4);

        //door
        this.doorMaterial = new CGFappearance(this.scene);
        this.doorMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.doorMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setShininess(10.0);
        this.doorMaterial.loadTexture('images/frontDoor.png');
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.door = new MyQuad(scene);

        }
    display(){
        
        //walls (unitCubeQuad)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.walls.display(); 
        this.scene.popMatrix();
       
       
        //roof (pyramid)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.scene.translate(0,0.9,0);
        this.scene.rotate(Math.PI/4, 0,1,0);
        this.roofMaterial.apply();
        this.roof.display();
        this.scene.popMatrix();
        

        //column1 (prism)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.columnMaterial.apply();
        this.scene.translate(0.6,0,-0.6);
        //this.scene.scale(0.1,0.9,0.1);
        this.columns.display();
        this.scene.popMatrix();
        

        //column2 (prism)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.scene.translate(0.6,0,0.6);
        //this.scene.scale(0.1,0.9,0.1);
        this.columns.display();
        this.scene.popMatrix();

         //column3 (prism)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.scene.translate(-0.6,0,-0.6);
        //this.scene.scale(0.1,0.9,0.1);
        this.columns.display();
        this.scene.popMatrix();

        //column4 (prism)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.scene.translate(-0.6,0,0.6);
        //this.scene.scale(0.1,0.9,0.1);
        this.columns.display();
        this.scene.popMatrix();

        //door (quad)
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(this.sideSize,this.sideSize,this.sideSize);
        this.doorMaterial.apply();
        this.scene.translate(-0.15,0,0.501);
        this.scene.scale(0.3,0.5,0.1);
        this.door.display();
      
    }
}


