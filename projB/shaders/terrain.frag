#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D heightmap;
uniform sampler2D gradiente;

varying vec4 pos;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(heightmap,vTextureCoord);
	vec4 gradienteColor = texture2D(gradiente, vec2(0.0,(-filter.b+0.15)*1.15));

	color=vec4(color.r * gradienteColor.r, color.g * gradienteColor.g, color.b * gradienteColor.b, 1.0);
	
	gl_FragColor = color;
}

