"use strict";

const markAll = document.querySelector(".mark-all");
const posts = document.getElementsByClassName("post");
const redDots = document.getElementsByClassName("red-dot");
const comment = document.querySelector(".comment");
const rizky = document.getElementById("rizky");
const unreadedCounter = document.getElementById("counter");

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", function () {
    addReadedState(this);
      redDots[i].style.display = "none";
    
  });
}

rizky.addEventListener("click", function () {
  if (comment.style.display === 'block'){
    comment.style.display = 'none'
    return
  }
  comment.style.display = "block";
});

function addReadedState(post) {
  post.classList.add("readed");
  updatedUnreadedCounter();
}

function updatedUnreadedCounter() {
  const unreadedPosts = document.querySelectorAll(".post:not(.readed)");
  unreadedCounter.innerText = unreadedPosts.length;
}

markAll.addEventListener("click", function markAllAsReaded() {
  for (let i = 0; i < posts.length; i++) {
    posts[i].classList.add("readed");
    redDots[i].style.display = "none";
    updatedUnreadedCounter();
  }
});

updatedUnreadedCounter();
