class MyTree extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
        super(scene);
        this.cylinder = new MyCylinder(scene, trunkHeight, trunkRadius);
        this.cone = new MyCone(scene, 15, 1, treeTopHeight, treeTopRadius);
        this.trunkHeight = trunkHeight;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.initBuffers();
    }
    display(){
        this.scene.pushMatrix();
        this.trunkTexture.apply();
        this.cylinder.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0,this.trunkHeight,0);
        this.treeTopTexture.apply();
        this.cone.display();

        this.scene.popMatrix();

    }
    
    
}


