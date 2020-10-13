class MyTerrain extends CGFobject {
    constructor (scene) {
        super(scene);
        this.plane = new Plane (scene, 32);

        this.appearance = new CGFappearance(scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);

		this.terrainText = new CGFtexture(scene, "images/terrain.jpg");
		this.appearance.setTexture(this.terrainText);
		this.appearance.setTextureWrap('REPEAT', 'REPEAT');

		this.heightmapText = new CGFtexture(scene, "images/heightmap2.jpg");
		this.altimetryText = new CGFtexture(scene, "images/altimetry.png");

		this.terrainShader = new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ heightmap: 1 });
        this.terrainShader.setUniformsValues({ gradiente: 2 });

        }
    display(){

        this.appearance.apply();
        this.heightmapText.bind(1);
        this.altimetryText.bind(2);
        this.scene.setActiveShader(this.terrainShader);
        
        this.scene.pushMatrix();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.scene.translate(0,0,-2.78);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
      
    }
}


