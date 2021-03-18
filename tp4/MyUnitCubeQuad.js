import { CGFobject, CGFtexture } from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";


/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, T_top, T_front, T_right, T_back, T_left, T_bot) {
		super(scene);
		this.Tt_top = T_top;
		this.Tt_front = T_front;
		this.Tt_right = T_right;
		this.Tt_back = T_back;
		this.Tt_left = T_left;
		this.Tt_bot = T_bot;
		this.init();
	}

	init() {

		this.quad = new MyQuad(this.scene);
		this.texture_top = new CGFtexture(this.scene, this.Tt_top);
		this.texture_front = new CGFtexture(this.scene, this.Tt_front);
		this.texture_right = new CGFtexture(this.scene, this.Tt_right);
		this.texture_back = new CGFtexture(this.scene, this.Tt_back);
		this.texture_left = new CGFtexture(this.scene, this.Tt_left);
		this.texture_bot = new CGFtexture(this.scene, this.Tt_bot);


	}
	display() {

		//back
		this.scene.quadMaterial.setTexture(this.texture_back);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.quad.display();
		this.scene.popMatrix();

		//front
		this.scene.quadMaterial.setTexture(this.texture_front);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.translate(0, 0, 1);
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.quad.display();
		this.scene.popMatrix();

		//bottom
		this.scene.quadMaterial.setTexture(this.texture_bot);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, 0.5);
		this.scene.rotate(Math.PI / 2, 1, 0, 0); // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();

		//top
		this.scene.quadMaterial.setTexture(this.texture_top);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, 0.5);
		this.scene.rotate(3 * Math.PI / 2, 1, 0, 0); // rodar sobre o eixo x
		this.quad.display();
		this.scene.popMatrix();

		//right
		this.scene.quadMaterial.setTexture(this.texture_right);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, 0.5);
		this.scene.rotate(Math.PI / 2, 0, 1, 0); // rodar sobre o eixo x
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.quad.display();
		this.scene.popMatrix();

		//left
		this.scene.quadMaterial.setTexture(this.texture_left);
		this.scene.quadMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, 0.5);
		this.scene.rotate(3 * Math.PI / 2, 0, 1, 0); // rodar sobre o eixo x
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.quad.display();
		this.scene.popMatrix();
	}
}
