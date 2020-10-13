/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.height = 1;
		this.radius = 0.6;

		this.color = new CGFappearance(scene);
        this.color.setAmbient(0.1, 0.1, 0.1, 1);
        this.color.setDiffuse(0.9, 0.9, 0.9, 1);
        this.color.setSpecular(0.1, 0.1, 0.1, 1);
        this.color.setShininess(10.0);
        this.color.loadTexture('images/branch.jpg');
		
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var ang = 0;
		var alphaAng = 2*Math.PI/4;	
		var sinc = 1/4;
	
		//Counter-clockwise reference of vertices


		//vertices inferiores
		for(var i = 0; i < 4; i++){
            this.vertices.push(this.radius * Math.cos(ang), 0, this.radius * -Math.sin(ang));
            this.texCoords.push(sinc * i, 1);
            this.indices.push(i, (i+1) % 4, i + 4);
            this.indices.push(i+ 4, (i+1) % 4, i);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            ang+=alphaAng;
        }


		//vertices superiores
        for(var i = 0; i < 4; i++){
            this.vertices.push(this.radius * Math.cos(ang), this.height, this.radius * -Math.sin(ang));
      		this.texCoords.push(sinc * i, 0);
            this.indices.push(i + 4, ((i+1) % 4) + 4,(i+1) % 4);
            this.indices.push((i+1) % 4, ((i+1) % 4) + 4, i + 4);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            ang+=alphaAng;
        }

		
                   
        

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	display(){

        this.color.apply();
        super.display();
	}
}
