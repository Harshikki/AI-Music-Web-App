song1 = "";
song2 = "";

song1Status = "";
song2Status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
	song1 = loadSound("music.mp3");
	song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(400, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
		
  }
}
function draw() {
	image(video, 0, 0,400, 400);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	fill("#FF0000");
	stroke("#FF0000");

}

function play()
{
	song1.play();
	song1.setVolume(1);
	song1.rate(1);
}

