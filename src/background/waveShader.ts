/**
 * WebGL GLSL Shaders for PS3 XMB Dynamic Wave Background
 * Enhanced from creative_coding-xmb_wave_background to provide authentic
 * multi-layer ribbon blending, smooth color gradients, and real-time theme control.
 */

export const vertexShaderSource = `
attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
`;

export const fragmentShaderSource = `
precision highp float;

uniform float uTime;
uniform vec2  uResolution;
uniform vec3  uBgTop;
uniform vec3  uBgBottom;
uniform vec3  uWaveColor;
uniform float uSpeedMult;
uniform float uAmpMult;
uniform float uSharpnessMult;

const float waveWidthFactor = 1.6;

vec3 calcSine(
  vec2 uv,
  float speed,
  float frequency,
  float amplitude,
  float phaseShift,
  float verticalOffset,
  vec3 ribbonColor,
  float lineWidth,
  float sharpness,
  bool invertFalloff
) {
  // Wave angle with speed and frequency modulation
  float angle = uTime * (speed * uSpeedMult) * frequency * -1.0 + (phaseShift + uv.x) * 2.1;
  float waveY = sin(angle) * (amplitude * uAmpMult) + verticalOffset;
  float deltaY = waveY - uv.y;
  float distanceVal = distance(waveY, uv.y);

  // Asymmetric falloff for silky directional ribbon feel
  if (invertFalloff) {
    if (deltaY > 0.0) {
      distanceVal *= 4.0;
    }
  } else {
    if (deltaY < 0.0) {
      distanceVal *= 4.0;
    }
  }

  float smoothVal = smoothstep(lineWidth * waveWidthFactor, 0.0, distanceVal);
  float scaleVal = pow(smoothVal, sharpness * uSharpnessMult);

  return min(ribbonColor * scaleVal, ribbonColor);
}

void main() {
  // Normalized UV coordinates [0.0, 1.0]
  vec2 uv = gl_FragCoord.xy / uResolution.xy;

  // Rich vertical background gradient
  vec3 bgGradient = mix(uBgBottom, uBgTop, uv.y);

  // Add subtle radial vignette to background
  vec2 center = uv - vec2(0.5, 0.5);
  float distFromCenter = length(center);
  bgGradient *= (1.0 - distFromCenter * 0.35);

  // Accumulate wave layers
  vec3 waveAccum = vec3(0.0);

  // Layer 1: Broad slow flowing wave
  waveAccum += calcSine(uv, 0.18, 0.19, 0.22, 0.0, 0.48, uWaveColor * 0.45, 0.12, 14.0, false);
  
  // Layer 2: Medium speed upper wave
  waveAccum += calcSine(uv, 0.36, 0.38, 0.16, 0.8, 0.52, uWaveColor * 0.55, 0.10, 16.0, false);

  // Layer 3: High frequency sharp crest
  waveAccum += calcSine(uv, 0.28, 0.58, 0.14, 1.6, 0.49, uWaveColor * 0.65, 0.06, 22.0, false);

  // Layer 4: Lower inverted ribbons (creates PS3 double-undulation ribbon cross)
  waveAccum += calcSine(uv, 0.12, 0.25, 0.08, 2.4, 0.34, uWaveColor * 0.40, 0.11, 16.0, true);
  waveAccum += calcSine(uv, 0.28, 0.35, 0.08, 3.2, 0.33, uWaveColor * 0.50, 0.10, 16.0, true);
  waveAccum += calcSine(uv, 0.46, 0.45, 0.07, 4.0, 0.35, uWaveColor * 0.55, 0.06, 21.0, true);
  waveAccum += calcSine(uv, 0.22, 0.56, 0.06, 4.8, 0.32, uWaveColor * 0.45, 0.18, 14.0, true);

  // Extra silky crest ribbon for PS3 signature shimmer
  waveAccum += calcSine(uv, 0.32, 0.72, 0.09, 1.2, 0.42, uWaveColor * 0.70, 0.04, 26.0, false);

  // Composite waves over background with luminous screen blend
  vec3 finalColor = bgGradient + waveAccum;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
