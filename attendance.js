function setup()
{
  canvas=createCanvas(500,500);
  canvas.position(50,100)
  video=createCapture(VIDEO);
  video.hide()

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1viOi9EOM/',modelLoaded);

}

function draw()
{
image(video,0,0,500,500)
classifier.classify(video,gotResult);
}

function modelLoaded()
{
    console.log('model loaded');
}

function gotResult(error, results)
    {
        if (error)
        {
            console.error(error);
        }   
        else
        {
            console.log(results);
            document.getElementById("present").innerHTML = results[0].label;
                    
        }
    }

    