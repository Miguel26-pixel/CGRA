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
		this.vertices = [
			-0.5, -0.5, 0.5,	//0
			-0.5, -0.5, -0.5,	//1
			0.5, -0.5, 0.5,	    //2
			0.5, -0.5, -0.5,	//3

            0.5, 0.5, 0.5,	    //4
			0.5, 0.5, -0.5,	    //5
			-0.5, 0.5, 0.5,	    //6
			-0.5, 0.5, -0.5	    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //bottom
			0, 1, 3,
			3, 2, 0,                
            0, 3, 1,
            3, 0, 2,

            //top
            4, 5, 7,
			7, 6, 4,                
            4, 7, 5,
            7, 4, 6,

            //right
            4, 5, 2,
            2, 3, 5,
            4, 2, 5,
            2, 5, 3,

            //left
            0, 1, 6,
            6, 7, 1,
            0, 6, 1,
            6, 1, 7,

            //back
            1, 3, 5,
            5, 7, 1,
            1, 5, 3,
            7, 5, 1,

            //front
            0, 2, 4,
            4, 6, 0,
            0, 4, 2,
            6, 4, 0
            
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

