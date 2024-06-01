let theShader;

function preload() {
  // Load the shader
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  // Send the frameCount to the shader
  shader(theShader);
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", frameCount * 0.01);

  // Render a rectangle that fills the screen
  rect(0, 0, width, height);
}
