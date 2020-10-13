/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySphere extends CGFobject {
	constructor(scene, radius, slices) {
		super(scene);
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
		var ang2 = -Math.PI/2;
		var alphaAng2 = 2*Math.PI/this.slices;
		var sinc = 1/this.slices;
	
		//Counter-clockwise reference of vertices

       for(var i = 0; i <= this.slices *2; i++){

            var sb=Math.sin(ang2)*this.radius;
			var sbb=Math.sin(ang2+alphaAng2)*this.radius;
			var cb=Math.cos(ang2);
			var cbb=Math.cos(ang2+alphaAng2);

			

            for(var j = 0; j < this.slices; j++){

				var sa=Math.sin(ang)*this.radius;
				var saa=Math.sin(ang+alphaAng)*this.radius;
				var ca=Math.cos(ang)*this.radius;
				var caa=Math.cos(ang+alphaAng)*this.radius;

				this.vertices.push(ca*cbb, sbb, -sa*cbb);
				this.vertices.push(caa*cbb, sbb, -saa*cbb);
				this.vertices.push(ca*cb, sb, -sa*cb);
				this.vertices.push(caa*cb, sb, -saa*cb);

				this.texCoords.push(0,0);
				this.texCoords.push(1,0);
				this.texCoords.push(0,1);
				this.texCoords.push(1,1);

				var normal1 = [ca*cbb, sbb, -sa*cbb];
				var normal2 = [caa*cbb, sbb, -saa*cbb];
				var normal3 = [ca*cb, sb, -sa*cb];
				var normal4 = [caa*cb, sb, -saa*cb];

				var nsize1=Math.sqrt(normal1[0]*normal1[0]+normal1[1]*normal1[1]+normal1[2]*normal1[2]);
				normal1[0]/=nsize1;
				normal1[1]/=nsize1;
				normal1[2]/=nsize1;

				var nsize2=Math.sqrt(normal2[0]*normal2[0]+normal2[1]*normal2[1]+normal2[2]*normal2[2]);
				normal2[0]/=nsize2;
				normal2[1]/=nsize2;
				normal2[2]/=nsize2;

				var nsize3=Math.sqrt(normal3[0]*normal3[0]+normal3[1]*normal3[1]+normal3[2]*normal3[2]);
				normal3[0]/=nsize3;
				normal3[1]/=nsize3;
				normal3[2]/=nsize3;

				var nsize4=Math.sqrt(normal4[0]*normal4[0]+normal4[1]*normal4[1]+normal4[2]*normal4[2]);
				normal4[0]/=nsize4;
				normal4[1]/=nsize4;
				normal4[2]/=nsize4;

				this.normals.push(...normal1);
				this.normals.push(...normal2);
				this.normals.push(...normal3);
				this.normals.push(...normal4);

				this.indices.push(i*this.slices+4*j, i*this.slices+4*j+2, i*this.slices+4*j+1);
            	this.indices.push(i*this.slices+4*j+2, i*this.slices+4*j+3, i*this.slices+4*j+1);

				ang+=alphaAng;

            }
            ang2+=alphaAng2;
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

	}
}