import GoblinGame from "./Goblin";
import Points from "./points";

const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");
const getHole = document.querySelector(".hole-game");
const points = new Points(deadCount, lostCount, getHole);
const goblin = new GoblinGame(deadCount, lostCount, getHole);

points.count();
goblin.click();
goblin.run();
