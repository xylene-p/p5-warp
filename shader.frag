precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vPos;

void main() {
  // Normalize coordinates to range from -1 to 1
  vec2 st = vPos / u_resolution * 2.0 - 1.0;

  // Simple wave effect based on time and position
  vec3 color = vec3(0.5 + 0.5 * sin(u_time + st.x), 
                    0.5 + 0.5 * sin(u_time + st.y),
                    0.5 + 0.5 * cos(u_time + st.x + st.y));
  
  gl_FragColor = vec4(color, 1.0);
}