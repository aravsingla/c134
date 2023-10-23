status="";
objects=[];

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();

    video=createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
    object_name= document.getElementById("object_name").value;
}

function modelLoaded(){
 console.log("ModalLoaded");
objects=results;
}
function draw(){
    image(video,0,0,480,380);
}
