attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
	
	
	float h=normalize(dot(texture2D(uSampler2, vTextureCoord).rgb, vec3(0.299, 0.587, 0.114)));
	vec3 offset=vec3(0.0,0.0,h);
	//if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
		//offset=aVertexNormal*h

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

	vTextureCoord = aTextureCoord;
}

