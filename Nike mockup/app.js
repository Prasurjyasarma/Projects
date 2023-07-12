console.log("hello");
var yellowBtn = document.getElementById("yellow");
var greenBtn = document.getElementById("green");
var blueBtn = document.getElementById("blue");
var shoe = document.getElementById("shoe");
var buyBtn = document.getElementById("buyBtn");
var shopBtn = document.getElementsByClassName("btn-cl");
var navItems = document.getElementById("navItems");
var video = document.querySelectorAll("video");
var nav = document.getElementById("navv");
var nav1 = document.getElementById("navItem1");
var nav2 = document.getElementById("navItem2");
var nav3 = document.getElementById("navItem3");
var nav4 = document.getElementById("navItem4");
var nav5 = document.getElementById("navItem5");
var body = document.getElementById("body");
var popup = document.getElementById("popup");
var closePopup = document.getElementById("closepopup");
var Collections = document.getElementById("cl");

// console.log(shopBtn);
// for (var i = 0; i < shopBtn.length; i++) {
//   console.log(shopBtn[i]);
// }
//Color chnager for shoes (Hero Section)
yellowBtn.onclick = yellow = () => {
  shoe.style.backgroundImage = "url(img/Shoes1.jpg)";
  buyBtn.style.backgroundColor = "#c9bb3d";
};
greenBtn.onclick = green = () => {
  shoe.style.backgroundImage = "url(img/Shoes2.jpg)";
  buyBtn.style.backgroundColor = "#a2c337";
};
blueBtn.onclick = blue = () => {
  shoe.style.backgroundImage = "url(img/Shoes3.jpg)";
  buyBtn.style.backgroundColor = "#38bfc3";
};

//Video Player (Record Section)
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener(
    "mouseenter",
    (playVideo = () => {
      video[i].play();
    })
  );
}
//Video Pause
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener(
    "mouseleave",
    (playVideo = () => {
      //   video[i].load();
      video[i].pause();
    })
  );
}
//Scroll to sections
nav1.onclick = scrl = () => {
  window.scrollTo(0, 0);
};
nav2.onclick = scrl = () => {
  window.scrollTo(0, 800);
};
nav3.onclick = scrl = () => {
  window.scrollTo(0, 2990); //Gallery
};
nav4.onclick = scrl = () => {
  window.scrollTo(0, 5662); //Support
};
nav5.onclick = scrl = () => {
  window.scrollTo(0, 1600); //Collections
};

//Buy Open pop-up
for (i = 0; i < shopBtn.length; i++) {
  shopBtn[i].onclick = openpopup = () => {
    popup.style.visibility = "visible";
    popup.style.top = "300%";
    popup.style.transform = " translate(-50%, -50%) scale(1)";
    body.style.userSelect = "none";
    body.style.overflowY = "hidden";
  };
}
//Buy close pop-up
closePopup.onclick = closepopup = () => {
  body.style.overflowY = "";
  popup.style.visibility = "hidden";
  popup.style.top = "1%";
  popup.style.transform = " translate(-50%, -50%) scale(0.5)";
};
