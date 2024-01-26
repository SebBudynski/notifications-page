"use strict";

const markAll = document.querySelector(".mark-all");
const posts = document.getElementsByClassName("post");
const redDots = document.getElementsByClassName("red-dot");
const comment = document.querySelector(".comment");
const rizky = document.getElementById("rizky");

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", function () {
    this.classList.add("readed");
    if (redDots[i]) {
      redDots[i].style.display = "none";
    }
  });
}

rizky.addEventListener("click", function () {
  comment.style.display = "block";
});
