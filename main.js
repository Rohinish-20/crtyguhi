leftWrist_x = 0;
rightWrist_x = 0;

difference = 0;
function setup()
{
 video = createCapture(VIDEO);
 video.size(500, 500);

 canvas = createCanvas(500, 500);
 canvas.position(700, 70);

 posenet = ml5.poseNet(video, modelLoaded);
 posenet.on("pose", gotPoses);
}

function modelLoaded()
{
 console.log("Model is loaded");
}

function gotPoses(results)
{
 if(results.length > 0)
 {
  console.log(results);

  leftWrist_x = results[0].pose.leftWrist.x;
  rightWrist_x = results[0].pose.rightWrist.x;
  console.log("Left wrist x = "+ leftWrist_x +"Right wrist x = "+ rightWrist_x);

  difference = floor(leftWrist_x - rightWrist_x);
 }
}

function draw()
{
 background("cyan");
 textSize(difference);
 fill("red");
 text("Rohinish", 30, 200);

 document.getElementById("font_size").innerHTML = "Font size of the text will be "+ difference;
}