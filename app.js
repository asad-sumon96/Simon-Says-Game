let gameseq = [];
let userseq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let levelTitle = document.querySelector(".levelTitle");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 100);
}

function levelup() {
  level++;
  userseq = [];
  levelTitle.innerText = `Level ${level}`;

  let ranIdx = Math.floor(Math.random() * 3);
  let randColor = btns[ranIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randbtn);
}

function btnPress() {
  console.log("this");
  let btn = this;
  userFlash(btn);

  userColor = this.getAttribute("id");
  userseq.push(userColor);
  console.log(userseq);
  checkAns(userseq.length - 1);
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    levelTitle.innerHTML = `Game Over! <b>Your Score was ${level}<b><br>Press any key start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
