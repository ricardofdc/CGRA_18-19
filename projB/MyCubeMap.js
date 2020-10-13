/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene){

		super(scene);
		this.initBuffers();
		
		this.front = new MyQuad(scene);
		this.back = new MyQuad(scene);
		this.top = new MyQuad(scene);
		this.bottom = new MyQuad(scene);
		this.right = new MyQuad(scene);
		this.left = new MyQuad(scene);

		//Parte traseira do CubeMap
        this.cubeMapBackMaterial = new CGFappearance(this.scene);
        this.cubeMapBackMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapBackMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapBackMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapBackMaterial.setShininess(10.0);
        this.cubeMapBackMaterial.loadTexture('images/skybox2/ThickCloudsWaterBack.jpg');
        this.cubeMapBackMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //Parte inferior do CubeMap
        this.cubeMapBottomMaterial = new CGFappearance(this.scene);
        this.cubeMapBottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapBottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapBottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapBottomMaterial.setShininess(10.0);
        this.cubeMapBottomMaterial.loadTexture('images/skybox2/ThickCloudsWaterDown.jpg');
        this.cubeMapBottomMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Parte da frente do CubeMap
        this.cubeMapFrontMaterial = new CGFappearance(this.scene);
        this.cubeMapFrontMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapFrontMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapFrontMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapFrontMaterial.setShininess(10.0);
        this.cubeMapFrontMaterial.loadTexture('images/skybox2/ThickCloudsWaterFront.jpg');
        this.cubeMapFrontMaterial.setTextureWrap('REPEAT', 'REPEAT');


        //Lado esquerdo do CubeMap
        this.cubeMapLeftMaterial = new CGFappearance(this.scene);
        this.cubeMapLeftMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapLeftMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapLeftMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapLeftMaterial.setShininess(10.0);
        this.cubeMapLeftMaterial.loadTexture('images/skybox2/ThickCloudsWaterLeft.jpg');
        this.cubeMapLeftMaterial.setTextureWrap('REPEAT', 'REPEAT');
        

        //lado direito do CubeMap
        this.cubeMapRightMaterial = new CGFappearance(this.scene);
        this.cubeMapRightMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapRightMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapRightMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapRightMaterial.setShininess(10.0);
        this.cubeMapRightMaterial.loadTexture('images/skybox2/ThickCloudsWaterRight.jpg');
        this.cubeMapRightMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Parte superior do CubeMap
        this.cubeMapTopMaterial = new CGFappearance(this.scene);
        this.cubeMapTopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapTopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapTopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapTopMaterial.setShininess(10.0);
        this.cubeMapTopMaterial.loadTexture('images/skybox2/ThickCloudsWaterUp.jpg');
        this.cubeMapTopMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.initBuffers();
	}
	display() {

		this.scalefactor = 70;
		this.scene.scale(this.scalefactor,this.scalefactor,this.scalefactor);
		this.scene.translate(0,-0.45,0);

		this.scene.pushMatrix();
		this.scene.translate(-0.5,0,-0.5);
		this.cubeMapBackMaterial.apply();
		this.front.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(-0.5,0,-0.5);
		this.cubeMapLeftMaterial.apply();
		this.left.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(-0.5,0,-0.5);
		this.cubeMapFrontMaterial.apply();
		this.back.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(-0.5,0,-0.5);
		this.cubeMapRightMaterial.apply();
		this.right.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.translate(-0.5,-0.5,-1);
		this.cubeMapTopMaterial.apply();
		this.top.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.translate(-0.5,-0.5,0);
		this.cubeMapBottomMaterial.apply();
		this.bottom.display();
		this.scene.popMatrix();
		

	}
}