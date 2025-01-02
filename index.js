// let edge = document.getElementById("contain");
let body = document.querySelector("body");
// let start = document.getElementById("start");
// let snake = document.getElementById("snake");
console.log(body.getBoundingClientRect());

const foodPlace = () => {
  let food = document.createElement("div");
  let { width, height } = body.getBoundingClientRect();

  food.classList.add("bg-red-700", "w-5", "h-5", "rounded-lg", "absolute");
  let x = Math.round((Math.random() * width) / 10) * 10;
  let y = Math.round((Math.random() * height) / 10) * 10;
  food.style.left = x + "px";
  food.style.top = y + "px";
  // console.log(x + y);
  body.appendChild(food);
};

foodPlace();

const snakeMoving = () => {
    let snack = document.createElement("div");
    let head ={ l: 0, t: 0 };
    setInterval(() => {  snack.classList.add("bg-green-700", "w-5", "h-5", "rounded-lg", "absolute");
    head.l+=20;
    snack.style.left = head.l + "px";
    snack.style.top = head.t + "px";
    body.appendChild(snack);
  }, 1000);

  document.addEventListener("keydown", (e) => {
    console.log(e);
  });
};

snakeMoving();
