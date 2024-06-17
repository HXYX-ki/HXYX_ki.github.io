let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Image_1.jpg") {
    myImage.setAttribute("src", "images/Image_2.jpg");
  } else {
    myImage.setAttribute("src", "images/Image_1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "你真的很棒，" + myName;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "不是吧，不会有人不登录吧" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
