/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Goblin.js
class GoblinGame {
  constructor(deadCount, lostCount, getHole) {
    this.deadCount = deadCount;
    this.lostCount = lostCount;
    this.getHole = getHole;
    this.activeHole = null;
  }
  deactivateHole() {
    this.activeHole.classList.remove("hole-has-goblin");
  }
  activateHole() {
    let randomIndex = Math.floor(1 + Math.random() * 16);
    this.activeHole = this.getHole.querySelector(`#hole${randomIndex}`);
    if (!this.activeHole.className.includes("visited")) {
      this.activeHole.classList.add("hole-has-goblin");
      this.activeHole.classList.add("visited");
    }
  }
  click() {
    this.getHole.querySelectorAll(".hole").forEach(hole => {
      hole.addEventListener("mouseover", event => {
        event.target.classList.add("hammer");
      });
      hole.addEventListener("mouseout", event => {
        event.target.classList.remove("hammer");
      });
    });
  }
  run() {
    setTimeout(() => {
      this.activateHole();
    }, 500);
    setInterval(() => {
      this.deactivateHole();
      this.activateHole();
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/points.js
class Points {
  constructor(deadCount, lostCount, getHole) {
    this.deadCount = deadCount;
    this.lostCount = lostCount;
    this.getHole = getHole;
    this.losingScore = 5;
    this.winningScore = 11;
  }
  count() {
    for (let hole of this.getHole.querySelectorAll(".hole")) {
      hole.addEventListener("click", () => {
        if (hole.classList.contains("hole-has-goblin")) {
          this.deadCount.textContent = parseInt(this.deadCount.textContent) + 1;
          if (this.deadCount.textContent == this.winningScore) {
            alert("Победа!");
            this.deadCount.textContent = 0;
            this.lostCount.textContent = 0;
            location.reload();
          }
        } else {
          this.lostCount.textContent = parseInt(this.lostCount.textContent) + 1;
          if (this.lostCount.textContent == this.losingScore) {
            alert("Вы проиграли!");
            this.deadCount.textContent = 0;
            this.lostCount.textContent = 0;
            location.reload();
          }
        }
      });
    }
  }
}
;// CONCATENATED MODULE: ./src/js/main.js


const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");
const getHole = document.querySelector(".hole-game");
const points = new Points(deadCount, lostCount, getHole);
const goblin = new GoblinGame(deadCount, lostCount, getHole);
points.count();
goblin.click();
goblin.run();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;