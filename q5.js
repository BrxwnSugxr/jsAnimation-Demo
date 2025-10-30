var slideShow;
var animationOn = false;
var index = 0;

var arr_img = ["images/img1.png", "images/img2.png", "images/img3.png"];

function start() {
  if (!animationOn) {
    slideShow = setInterval(showImg, 1200);
    animationOn = true;
  }
}

function stop() {
  clearInterval(slideShow);
  animationOn = false;
}

function showImg() {
  var imgElement = document.getElementById("imgHolder");
  imgElement.src = arr_img[index];
  index++;
  if (index === arr_img.length) index = 0;
}
