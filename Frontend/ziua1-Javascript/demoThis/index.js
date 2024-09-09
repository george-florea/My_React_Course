// class Counter {
//   constructor() {
//     this.count = 0;
//     this.button = document.getElementById("incrementButton");
//     this.display = document.getElementById("display");

//     this.button.addEventListener("click", this.handleClick);
//   }

//   handleClick() {
//     this.count++;
//     this.updateDisplay();
//   }

//   updateDisplay() {
//     this.display.textContent = this.count;
//   }
// }

class Counter {
  constructor() {
    this.count = 0;
    this.button = document.getElementById("incrementButton");
    this.display = document.getElementById("display");

    this.handleClick = this.handleClick.bind(this);

    this.button.addEventListener("click", this.handleClick);
  }

  handleClick() {
    this.count++;
    this.updateDisplay();
  }

  updateDisplay() {
    this.display.textContent = this.count;
  }
}

const counter = new Counter();
