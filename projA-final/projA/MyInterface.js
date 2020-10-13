/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;
        this.gui.add(this.scene, 'objectComplexity', 0.01, 1.0).onChange(this.scene.updateObjectComplexity.bind(this.scene));
        this.gui.add(this.scene, 'displayPrism').name("Display prism");
        this.gui.add(this.scene, 'displayCylinder').name("Display cylin");
        this.gui.add(this.scene, 'displayTreeGroupPatch').name("Display tree group patch");
        this.gui.add(this.scene, 'displayTreeRowPatch').name("Display tree row patch");
        this.gui.add(this.scene, 'displayHouse').name("Display house");
        this.gui.add(this.scene, 'displayVoxelHill').name("Display voxel hill");
        this.gui.add(this.scene, 'displayUnitCubeQuad').name("Display cube");
        this.gui.add(this.scene, 'displayTree').name("Display tree");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        return true;
    }
}