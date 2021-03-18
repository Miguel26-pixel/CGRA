import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.normals = [];

		this.vertices = [
			-Math.sqrt(8)/2, 0, 0,	//0
			Math.sqrt(8)/2, 0, 0,	//1
			0, Math.sqrt(8)/2, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
		];

		for (var i = 0; i < 3; i++)    this.normals.push(0, 0, 1);  //front

		this.texCoords = [
			0, 0.5,
			0, 1.0,
			0.5, 1.0,
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

