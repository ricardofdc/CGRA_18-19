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
        this.appearance = null;
        this.textute = null;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Objects connected to MyInterface
        this.displayTerrain = true;
        this.displayHouse = true;
        this.displayCubeMap = true;
        this.displayBird = true;
        this.displayTreeBranch = true;
        this.displayNest = true;
        this.displayTrees = true;
        this.displayLightning = true;

        this.birdSpeedFactor = 1;
        this.birdScaleFactor = 1;
        this.scaleFactor = 1;

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.terrain = new MyTerrain(this);
        this.house = new MyHouse(this, 3, -6, 0, -6, Math.PI/4);
        this.cubeMap = new MyCubeMap(this);
        this.bird = new MyBird(this);
        this.birdIsPicking = false;
        this.treeBranch=[
                new MyTreeBranch(this,Math.PI/4,3,0,0),
                new MyTreeBranch(this,Math.PI/2,4,0,6),
                new MyTreeBranch(this,Math.PI/-4,-3,0,3),
                new MyTreeBranch(this,0,6,0,4),
                new MyTreeBranch(this,Math.PI/2,-1,0,-4),
                new MyTreeBranch(this,Math.PI/4,4,0,-7),
                new MyTreeBranch(this,Math.PI,-2,0,6),
                new MyTreeBranch(this,Math.PI/4,-5,0,1),
                new MyTreeBranch(this,0,1,0,8),
                new MyTreeBranch(this,Math.PI/2,8,0,-2)
        ];
        this.nest = new MyNest(this,-4.5,0,-2.5);
        this.lightning = new MyLightning(this,0,0,0);
        this.trees = [
            new MyLSPlant(this,-7,0,5),
            //new MyLSPlant(this,-7,0,4),
            //new MyLSPlant(this,-7,0,2),
            new MyLSPlant(this,-7,0,1),
            new MyLSPlant(this,-7,0,-2),
            new MyLSPlant(this,-8,0,3),
            //new MyLSPlant(this,-8,0,1),
            //new MyLSPlant(this,-8,0,8),
            //new MyLSPlant(this,-9,0,2),
            new MyLSPlant(this,-9,0,-1),
            //new MyLSPlant(this,-9,0,5),
            new MyLSPlant(this,-10,0,7),
            new MyLSPlant(this,-10,0,4),
            new MyLSPlant(this,-10,0,1)
            //new MyLSPlant(this,-10,0,-3),
            //new MyLSPlant(this,-11,0,5),
            //new MyLSPlant(this,-11,0,3),
            //new MyLSPlant(this,-11,0,-1)
            //
            //A cena ficava demasiado "pesada" com tantas arvores
            //
        ];   
        
        // set the scene update period 
		// (to invoke the update() method every 50ms or as close as possible to that )
		this.setUpdatePeriod(50);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
    var text="Keys pressed: ";
    var keysPressed=false;
    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
        text+=" W ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyS")) {
        text+=" S ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyA")) {
        text+=" A ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyD")) {
        text+=" D ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyR")) {
        text+=" R ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyP")) {
        text+=" P ";
        keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyL")) {
        text+=" L ";
        keysPressed=true;
    }
    if (keysPressed)
        console.log(text);
    }
    update(t){
        this.checkKeys();


        if(this.gui.isKeyPressed("KeyW")){
            this.bird.accelerate(this.birdSpeedFactor);
        }
        if(this.gui.isKeyPressed("KeyS")){
            this.bird.accelerate(-this.birdSpeedFactor);
        }
        if(this.gui.isKeyPressed("KeyA")){
            this.bird.turn(this.birdSpeedFactor);
        }
        if(this.gui.isKeyPressed("KeyD")){
            this.bird.turn(-this.birdSpeedFactor);
        }
        if(this.gui.isKeyPressed("KeyR")){
            this.bird.reset();
        }
        else if(this.gui.isKeyPressed("KeyP")){
            this.birdIsPicking = true;
        }
        else if(this.birdIsPicking){
            this.bird.update();
            this.birdIsPicking = this.bird.pick();
            
            if(this.bird.getTreeBranch().length == 0){
                for (var i=0; i<this.treeBranch.length; i++){         
                    if((Math.abs(this.bird.getX() - this.treeBranch[i].getX()) < 0.5 )
                    &&(Math.abs(this.bird.getY() - this.treeBranch[i].getY()) < 0.5 )
                    &&(Math.abs(this.bird.getZ() - this.treeBranch[i].getZ()) < 0.5))
                    {
                        this.temp_treeBranch = this.treeBranch.splice(i,1)
                        this.bird.addTreeBranch(this.temp_treeBranch[0]);
                        break;
                    }
                }
            }
            else{
                //coloca no ninho
                if((Math.abs(this.bird.getX() - this.nest.getX()) < 0.5 )
                &&(Math.abs(this.bird.getY() - this.nest.getY()) < 0.5 )
                &&(Math.abs(this.bird.getZ() - this.nest.getZ()) < 0.5))
                {
                    this.nest.addTreeBranch(this.bird.removeTreeBranch());
                }  
            }
        }
        else{
        this.bird.update();
        }
        if(this.gui.isKeyPressed("KeyL")){
            this.lightning.startAnimation(t);
        }
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

        if(this.displayTerrain){
            this.pushMatrix();
            this.terrain.display();
            this.popMatrix();
        }

        if(this.displayCubeMap){
            this.pushMatrix();
            this.cubeMap.display();
            this.popMatrix();
        }

        if(this.displayHouse){
            this.pushMatrix();
            this.house.display();
            this.popMatrix();
        }

        if(this.displayTreeBranch){
            for (var i=0; i<this.treeBranch.length ; i++)
            {
                this.pushMatrix();
                this.treeBranch[i].display();
                this.popMatrix();
            }
        }

        if(this.displayNest){
            this.pushMatrix();
            this.nest.display();
            this.popMatrix();
        }

        if(this.displayTrees){
            for(var i=0;i<this.trees.length;i++){
                this.pushMatrix();
                this.trees[i].display();
                this.popMatrix();
            }
        }

        if(this.displayBird){
            this.pushMatrix();
            this.bird.updateScale(this.birdScaleFactor);
            this.bird.display();
            this.popMatrix();
        }

        if(this.displayLightning){
            this.pushMatrix();
            this.rotate(Math.PI,1,0,0);
            this.translate(0,-18,0);
            this.lightning.update();
            this.lightning.display();
            this.popMatrix();
        }


        // ---- END Primitive drawing section
    }
}