var imageArray = ["bildspel1.jpg", "bildspel2.jpg", "bildspel3.jpg"];

var myImage = document.getElementById("img");

var imageIndex = 1;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
}

var myTimer = setInterval(changeImage, 2000);

$("#stopKnapp").click(function(){
    clearInterval(myTimer);
});