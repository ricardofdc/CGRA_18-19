class MyVoxelHill extends CGFobject {
    constructor (scene, levels, sideMaterial, bottomMaterial, topMaterial) {
        super(scene);
        this.levels = levels;
        this.quad = new MyUnitCubeQuad(this.scene, sideMaterial, bottomMaterial, topMaterial)
        }
    display(){
         
        for(var k =this.levels; k > 0; k--)
        { 
        var basenum = k + k - 1;

            for(var i = 0; i < basenum; i++){
            
            this.scene.pushMatrix();
            this.scene.translate(i,0,0);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0,0,i);
            this.quad.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
            this.scene.translate(basenum-1,0,i);
            this.quad.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
            this.scene.translate(i,0,basenum-1);
            this.quad.display();
            this.scene.popMatrix();
            }
            this.scene.translate(1,1,1);
    }
}
}