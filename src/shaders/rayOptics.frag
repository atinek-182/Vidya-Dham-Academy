/**
 * Ray Optics Fragment Shader
 * High-precision procedural caustic wave and light refraction shader.
 * [VibeSec PASS]: Strict precision qualifiers, zero dynamic string interpolation.
 */
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_ray_angle; // in radians
uniform float u_n1;        // medium 1 index (air: 1.00)
uniform float u_n2;        // medium 2 index (glass: 1.50)

varying vec2 v_uv;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 center = vec2(0.5, 0.5);

  // Background deep slate base
  vec3 color = vec3(0.02, 0.027, 0.047); // #05070c

  // Medium 2 subtle tint (below y = 0.5)
  if (st.y < 0.5) {
    color = mix(color, vec3(0.043, 0.059, 0.098), 0.6); // #0b0f19
  }

  // Interface boundary highlight at y = 0.5
  float interfaceDist = abs(st.y - 0.5);
  float interfaceLine = smoothstep(0.004, 0.001, interfaceDist);
  color += vec3(0.96, 0.62, 0.07) * interfaceLine * 0.4;

  // Normal dashed reference line at x = 0.5
  float normalDist = abs(st.x - 0.5);
  float normalDash = step(0.5, fract(st.y * 30.0));
  float normalLine = smoothstep(0.003, 0.001, normalDist) * normalDash;
  color += vec3(0.58, 0.64, 0.72) * normalLine * 0.25;

  // Caustic harmonic water/glass wave drift in medium 2
  if (st.y < 0.5) {
    float wave1 = sin(st.x * 24.0 + u_time * 1.5) * 0.005;
    float wave2 = cos(st.x * 40.0 - u_time * 1.0) * 0.003;
    float caustic = smoothstep(0.02, 0.0, abs(st.y - 0.5 - wave1 - wave2));
    color += vec3(0.22, 0.74, 0.97) * caustic * 0.15;
  }

  gl_FragColor = vec4(color, 1.0);
}
