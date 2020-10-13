/**
 * MyLightningObject
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
class MyLightningObject extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		
		this.color = new CGFappearance(scene);
        this.color.setAmbient(0.9, 0.9, 0.9, 1);
        this.color.setDiffuse(0.9, 0.9, 0.9, 1);
        this.color.setSpecular(0.9, 0.9, 0.9, 1);
        this.color.setShininess(10.0);
        
		
	}
	initBuffers() {
		this.vertices = [				//		    1_______2
			0, 0, 0,					//0			|       |
			0, 1, 0,					//1			|       |
			1, 1, 0,					//2			|       |
			1, 0, 0,					//3		   0|_______|3
			0, 0, 0,					
			0, 1, 0,					
			1, 1, 0,					
			1, 0, 0						
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 2,
			0, 2, 1,
			4, 6, 7,
			4, 5, 6
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		this.texCoords=[
			0,1,
			0,0,
			1,0,
			1,1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	display(){
		this.scene.pushMatrix();
		this.color.apply();
		this.scene.scale(0.1,1,1);
		super.display();
		this.scene.popMatrix();
	}
}

