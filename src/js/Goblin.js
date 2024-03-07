export default class GoblinGame {
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
    this.getHole.querySelectorAll(".hole").forEach((hole) => {
      hole.addEventListener("mouseover", (event) => {
        event.target.classList.add("hammer");
      });

      hole.addEventListener("mouseout", (event) => {
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
