import {CGFobject,CGFappearance} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig1 } from "./MyTriangleBig1.js";
import { MyTriangleBig2 } from "./MyTriangleBig2.js";
import { MyTriangleSmall1 } from "./MyTriangleSmall1.js";
import { MyTriangleSmall2 } from "./MyTriangleSmall2.js";

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
		this.trianglesmall1 = new MyTriangleSmall1(this.scene);
		this.trianglesmall2 = new MyTriangleSmall2(this.scene);
		this.trianglebig1 = new MyTriangleBig1(this.scene);
		this.trianglebig2 = new MyTriangleBig2(this.scene);
		this.objects = [this.diamond, this.triangle, this.parallelogram, this.trianglesmall, this.trianglebig];

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

		this.scene.faceTangram.apply();
		this.scene.pushMatrix();
		this.scene.multMatrix(trans);
		this.diamond.display();
		this.scene.popMatrix();

		this.trianglebig1.display();
	
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
		this.trianglebig2.display();
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
		this.trianglesmall1.display();
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
		this.trianglesmall2.display();
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
	enableNormalViz(){
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.trianglebig1.enableNormalViz();
		this.trianglebig2.enableNormalViz();
		this.trianglesmall1.enableNormalViz();
		this.trianglesmall2.enableNormalViz();
		this.diamond.enableNormalViz();
	}
	disableNormalViz(){
		this.triangle.disableNormalViz();
		this.parallelogram.disableNormalViz();
		this.trianglebig1.disableNormalViz();
		this.trianglebig2.disableNormalViz();
		this.trianglesmall1.disableNormalViz();
		this.trianglesmall2.disableNormalViz();
		this.diamond.disableNormalViz();
	}
}

