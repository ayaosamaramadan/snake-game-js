let body = document.querySelector("body");
let foodx, foody;
let score = 0;
let lSnak, rSnak;
let currKey = "right";
let increment = 0;

let scoreBoard = document.getElementById("score");
scoreBoard.innerHTML = "Score: " + score;

let food = document.createElement("div");

console.log(body.getBoundingClientRect());

const foodPlace = () => {
  let { width, height } = body.getBoundingClientRect();

  food.classList.add("bg-red-700", "w-5", "h-5", "rounded-lg", "absolute");
  foodx = Math.floor((Math.random() * width) / 10) * 10;
  foody = Math.floor((Math.random() * height) / 10) * 10;
  food.style.left = foodx + "px";
  food.style.top = foody + "px";
  // console.log(foodx + foody);
  body.appendChild(food);
};

foodPlace();
let snack = document.createElement("div");
  let head = { l: 0, t: 0 };
  const snakeMoving = () => {

  let num = 10;
  
  body.appendChild(snack);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currKey = "right";
    } else if (e.key === "ArrowLeft") {
      currKey = "left";
    } else if (e.key === "ArrowUp") {
      currKey = "up";
    } else if (e.key === "ArrowDown") {
      currKey = "down";
    }
  });
  setInterval(() => {
    snack.classList.add("bg-green-700", "w-5", "h-5", "rounded-lg", "absolute");

    if (currKey === "right") {
      head.l += num;
    }
    if (currKey === "left") {
      head.l -= num;
    }
    if (currKey === "up") {
      head.t -= num;
    }
    if (currKey === "down") {
      head.t += num;
    }

    lSnak = snack.style.left = head.l + "px";
    rSnak = snack.style.top = head.t + "px";
    console.log("l:" + head.l + "r:" + head.t);

    if (head.l === foodx && head.t === foody) {
      console.log("food");
      // Place new food
      foodPlace();
      score++;
      increment += 20;
      scoreBoard.innerHTML = "Score: " + score;
      longSnake();
      // snakeMoving();
    }
  }, 200);
};

snakeMoving();

const longSnake = () => {


  let tail = document.createElement("div");
  tail.setAttribute("id", `tail${score}`);
  let head = { l: 0, t: 0 ,r: 0, b: 0};
  
  
  setInterval(() => {
    tail.classList.add("bg-blue-700", "w-5", "h-5", "rounded-lg", "absolute");

    if (currKey === "right") {
      tail.style.left = head.l - 20 + "px";
      tail.style.top = head.t + 0 + "px";
    
  }
    if (currKey === "left") {
      tail.style.left = head.l + 20 + "px";
      tail.style.top = head.t + 0 + "px";
    }
    if (currKey === "up") {
      tail.style.top = head.t + 20 + "px";
      tail.style.left = head.l + 0 + "px";
    }
    if (currKey === "down") {
      tail.style.top = head.t - 20 + "px";
      tail.style.left = head.l + 0 + "px";
    }
    
snack.appendChild(tail);

    //  tail.style.left = head.l + 20 + "px";
    //  tail.style.top = head.t + 20 + "px";
  
  }, 200);

}


