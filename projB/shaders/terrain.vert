attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D heightmap;

varying vec2 vTextureCoord;
varying vec4 pos;

void main() {
	vec4 filter = texture2D(heightmap,aTextureCoord);
	vec3 offset=vec3(0,0,filter.b*7.5);
	
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1);

	vTextureCoord = aTextureCoord;
	pos = gl_Position;
}

