import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.indices = [];
        this.normals = [];

        for (var i = 0; i < 4; i++)    this.normals.push(0, 0, 1);  //front
        for (var i = 0; i < 4; i++)    this.normals.push(0, 0, -1); //back

        for (var i = 0; i < 2; i++)    this.normals.push(0, -1, 0); //bottom_front
        for (var i = 0; i < 2; i++)    this.normals.push(0, 1, 0); //top_front

        for (var i = 0; i < 2; i++)    this.normals.push(0, -1, 0); //bottom_back
        for (var i = 0; i < 2; i++)    this.normals.push(0, 1, 0); //top_back

        for(let i = 0; i < 2; i++){
            this.normals.push(-1,0,0);
            this.normals.push(1,0,0);
            this.normals.push(1,0,0);
            this.normals.push(-1,0,0);
        }

        this.vertices = [
			-0.5, -0.5, 0.5,    //0
			0.5, -0.5, 0.5,	    //1
			0.5, 0.5, 0.5,	    //2
			-0.5, 0.5, 0.5,	    //3

            -0.5, -0.5, -0.5,   //4
			0.5, -0.5, -0.5,	//5
			0.5, 0.5, -0.5,	    //6
			-0.5, 0.5, -0.5,	//7

            -0.5, -0.5, 0.5,    //8
			0.5, -0.5, 0.5,	    //9
			0.5, 0.5, 0.5,	    //10
			-0.5, 0.5, 0.5,	    //11

            -0.5, -0.5, -0.5,   //12
			0.5, -0.5, -0.5,	//13
			0.5, 0.5, -0.5,	    //14
			-0.5, 0.5, -0.5,	//15

            -0.5, -0.5, 0.5,    //16
			0.5, -0.5, 0.5,	    //17
			0.5, 0.5, 0.5,	    //18
			-0.5, 0.5, 0.5,	    //19

            -0.5, -0.5, -0.5,   //20
			0.5, -0.5, -0.5,	//21
			0.5, 0.5, -0.5,	    //22
			-0.5, 0.5, -0.5	    //23

		];

        for (let i = 0; i < 8; i += 4){
            //front view
            this.indices.push(i, i+1, i+2);
            this.indices.push(i+2, i+3, i);

            //back view
            this.indices.push(i, i+2, i+1);
            this.indices.push(i+2, i, i+3);
        }

        for (let i = 0,j = 0; i < 2; i += 1,j-=2){
            //front view
            this.indices.push(i+1+j, i+5+j, i+6);
            this.indices.push(i+6, i+2, i+1+j);

            //back view
            this.indices.push(i+1+j, i+6, i+5+j);
            this.indices.push(i+6, i+1+j, i+2);
        }
        //front view
        this.indices.push(0,1,5);
        this.indices.push(5,4,0);

        //back view
        this.indices.push(0,5,1);
        this.indices.push(5,0,4);

        //front view
        this.indices.push(3, 2, 6);
        this.indices.push(6, 7, 3);

        //back view
        this.indices.push(3, 6, 2);
        this.indices.push(6, 3, 7);

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

