attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

uniform float normScale;

uniform float timeFactor;

void main() {

	vec2 offset = vec2(timeFactor / 200.0, timeFactor / 200.0) ;
    vec2 newATextureCoord  = aTextureCoord + offset;
    
    vec4 color = texture2D(uSampler2, newATextureCoord);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + vec3(0.0 ,0.0, (color.r) * .1) , 1.0);
    vTextureCoord = newATextureCoord;
}

