/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCylinder extends CGFobject {
	constructor(scene, height, radius) {
		super(scene);
		this.height = height;
		this.radius = radius;
		
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var ang = 0;
		var alphaAng = 2*Math.PI/10;	
		var sinc = 1/10;
	
		//Counter-clockwise reference of vertices


		//vertices inferiores
		for(var i = 0; i < 10; i++){
            this.vertices.push(this.radius * Math.cos(ang), 0, this.radius * -Math.sin(ang));
            this.texCoords.push(sinc * i, 1);
            this.indices.push(i, (i+1) % 10, i + 10);
            this.indices.push(i+ 10, (i+1) % 10, i);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            ang+=alphaAng;
        }


		//vertices superiores
        for(var i = 0; i < 10; i++){
            this.vertices.push(this.radius * Math.cos(ang), this.height, this.radius * -Math.sin(ang));
      		this.texCoords.push(sinc * i, 0);
            this.indices.push(i + 10, ((i+1) % 10) + 10,(i+1) % 10);
            this.indices.push((i+1) % 10, ((i+1) % 10) + 10, i + 10);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            ang+=alphaAng;
        }


        
                   
        

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
