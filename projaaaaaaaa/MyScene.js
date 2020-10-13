/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        
        //------ Textures

        //Parte traseira do CubeMap
        this.cubeMapBKMaterial = new CGFappearance(this);
        this.cubeMapBKMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapBKMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapBKMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapBKMaterial.setShininess(10.0);
        this.cubeMapBKMaterial.loadTexture('images/mp_overrated/highly-overrated_bk.tga');
        this.cubeMapBKMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //Parte inferior do CubeMap
        this.cubeMapDNMaterial = new CGFappearance(this);
        this.cubeMapDNMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapDNMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapDNMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapDNMaterial.setShininess(10.0);
        this.cubeMapDNMaterial.loadTexture('images/mp_overrated/highly-overrated_dn.tga');
        this.cubeMapDNMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Parte da frente do CubeMap
        this.cubeMapFTMaterial = new CGFappearance(this);
        this.cubeMapFTMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapFTMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapFTMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapFTMaterial.setShininess(10.0);
        this.cubeMapFTMaterial.loadTexture('images/mp_overrated/highly-overrated_ft.tga');
        this.cubeMapFTMaterial.setTextureWrap('REPEAT', 'REPEAT');


        //Lado esquerdo do CubeMap
        this.cubeMapLFMaterial = new CGFappearance(this);
        this.cubeMapLFMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapLFMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapLFMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapLFMaterial.setShininess(10.0);
        this.cubeMapLFMaterial.loadTexture('images/mp_overrated/highly-overrated_lf.tga');
        this.cubeMapLFMaterial.setTextureWrap('REPEAT', 'REPEAT');
        

        //lado direito do CubeMap
        this.cubeMapRTMaterial = new CGFappearance(this);
        this.cubeMapRTMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapRTMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapRTMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapRTMaterial.setShininess(10.0);
        this.cubeMapRTMaterial.loadTexture('images/mp_overrated/highly-overrated_rt.tga');
        this.cubeMapRTMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Parte superior do CubeMap
        this.cubeMapUPMaterial = new CGFappearance(this);
        this.cubeMapUPMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapUPMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapUPMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapUPMaterial.setShininess(10.0);
        this.cubeMapUPMaterial.loadTexture('images/mp_overrated/highly-overrated_up.tga');
        this.cubeMapUPMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.wallMaterial = new CGFappearance(this);
        this.wallMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.loadTexture('images/wallSide.jpg');
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.columnMaterial = new CGFappearance(this);
        this.columnMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.columnMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setShininess(10.0);
        this.columnMaterial.loadTexture('images/column.jpg');
        this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roofMaterial = new CGFappearance(this);
        this.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.loadTexture('images/roofTile.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.trunkMaterial = new CGFappearance(this);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture('images/wood.jpg');
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopMaterial = new CGFappearance(this);
        this.treeTopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeTopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeTopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeTopMaterial.setShininess(10.0);
        this.treeTopMaterial.loadTexture('images/treeTop.jpg');
        this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.doorMaterial = new CGFappearance(this);
        this.doorMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.doorMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setShininess(10.0);
        this.doorMaterial.loadTexture('images/door.jpg');
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');
      
        this.sideMaterial = new CGFappearance(this);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture('images/mineSide.png');
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomMaterial = new CGFappearance(this);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/mineBottom.png');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.topMaterial = new CGFappearance(this);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/mineTop.png');
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------


        //-------

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 3);

        this.cylinder = new MyCylinder(this);
        this.unitCube = new MyUnitCubeQuad(this, this.sideMaterial, this.bottomMaterial, this.topMaterial);
        this.cubeMap = new MyCubeMap(this, this.cubeMapBKMaterial, this.cubeMapDNMaterial,
                          this.cubeMapFTMaterial, this.cubeMapLFMaterial, this.cubeMapRTMaterial , this.cubeMapUPMaterial);
        this.tree = new MyTree(this,5,1.5,7,3,this.trunkMaterial,this.treeTopMaterial);
        this.treeGroupPatch = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial);
        this.treeRowPatch = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial);
        this.house = new MyHouse(this, this.wallMaterial, this.roofMaterial, this.columnMaterial, this.doorMaterial);
        
        this.voxelHill = new MyVoxelHill(this, 6, this.sideMaterial, this.bottomMaterial, this.topMaterial);



        //Objects connected to MyInterface
        this.objectComplexity = 0.5;
        this.displayPrism = false;
        this.displayCylinder = false;
        this.displayUnitCubeQuad = false;
        this.displayTree = true;
        this.scaleFactor = 0.1;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].enable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    updateObjectComplexity(){
        this.prism.updateBuffers(this.objectComplexity);
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup

        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        
        this.pushMatrix();
        
        
       	this.tree.display();
       

        // ---- END Primitive drawing section
    }
}
