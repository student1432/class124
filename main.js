function setup()
{
    video = createCapture(560, 425);
    video.size(550, 480);

    canvas = createCanvas(560, 425)
    canvas.position(560, 185);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized!");
}
function draw()
{
    background("#969A97");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}