



/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene, bk, dn, ft, lf, rt, up){

		super(scene);
		this.initBuffers();
		
		this.front = new MyQuad(scene);
		this.back = new MyQuad(scene);
		this.top = new MyQuad(scene);
		this.bottom = new MyQuad(scene);
		this.right = new MyQuad(scene);
		this.left = new MyQuad(scene);

		this.bk = bk;
		this.dn = dn;
		this.ft = ft;
		this.lf = lf;
		this.rt = up;
		this.up = up;

		this.initBuffers();
		this.bk.apply();
	}
	display() {
		this.scene.translate(0,0,1);
		this.scene.pushMatrix();
		this.ft.apply();
		this.front.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,1);
		this.rt.apply();
		this.right.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(-1,0,1);
		this.bk.apply();
		this.back.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(-1,0,0);
		this.lf.apply();
		this.left.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.translate(0,-1,0);
		this.dn.apply();
		this.bottom.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.translate(0,0,1);
		this.up.apply();
		this.top.display();

		this.scene.popMatrix();
		

	}
}