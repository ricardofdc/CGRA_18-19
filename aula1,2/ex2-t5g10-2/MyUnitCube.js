/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,  //0    1 ______ 2
			-0.5, 0.5, 0.5,	  //1     \      \    > face da 
			0.5, 0.5, 0.5,	  //2     \      \    >  frente
			0.5, -0.5, 0.5,	  //3    0\______\ 3 
			
			-0.5, -0.5, -0.5,    //4    5 ______ 6
			-0.5, 0.5, -0.5,     //5     \      \    > face de
			0.5, 0.5, -0.5,	     //6     \      \    >  tras
			0.5, -0.5, -0.5	 	//7    4\______\ 7 
					
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    // face frente
			0, 2, 1,
			0, 3, 2,
			// face direita
			3, 6, 2,
			3, 7, 6,
			
			// face tras
			4, 5, 7,
			5, 6, 7,
			//face esquerda
			4, 1, 5,
			4, 0, 1,
			//face baixo
			4, 3, 0,
			4, 7, 3,
			//face cima
			1, 2, 6,
			1, 6, 5 
			
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
