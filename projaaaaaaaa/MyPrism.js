/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPrism extends CGFobject {
	constructor(scene,slices) {
		super(scene);
		this.slices = slices;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var ang = 0;
		var alphaAng = 2*Math.PI/this.slices;	
		var sinc = 1/this.slices;	
		//Counter-clockwise reference of vertices


		
		for(var i = 0; i < this.slices; i++){
			
			//4 vertices para cada face
			var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

			this.vertices.push(ca,1,-sa);
			this.vertices.push(caa,1,-saa);
			this.vertices.push(ca,0,-sa);
			this.vertices.push(caa,0,-saa);

			this.texCoords.push(0,1);
			this.texCoords.push(1,1);
			this.texCoords.push(0,0);
			this.texCoords.push(1,0);
			
			// normal da face
			var normal = [Math.sin(ang+alphaAng/2.0), Math.cos(Math.PI/4.0), -Math.sin(ang-alphaAng/2.0)]

			// normalizacao
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push das normais

            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(4*i, 4*i+2, 4*i+1);
            this.indices.push(4*i+2, 4*i+3, 4*i+1);


            ang+=alphaAng;
        }

        
     
       
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
		
	}
	updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12
		this.initBuffers();
        this.initNormalVizBuffers();
	}
}
