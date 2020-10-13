class MyTreeRowPatch extends CGFobject {
    constructor (scene, trunkTexture, treeTopTexture) {
        super(scene);
        this.tree = new MyTree(scene, 4, 1.5, 5, 3, trunkTexture, treeTopTexture);
        }
    display(){
        //Tree 1
        this.scene.pushMatrix();
        this.scene.translate(0,0,0);
        this.scene.scale(1.2, 1.4, 1.2);
        this.tree.display();

        this.scene.popMatrix();

        //Tree 2
        this.scene.pushMatrix();
        this.scene.translate(10,0,2);
        this.scene.scale(1.2, 1.4, 1.2);
        this.tree.display();
        
        this.scene.popMatrix();
        
        //Tree 3
        this.scene.pushMatrix();
        this.scene.translate(20,0,4);
        this.scene.scale(0.7, 1, 0.7 );
        this.tree.display();

        this.scene.popMatrix();
        
        //Tree 4
        this.scene.pushMatrix();
        this.scene.translate(30,0,1);
        this.scene.scale(1.2, 1.5, 1.2 );
        this.tree.display();

        this.scene.popMatrix();
        
        //Tree 5
        this.scene.pushMatrix();
        this.scene.translate(40,0,-1);
        this.scene.scale(1.5, 2, 1.5 );
        this.tree.display();

        this.scene.popMatrix();
        
        //Tree 6
        this.scene.pushMatrix();
        this.scene.translate(50,0,0);
        this.scene.scale(1, 1.5, 1 );
        this.tree.display();
    }
    
    
}


