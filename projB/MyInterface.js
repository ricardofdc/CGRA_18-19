/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }


    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui=this;
        // disable the processKeyboard function
        this.processKeyboard=function(){};
        // create a named array to store which keys are being pressed
        this.activeKeys={};
    }
    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    }
    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    }
    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }


    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene, 'displayTerrain').name("Display Terrain");
        this.gui.add(this.scene, 'displayHouse').name("Display House");
        this.gui.add(this.scene, 'displayCubeMap').name("Display CubeMap");
        this.gui.add(this.scene, 'displayBird').name("Display Bird");
        this.gui.add(this.scene, 'displayTreeBranch').name("Display Tree Branch");
        this.gui.add(this.scene, 'displayNest').name("Display Nest");
        this.gui.add(this.scene, 'displayTrees').name("Display Trees");
        this.gui.add(this.scene, 'displayLightning').name("Display Lightning");
        this.gui.add(this.scene, 'birdSpeedFactor', 0.1, 3.0).name('Bird Speed');
        this.gui.add(this.scene, 'birdScaleFactor', 0.1, 3.0).name('Bird Scale');
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        this.initKeys();

        return true;
    }
}