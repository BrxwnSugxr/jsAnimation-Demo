var count = 0;
var animationOn = false;
counterAnimation;

function startCounter() {
  var count = document.getElementById("displayTag").innerHTML;
  count++;
  document.getElementById("displayTag").innerHTML = count;
}

function startAnimation() {
  if (animationOn === false) {
    animationOn = true;
    counterAnimation = setInterval(startCounter, 1000);
  }
}

function stopCounter() {
  if (animationOn == true) {
    {
      animationOn = false;

      clearInterval(counterAnimation);
    }
  }
}
