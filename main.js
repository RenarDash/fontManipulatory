
noseX = "";
leftWristX = ""
rightWristX = "";
noseY = "";

function setup() {
    video = createCapture(VIDEO);
    video.size(600,600);
    video.position(100, 100);

    canvas = createCanvas(550, 500);
    canvas.position(800, 200);

    poseNet = ml5.poseNet(video, ModeLoaded);
}

function ModeLoaded() {
    console.log("model loaded succesfully");
    poseNet.on("pose", gotPoses);
}

function gotPoses(r) {
    if (r.length > 0) {
        console.log(r);
        noseX = r[0].pose.nose.x;
        noseY = r[0].pose.nose.y;
        leftWristX = r[0].pose.leftWrist.x;
        rightWristX = r[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById("difference").innerHTML = "The Font size is " + difference;
    }
}

function draw() {
    background("blue");
    fill("yellow");
    stroke(1)
    textSize(difference);
    text("Name",noseX,noseY);
}
