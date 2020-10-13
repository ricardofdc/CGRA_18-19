/**
 * MyQuad2
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
class MyQuad2 extends CGFobject {
	constructor(scene,coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
		
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

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

