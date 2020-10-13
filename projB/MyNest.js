class MyNest extends CGFobject {
    constructor (scene,positionX,positionY,positionZ) {
        super(scene);

        this.treeBranch =[
            new MyTreeBranch(scene,0.0,positionX, positionY, positionZ),
            new MyTreeBranch(scene,0.3,positionX, positionY, positionZ),
            new MyTreeBranch(scene,0.6,positionX, positionY, positionZ),
            new MyTreeBranch(scene,0.9,positionX, positionY, positionZ),
            new MyTreeBranch(scene,1.2,positionX, positionY, positionZ),
            new MyTreeBranch(scene,1.5,positionX, positionY, positionZ),
            new MyTreeBranch(scene,1.8,positionX, positionY, positionZ),
            new MyTreeBranch(scene,2.1,positionX, positionY, positionZ),
            new MyTreeBranch(scene,2.4,positionX, positionY, positionZ),
            new MyTreeBranch(scene,2.7,positionX, positionY, positionZ),
            new MyTreeBranch(scene,3.0,positionX, positionY, positionZ),

            new MyTreeBranch(scene,0.0,positionX, positionY+0.09, positionZ+0.4),
            new MyTreeBranch(scene,0.0,positionX, positionY+0.09, positionZ-0.4),
            new MyTreeBranch(scene,0.6,positionX+0.25, positionY+0.09, positionZ+0.3),
            new MyTreeBranch(scene,0.6,positionX-0.25, positionY+0.09, positionZ-0.3),
            new MyTreeBranch(scene,1.2,positionX+0.4, positionY+0.09, positionZ+0.2),
            new MyTreeBranch(scene,1.2,positionX-0.4, positionY+0.09, positionZ-0.2),
            new MyTreeBranch(scene,1.8,positionX+0.4, positionY+0.09, positionZ),
            new MyTreeBranch(scene,1.8,positionX-0.4, positionY+0.09, positionZ),
            new MyTreeBranch(scene,2.4,positionX-0.25, positionY+0.09, positionZ+0.25),
            new MyTreeBranch(scene,2.4,positionX+0.25, positionY+0.09, positionZ-0.25),

            new MyTreeBranch(scene,0.3,positionX+0.1, positionY+0.18, positionZ+0.4),
            new MyTreeBranch(scene,0.3,positionX-0.1, positionY+0.18, positionZ-0.4),
            new MyTreeBranch(scene,0.9,positionX+0.3, positionY+0.18, positionZ+0.3),
            new MyTreeBranch(scene,0.9,positionX-0.3, positionY+0.18, positionZ-0.3),
            new MyTreeBranch(scene,1.5,positionX+0.4, positionY+0.18, positionZ+0.1),
            new MyTreeBranch(scene,1.5,positionX-0.4, positionY+0.18, positionZ-0.1),
            new MyTreeBranch(scene,2.1,positionX+0.3, positionY+0.18, positionZ-0.2),
            new MyTreeBranch(scene,2.1,positionX-0.3, positionY+0.18, positionZ+0.2),
            new MyTreeBranch(scene,2.7,positionX-0.2, positionY+0.18, positionZ+0.3),
            new MyTreeBranch(scene,2.7,positionX+0.2, positionY+0.18, positionZ-0.3)

        ];
        this.positionX = positionX;     //posicao em unid
        this.positionY = positionY;     //posicao em unid
        this.positionZ = positionZ;     //posicao em unid

    }

    display()
    {
        for(var i=0;i<this.treeBranch.length;i++){
            this.treeBranch[i].display();
        }
    }

    addTreeBranch(treeBranch){
        treeBranch.setY(this.positionY+0.27);
        treeBranch.setX(this.positionX);
        treeBranch.setZ(this.positionZ);
        this.treeBranch.push(treeBranch);        
    }

    getX(){
        return this.positionX;
    }
    getY(){
        return this.positionY;
    }
    getZ(){
        return this.positionZ;
    }
}


