/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.color = color;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, -1, 0,	//0
			-1, -1, 0,	//1
			-1, 1, 0,//2
			1, -1, 0,	//0
			-1, -1, 0,	//1
			-1, 1, 0//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			4, 5, 3
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.texCoords = [
			1,1,
			0,0,
			0,1,
			1,1,
			0,0,
			1,0
		];

		
        

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	display(){
		this.scene.pushMatrix();
		this.color.apply();
		this.scene.scale(1.5,1.5,1.5);
		super.display();
		this.scene.popMatrix();
	}
}

