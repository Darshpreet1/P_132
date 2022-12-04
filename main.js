prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8p1bFWQkQ/model.json",modelLoded);
//define function modelLoaded
function modelLoded()
{
    console.log("Model Loded");
}
//define function check() 
function check()
{
    img = document.getElementById("captured_image");
    Classifier.classify(img, gotresults);
}

//define function gotResult(error, results)
function gotresults(error,result)
{
    
        console.log(result);
        prediction1 = result[0].label;

        if(result[0].label == "Mask"){
            document.getElementById("update_emoji").innerHTML = "&#x1F637;"+"You Can Enter!";
        }

        if(result[0].label == "No Mask"){
            document.getElementById("update_emoji").innerHTML = "&#x26d4;"+"Entry Denied Wear A Mask";
        }
    
}
