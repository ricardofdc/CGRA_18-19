/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices, stacks, height, radius) {
        super(scene);
        this.radius = radius;
        this.height =height;
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            this.vertices.push(this.radius * Math.cos(ang), 0, this.radius * -Math.sin(ang));
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            this.texCoords.push(i/this.slices, 1);
            ang+=alphaAng;
        }
        

        this.vertices.push(0,this.height,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0,0);

        
        this.vertices.push(0,this.height,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0,1);


        this.vertices.push(this.radius, 0, 0);
        this.normals.push(1, Math.cos(Math.PI/4.0), 0);
        this.texCoords.push(1, 1);
        
       
       this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
       
    }
    
   
}


