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

$("#animeKnapp").click(function(){
    var $this = $(this);
    if($("#animeBild").is(":visible")){
        $("#animeBild").animate({opacity: "0", height: "0px", width: "0px"});
        $this.text("Visa");
    }
    if($("#animeBild").css("opacity") == 0){
        $("#animeBild").animate({opacity: "100", height: "100%", width: "100%"});
        $this.text("Dölj");
    }
});