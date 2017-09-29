document.getElementById("ArrowKey").addEventListener("click", function(){
    document.getElementById("ControlPanel").style.left = "0px";
});

document.getElementById("Img1").addEventListener("click", function(){
    document.getElementById("BackgroundImg").style.backgroundImage = "url(1.png)";
});

document.getElementById("Img2").addEventListener("click", function(){
    document.getElementById("BackgroundImg").style.backgroundImage = "url(2.png)";
});

document.getElementById("Img3").addEventListener("click", function(){
    document.getElementById("BackgroundImg").style.backgroundImage = "url(3.png)";
});

document.getElementById("SecArrowKey").addEventListener("click", function(){
    document.getElementById("ControlPanel").style.left = "-15vw";
});