precision highp float;varying vec2 uv;uniform sampler2D G;uniform sampler2D R;uniform sampler2D B;uniform sampler2D L;uniform sampler2D E;uniform float s;uniform float F;uniform vec2 k;float a(vec2 b,vec2 c){float d=10.0;vec2 e=b-c;return pow(abs(pow(abs(e.x),d)+pow(abs(e.y),d)),1.0/d);}void main(){vec2 f=uv+k;vec2 g=(f/0.98)-0.01;float h=a(f,vec2(0.5));float i=smoothstep(0.45,0.51,h);g=mix(g,vec2(0.5),0.2*(0.6-h)-0.02*h);vec3 j=texture2D(G,g).rgb;gl_FragColor=step(0.0,f.x)*step(f.x,1.0)*step(0.0,f.y)*step(f.y,1.0)*vec4((vec3(0.03+0.1*F,0.04,0.05)+mix(vec3(0.05,0.1,0.15)-j,2.0*j,s)+s*(texture2D(L,g).rgb+vec3(0.3+F,0.6,1.0)*(texture2D(R,g).rgb+3.0*texture2D(B,g).rgb)+0.5*texture2D(E,g).rgb))*mix(1.0,smoothstep(1.0,0.0,i),0.6),1.0);}