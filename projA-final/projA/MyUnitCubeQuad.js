/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, sideMaterial, bottomMaterial, topMaterial) {
		super(scene);
		this.initBuffers();
		this.sideMaterial = sideMaterial;
		this.bottomMaterial = bottomMaterial;
		this.topMaterial = bottomMaterial;
		this.front = new MyQuad(scene);
		this.back = new MyQuad(scene);
		this.top = new MyQuad(scene);
		this.bottom = new MyQuad(scene);
		this.right = new MyQuad(scene);
		this.left = new MyQuad(scene);


	}
	display() {
		this.scene.translate(0,0,1);
		this.scene.pushMatrix();
		this.sideMaterial.apply();
		this.front.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,1);
		this.sideMaterial.apply();
		this.right.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(-1,0,1);
		this.sideMaterial.apply();
		this.back.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(-1,0,0);
		this.sideMaterial.apply();
		this.left.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.translate(0,-1,0);
		this.bottomMaterial.apply();
		this.bottom.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.translate(0,0,1);
		this.topMaterial.apply();
		this.top.display();

		this.scene.popMatrix();
		

	}
}
