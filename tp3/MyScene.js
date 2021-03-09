import { CGFscene, CGFcamera, CGFaxis, CGFappearance } from "../lib/CGF.js";
import { MyPyramid } from "./MyPyramid.js";
import { MyCone } from "./MyCone.js";
import { MyPlane } from "./MyPlane.js";
import { MyUnitCube } from "./MyUnitCube.js";
import { MyTangram } from "./MyTangram.js";

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.initMaterials();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyPlane(this, 5);
        this.cone = new MyCone(this, 3, 1);
        this.pyramid = new MyPyramid(this, 3, 1);
        this.tangram = new MyTangram(this);
        this.unitcube = new MyUnitCube(this);
        
        this.objects = [this.plane, this.pyramid, this.cone, this.unitcube, this.tangram];

        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Plane': 0 , 'Pyramid': 1, 'Cone': 2, 'UnitCube': 3, 'Tangram': 4};

        //Other variables connected to MyInterface
        this.selectedObject = 0;
        this.selectedMaterial = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.objectComplexity = 0.5;
        this.scaleFactor = 2.0;
        this.amb_light = 0.3;

    }
    initLights() {
  
        this.lights[0].setPosition(2.0, 2.0, -1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(10, 10, 10), vec3.fromValues(0, 0, 0));
    }

    hexToRgbA(hex)
    {
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
    }

    updateCustomMaterial() {
        this.customMaterial.setAmbient(...this.hexToRgbA(this.customMaterialValues['Ambient']));
        this.customMaterial.setDiffuse(...this.hexToRgbA(this.customMaterialValues['Diffuse']));
        this.customMaterial.setSpecular(...this.hexToRgbA(this.customMaterialValues['Specular']));

        this.customMaterial.setShininess(this.customMaterialValues['Shininess']);

    }

    updateWoodMaterial() {
        this.woodmaterial.setAmbient(...this.hexToRgbA(this.WoodMaterialValues['Ambient']));
        this.woodmaterial.setDiffuse(...this.hexToRgbA(this.WoodMaterialValues['Diffuse']));
        this.woodmaterial.setSpecular(...this.hexToRgbA(this.WoodMaterialValues['Specular']));

        this.woodmaterial.setShininess(this.WoodMaterialValues['Shininess']);

    }

    updateGreen() {
        this.green.setAmbient(...this.hexToRgbA(this.GreenValues['Ambient']));
        this.green.setDiffuse(...this.hexToRgbA(this.GreenValues['Diffuse']));
        this.green.setSpecular(...this.hexToRgbA(this.GreenValues['Specular']));

        this.green.setShininess(this.GreenValues['Shininess']);

    }


    updateOrange() {
        this.orange.setAmbient(...this.hexToRgbA(this.OrangeValues['Ambient']));
        this.orange.setDiffuse(...this.hexToRgbA(this.OrangeValues['Diffuse']));
        this.orange.setSpecular(...this.hexToRgbA(this.OrangeValues['Specular']));

        this.orange.setShininess(this.OrangeValues['Shininess']);

    }


    updateBlue() {
        this.blue.setAmbient(...this.hexToRgbA(this.BlueValues['Ambient']));
        this.blue.setDiffuse(...this.hexToRgbA(this.BlueValues['Diffuse']));
        this.blue.setSpecular(...this.hexToRgbA(this.BlueValues['Specular']));

        this.blue.setShininess(this.BlueValues['Shininess']);

    }


    updateRed() {
        this.red.setAmbient(...this.hexToRgbA(this.RedValues['Ambient']));
        this.red.setDiffuse(...this.hexToRgbA(this.RedValues['Diffuse']));
        this.red.setSpecular(...this.hexToRgbA(this.RedValues['Specular']));

        this.red.setShininess(this.RedValues['Shininess']);

    }


    updatePink() {
        this.pink.setAmbient(...this.hexToRgbA(this.PinkValues['Ambient']));
        this.pink.setDiffuse(...this.hexToRgbA(this.PinkValues['Diffuse']));
        this.pink.setSpecular(...this.hexToRgbA(this.PinkValues['Specular']));

        this.pink.setShininess(this.PinkValues['Shininess']);

    }


    updateYellow() {
        this.yellow.setAmbient(...this.hexToRgbA(this.YellowValues['Ambient']));
        this.yellow.setDiffuse(...this.hexToRgbA(this.YellowValues['Diffuse']));
        this.yellow.setSpecular(...this.hexToRgbA(this.YellowValues['Specular']));

        this.yellow.setShininess(this.YellowValues['Shininess']);

    }


    updatePurple() {
        this.purple.setAmbient(...this.hexToRgbA(this.PurpleValues['Ambient']));
        this.purple.setDiffuse(...this.hexToRgbA(this.PurpleValues['Diffuse']));
        this.purple.setSpecular(...this.hexToRgbA(this.PurpleValues['Specular']));

        this.purple.setShininess(this.PurpleValues['Shininess']);

    }


    updateObjectComplexity(){
        this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
    }


    initMaterials() {
        // Red Ambient (no diffuse, no specular)
        this.material1 = new CGFappearance(this);
        this.material1.setAmbient(1, 0, 0, 1.0);
        this.material1.setDiffuse(0, 0, 0, 1.0);
        this.material1.setSpecular(0, 0, 0, 1.0);
        this.material1.setShininess(10.0);

        // Red Diffuse (no ambient, no specular)
        this.material2 = new CGFappearance(this);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(1, 0, 0, 1.0);
        this.material2.setSpecular(0, 0, 0, 1.0);
        this.material2.setShininess(10.0);

        // Red Specular (no ambient, no diffuse)
        this.material3 = new CGFappearance(this);
        this.material3.setAmbient(0, 0, 0, 1.0);
        this.material3.setDiffuse(0, 0, 0, 1.0);
        this.material3.setSpecular(1, 0, 0, 1.0);
        this.material3.setShininess(10.0);

        this.woodmaterial = new CGFappearance(this);

        this.WoodMaterialValues = {
            'Ambient': '#8b4513',
            'Diffuse': '#000000',
            'Specular': '#8b4513',
            'Shininess': 1
        }

        this.updateWoodMaterial();


        //green material
        this.green = new CGFappearance(this);

        this.GreenValues = {
            'Ambient': '#39ff14',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updateGreen();


        //orange material
        this.orange = new CGFappearance(this);

        this.OrangeValues = {
            'Ambient': '#ff6700',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updateOrange();


        //blue material
        this.blue = new CGFappearance(this);

        this.BlueValues = {
            'Ambient': '#15f4ee',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updateBlue();


        //red material
        this.red = new CGFappearance(this);

        this.RedValues = {
            'Ambient': '#ff1818',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updateRed();

        //pink material
        this.pink = new CGFappearance(this);

        this.PinkValues = {
            'Ambient': '#ff69b4',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updatePink();

        //yellow material
        this.yellow = new CGFappearance(this);

        this.YellowValues = {
            'Ambient': '#faed27',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updateYellow();


        //purple material
        this.purple = new CGFappearance(this);

        this.PurpleValues = {
            'Ambient': '#bc13fe',
            'Diffuse': '#000000',
            'Specular': '#ffffff',
            'Shininess': 10
        }

        this.updatePurple();


        // Custom material (can be changed in the interface)
        // initially midrange values on ambient, diffuse and specular, on R, G and B respectively

        this.customMaterialValues = {
            'Ambient': '#0000ff',
            'Diffuse': '#ff0000',
            'Specular': '#000000',
            'Shininess': 10
        }
        this.customMaterial = new CGFappearance(this);

        this.updateCustomMaterial();

        this.materials = [this.material1, this.material2, this.material3, this.woodmaterial, this.customMaterial];

        // Labels and ID's for object selection on MyInterface
        this.materialIDs = {'Red Ambient': 0, 'Red Diffuse': 1, 'Red Specular': 2, 'Wood': 3, 'Custom': 4 };
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        this.lights[0].update();
        this.lights[1].update();
        this.setGlobalAmbientLight(this.amb_light, this.amb_light, this.amb_light, 1.0);
        

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // ---- BEGIN Primitive drawing section

        this.materials[this.selectedMaterial].apply();

        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);

        //this.tangram.display();
        
        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else
            this.objects[this.selectedObject].disableNormalViz();
        
        this.objects[this.selectedObject].display();
        
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}