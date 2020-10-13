/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject  {
	constructor(scene) {
		super(scene);
		this.diamond = new MyDiamond(scene);
		this.triangle = new MyTriangle(scene);
		this.parallelogram = new MyParallelogram(scene);
		this.triangleSmall = new MyTriangleSmall(scene);
		this.triangleBig = new MyTriangleBig(scene);
	}
	display(){
		
		//save
		this.scene.pushMatrix();

		var trans = [1.0, 0.0, 0.0, 0.0,
					0.0, 1.0, 0.0, 0.0,
					0.0, 0.0, 1.0, 0.0,
					2.0, 2.0, 0.0, 1.0];

		this.scene.multMatrix(trans);

        // ---- BEGIN Primitive drawing section
		this.diamond.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(3,1,0);
		this.triangleSmall.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0,1,0);
		this.triangleBig.display();

		
		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-0.59,-0.4,0);
		this.scene.rotate(Math.PI/4,0,0,1);
		this.triangleBig.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-2,-2.75,0);
		this.triangleSmall.display();


		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-3,0,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.triangle.display();

		
		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-2,-1,0);
		this.scene.rotate(Math.PI/4,0,0,1);
		this.scene.rotate(Math.PI,0,1,0);
		this.parallelogram.display();

		this.scene.popMatrix();
		
	}
}
