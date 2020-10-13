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
			
			-0.5, -0.5, -0.5, //4    5 ______ 6
			-0.5, 0.5, -0.5,  //5     \      \    > face de
			0.5, 0.5, -0.5,	  //6     \      \    >  tras
			0.5, -0.5, -0.5,  //7    4\______\ 7 

			// face direita (3, 2, 6, 7)
			0.5, -0.5, 0.5,	  //8 
			0.5, 0.5, 0.5,	  //9
			0.5, 0.5, -0.5,	  //10
			0.5, -0.5, -0.5,  //11

			//face esquerda (0, 1, 4, 5)
			-0.5, -0.5, 0.5,  //12
			-0.5, 0.5, 0.5,	  //13   
			-0.5, -0.5, -0.5, //14
			-0.5, 0.5, -0.5,  //15   

			//face baixo (0, 3, 4, 7)
			-0.5, -0.5, 0.5,  //16
			0.5, -0.5, 0.5,	  //17
			-0.5, -0.5, -0.5, //18
			0.5, -0.5, -0.5,  //19 

			//face cima (1, 2, 5, 6)
			-0.5, 0.5, 0.5,	  //20 
			0.5, 0.5, 0.5,	  //21  
			-0.5, 0.5, -0.5,  //22    
			0.5, 0.5, -0.5 	  //23     
					
		];

		this.normals = [
			//face frente
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			//face tras
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, .1,
			//face direita
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			//face esquerda
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			//face baixo
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			//face cima
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    // face frente
			0, 2, 1,
			0, 3, 2,
			// face direita
			10, 9, 8,
			11, 10, 8,
			
			// face tras
			4, 5, 7,
			5, 6, 7,
			//face esquerda
			14, 13, 15,
			14, 12, 13,
			//face baixo
			18, 17, 16,
			18, 19, 17,
			//face cima
			20, 21, 23,
			20, 23, 22 
			
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
