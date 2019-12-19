const video = document.querySelector('video');

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

// Write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 400,
      height: 400,
    },
  });
  video.srcObject = stream;
  await video.play();

  // size the canvas to be the same size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faceDetector = new window.FaceDetector();
  const faces = await faceDetector.detect(video);
  console.log(faces.length);

  // Ask the browser when the next animation frame will take place, and tell it to run detect for us
  requestAnimationFrame(detect);
}

populateVideo().then(detect);
