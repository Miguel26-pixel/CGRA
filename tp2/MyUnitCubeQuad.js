import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";


/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init();
	}
	
	init() {
		
		this.quad = new MyQuad(this.scene);
	
	}
	display(){

        this.quad.display();
	
		this.scene.pushMatrix();
		this.scene.translate(0,0,1);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0) // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();
	
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0) // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
        this.scene.translate(0.5,0,0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0) // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();
	
		this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0) // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();
	}
}
