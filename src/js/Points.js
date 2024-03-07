export default class Points {
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
