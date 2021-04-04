
// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NlRFNLJU4/model.json', modelLoaded);
let imgCount = 0;
let iterator = 0;

log("Finding images");


function log(input) {
    console.log(input);
}


// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');

  var imgs = document.getElementsByTagName("img");
  imgCount = imgs.length;

    let timer = setInterval(() => {
        imgs[iterator].setAttribute("crossorigin", "anonymous");
        try {
            classifier.classify(imgs[iterator], (err, results) => {
                if (results[0].label === "Cat") {
                    imgs[iterator].style.border = "solid green 10px";
                    imgs[iterator].style.zIndex = "10";
                }else {
                    imgs[iterator].style.border = "solid yellow 10px";
                    imgs[iterator].style.zIndex = "10";
                }
                console.log(results);
            });
        }
        catch(e) {
            log(e);
        }
        iterator ++;
        if (iterator >= imgCount) {
            clearInterval(timer)
        }
    }, 10);
}

