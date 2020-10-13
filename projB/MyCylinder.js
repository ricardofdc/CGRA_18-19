/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCylinder extends CGFobject {
	constructor(scene, height, radius, slices) {
		super(scene);
		this.height = height;
		this.radius = radius;
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
			var sa=Math.sin(ang) * this.radius;
            var saa=Math.sin(ang+alphaAng) * this.radius;
            var ca=Math.cos(ang) * this.radius;
            var caa=Math.cos(ang+alphaAng) * this.radius;

			this.vertices.push(ca,this.height,-sa);
			this.vertices.push(caa,this.height,-saa);
			this.vertices.push(ca,0,-sa);
			this.vertices.push(caa,0,-saa);

			this.texCoords.push(0,1);
			this.texCoords.push(1,1);
			this.texCoords.push(0,0);
			this.texCoords.push(1,0);
			
			// normal da face
			var normal1 = [ca, 0, -sa];
			var normal2 = [caa, 0, -saa]

			// normalizacao
            var nsize1=Math.sqrt(
                normal1[0]*normal1[0]+
                normal1[1]*normal1[1]+
                normal1[2]*normal1[2]
                );
            normal1[0]/=nsize1;
            normal1[1]/=nsize1;
            normal1[2]/=nsize1;

            var nsize2=Math.sqrt(
                normal2[0]*normal2[0]+
                normal2[1]*normal2[1]+
                normal2[2]*normal2[2]
                );
            normal2[0]/=nsize2;
            normal2[1]/=nsize2;
            normal2[2]/=nsize2;

            // push das normais

            this.normals.push(...normal1);
            this.normals.push(...normal2);
            this.normals.push(...normal1);
            this.normals.push(...normal2);

            this.indices.push(4*i, 4*i+2, 4*i+1);
            this.indices.push(4*i+2, 4*i+3, 4*i+1);


            ang+=alphaAng;
        }

        //face topo
        for (var i = 0; i < this.slices; i++){

			//3 vertices para cada triangulo da face
			var sa=Math.sin(ang) * this.radius;
            var saa=Math.sin(ang+alphaAng) * this.radius;
            var ca=Math.cos(ang) * this.radius;
            var caa=Math.cos(ang+alphaAng) * this.radius;
			
			this.vertices.push(0,this.height,0);
			this.vertices.push(ca,this.height,-sa);
			this.vertices.push(caa,this.height,-saa);
			
			this.texCoords.push(0.5, 0);
            this.texCoords.push(0, 1);
            this.texCoords.push(1, 1);
			
			// normal da face
			var normal = [0,1,0];
	
            // push das normais
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
    

            this.indices.push(4*this.slices+3*i, 4*this.slices+3*i+1, 4*this.slices+3*i+2);
           
            ang+=alphaAng;
        }


        //face baixo
        for (var i = 0; i < this.slices; i++){

			//3 vertices para cada triangulo da face
			var sa=Math.sin(ang) * this.radius;
            var saa=Math.sin(ang+alphaAng) * this.radius;
            var ca=Math.cos(ang) * this.radius;
            var caa=Math.cos(ang+alphaAng) * this.radius;
			
			this.vertices.push(0,0,0);
			this.vertices.push(ca,0,-sa);
			this.vertices.push(caa,0,-saa);
			
			this.texCoords.push(0.5, 0);
            this.texCoords.push(0, 1);
            this.texCoords.push(1, 1);
			
			
			// normal da face
			var normal = [0,-1,0];
	
            // push das normais
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
    

            this.indices.push(7*this.slices+3*i, 7*this.slices+3*i+2, 7*this.slices+3*i+1);
           
            ang+=alphaAng;
        }
        

        

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
