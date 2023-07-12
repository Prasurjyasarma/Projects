window.addEventListener("load", function () {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const balls = document.querySelector(".balls");
  const body = document.querySelector("body");
  colors = ["#ee4035", "#f37736", "#fdf498", "#7bc043", "#0492cf", "#8c6ff3"];
  //Function for sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0; //Reset the sounds
      sounds[index].play();
      createBalls(index);
      body.classList.add("chnage");
      setTimeout(() => {
        body.classList.remove("chnage");
      }, 2000);
    });
  });

  var createBalls = (index) => {
    const bubbles = document.createElement("div");
    balls.appendChild(bubbles);
    bubbles.style.backgroundColor = colors[index];
    bubbles.style.animation = "jump 1s ease";

    //Fucntion to remove the child
    bubbles.addEventListener("animationend", function () {
      balls.removeChild(bubbles);
    });
  };
});
