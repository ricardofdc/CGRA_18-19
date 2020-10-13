/**
 * MyQuad2
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
class MyTriangle2 extends CGFobject {
	constructor(scene,coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
		
	}
	initBuffers() {
		this.vertices = [			
			0, 0, 0,				
			0, 0, 1,				
			1, 0, 0,				
			
			0, 0, 0,					
			0, 0, 1,										
			1, 0, 0						
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 5, 4
		];

		this.normals = [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0
		];

		this.texCoords=[
			0,0,
			0,1,
			1,0,
			0,0,
			1,0,
			0,1
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

