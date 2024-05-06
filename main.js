difference = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(640,480);
    video.position(10,150);

    canvas = createCanvas(640, 480);
    canvas.position(800,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function preload(){

}

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function draw(){
    background("#808080");
    textSize(difference);
    fill("lime");
    text("AKSHAT",200,250)
}

function gotPoses(results) 
{
        if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.y;
            console.log("left wrist x: "+ leftWristX + "right wrist x: "+rightWristX);
            difference = floor(leftWristX - rightWristX);
        }

}