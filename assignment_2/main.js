const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    const source = e.target.getAttribute("src");
    display(source);
  };
}
