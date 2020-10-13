class MyHouse extends CGFobject {
    constructor (scene, wallSide, roofTile, columnSwag, doorStyle) {
        super(scene);
        this.doorStyle = doorStyle;
        this.wallSide = wallSide;
        this.roofTile = roofTile;
        this.columnSwag = columnSwag;
        this.walls = new MyUnitCubeQuad(scene, this.wallSide, this.wallSide, this.wallSide);
        this.roof = new MyPyramid(scene, 4, 1);
        this.columns = new MyPrism(scene, 9);
        this.door = new MyQuad(scene);
        }
    display(){
        this.scene.scale(3,3,3);
       
       this.scene.pushMatrix();

       //casa em si
       this.walls.display(); 
       this.scene.popMatrix();
       this.scene.pushMatrix();
       

       //telhado
       this.scene.translate(0.5,0.75,0.5);
       this.scene.rotate(Math.PI/4, 0,1,0);
       this.roofTile.apply();
       this.roof.display();
       

       this.scene.popMatrix();
        



        //coluna 1
       this.scene.pushMatrix();
       this.columnSwag.apply();
       this.scene.translate(1.12,0,-0.1);
       this.scene.scale(0.1,0.75,0.1);
       this.columns.display();

    this.scene.popMatrix();
        

        //coluna 2
       this.scene.pushMatrix();
       this.scene.translate(1.1,0,1.1);
       this.scene.scale(0.1,0.75,0.1);
       this.columns.display();
        this.scene.popMatrix();

         //coluna 3
       this.scene.pushMatrix();
       this.scene.translate(-0.1,0,-0.1);
       this.scene.scale(0.1,0.75,0.1);
       this.columns.display();
        this.scene.popMatrix();

        //coluna 4
       this.scene.pushMatrix();
       this.scene.translate(-0.1,0,1.1);
       this.scene.scale(0.1,0.75,0.1);
       this.columns.display();
       this.scene.popMatrix();

       //porta
        
        this.scene.pushMatrix();
        this.doorStyle.apply();
       this.scene.translate(0.5,0,1.01);
       this.scene.scale(0.3,0.5,0.1);
       this.door.display();
        

       
        

       
      
        
      
    }
}


