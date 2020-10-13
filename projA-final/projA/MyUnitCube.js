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

			-0.5, -0.5, 0.5,  //8    9 ______ 10
			-0.5, 0.5, 0.5,	  //9     \      \    > face da 
			0.5, 0.5, 0.5,	  //10     \      \    >  frente
			0.5, -0.5, 0.5,	  //11    8\______\ 11 
			
			-0.5, -0.5, -0.5,    //12   13 ______ 14
			-0.5, 0.5, -0.5,     //13     \      \    > face de
			0.5, 0.5, -0.5,	     //14     \      \    >  tras
			0.5, -0.5, -0.5	 	//15    12\______\ 15 




					
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    // face frente
			1, 2, 0,
			2, 3, 0,
			// face direita
			2, 6, 3,
			6, 7, 3,
			
			// face tras
			7, 5, 4,
			7, 6, 5,
			//face esquerda
			5, 1, 4,
			1, 0, 4,
			//face baixo
			0, 3, 4,
			3, 7, 4,
			//face cima
			6, 2, 1,
			5, 6, 1 
			
		];

		this.texCoords = [
			0, 1,
			0, 0,
			1, 0,
			1, 1,
			
			0, 1,
			0, 0,
			1, 0,
			1, 1
		];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
