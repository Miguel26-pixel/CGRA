import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init();
	}
	
	init() {
		
		this.diamond = new MyDiamond(this.scene);
		this.triangle = new MyTriangle(this.scene);
		this.parallelogram = new MyParallelogram(this.scene);
		this.trianglesmall = new MyTriangleSmall(this.scene);
		this.trianglebig = new MyTriangleBig(this.scene);
	
	}
	display(){

		var trans = [
			1.0,
			0.0,
			0.0,
			0.0,
			0.0,
			1.0,
			0.0,
			0.0,
			0.0,
			0.0,
			1.0,
			0.0,
			1.0,  //tx
			4.0,  //ty
			0.0,  //tz
			1.0,  
			 
		]
	  
	
		this.scene.pushMatrix();
		this.scene.multMatrix(trans);
		this.diamond.display();
		this.scene.popMatrix();
		
	
		this.scene.trianglebig.display();
	
		var trans1 = [
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		1.0,  //tx
		3.0,  //ty
		0.0,  //tz
		1.0,  
			
		]
		var rot = [
		Math.cos(Math.PI), //rodar 45 graus
		Math.sin(Math.PI), //rodar 45 graus 
		0.0,
		0.0,
		-Math.sin(Math.PI),
		Math.cos(Math.PI),
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		]
	
		this.scene.pushMatrix();
		this.scene.multMatrix(trans1);
		this.scene.multMatrix(rot);
		this.trianglebig.display();
		this.scene.popMatrix();
	
		var trans2 = [
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		-Math.sqrt(8)/2,  //tx
		0.0,  //ty
		0.0,  //tz
		1.0,  
			
		]
	
		this.scene.pushMatrix();
		this.scene.multMatrix(trans2);
		this.scene.multMatrix(rot);
		this.triangle.display();
		this.scene.popMatrix();
	
	
		var trans3 = [
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		-3.5,  //tx
		0.0,  //ty
		0.0,  //tz
		1.0,  
			
		]
	
		this.scene.pushMatrix();
		this.scene.multMatrix(trans3);
		this.trianglesmall.display();
		this.scene.popMatrix();
	
	
		var trans4 = [
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		3.5,  //tx
		-1.0,  //ty
		0.0,  //tz
		1.0,  
			
		]
	
		this.scene.pushMatrix();
		this.scene.multMatrix(trans4);
		this.scene.multMatrix(rot);
		this.trianglesmall.display();
		this.scene.popMatrix();
	
	
		var trans4 = [
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		0.0,
		0.0,  //tx
		-1.0, //ty
		0.0,  //tz
		1.0,  
			
		]
	
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 1, 0, 0) // rodar sobre o eixo x
		this.parallelogram.display();
		this.scene.popMatrix();

	}
}

