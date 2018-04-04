let recorder = document.getElementById('uploader');
let player = document.getElementById('player');

recorder.addEventListener('change', function (e) {
  let file = e.target.files[0];
  // Do something with the video file.
  player.src = URL.createObjectURL(file);
});
