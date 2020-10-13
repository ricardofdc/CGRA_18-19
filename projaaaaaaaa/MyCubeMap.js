/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene, bk, dn, ft, lf, rt, up) {
		super(scene);
		this.bk = bk;
		this.dn = dn;
		this.ft = ft;
		this.lf = lf;
		this.rt = rt;
		this.up = up;
		this.unitCube = new MyUnitCube(this.scene);

		this.initBuffers();
	}
	display() {	
		this.scene.pushMatrix();
		this.scene.popMatrix();
		this.unitCube.display();
		this.bk.apply();
	}
}
