// VIDEO
const EXPORTVIDEO = true; // set to `false` to not export
const FPS = 30;
let cnvsrecorder;
let isRecording = false;

const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
  ellipseMode(CENTER);
  frameRate(FPS);
}

function draw() {
  background(32);

  // DEMO pulsing circle
	let r = 40 + ( Math.cos( frameCount * 0.1 ) + 1 ) * 20;

  ellipse( SIZE * 0.5, SIZE * 0.5, r, r );

  if ( EXPORTVIDEO ) {
    if ( !isRecording ) {
      cnvsrecorder = new CanvasRecorder( FPS );
      cnvsrecorder.start();
			isRecording = true;
      console.log( "Recording..." );
    }
		// Example to end automatically after 361 frames to get a full loop
    if (frameCount > 361) {
      cnvsrecorder.stop( `${getName()}` );
      noLoop();
      console.log( "Done." );
    }
  }
}

function getName() {
  return `Sketch-${new Date().toISOString()}`;
}
