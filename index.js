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
    let num = 10;
    let dirc = "right";
    body.appendChild(snack);
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" ) {
                dirc = "right";
      } else if (e.key === "ArrowLeft") {
                dirc = "left";
      } else if (e.key === "ArrowUp") {
                 dirc = "up";
      } else if (e.key === "ArrowDown") {
                dirc = "down";
      }
    }
  
    ); 
    setInterval(() => {
      snack.classList.add("bg-green-700", "w-5", "h-5", "rounded-lg", "absolute");
    

    if (dirc === "right") {
      head.l += num;
    }
    if (dirc === "left") {
      head.l -= num;
    }
    if (dirc === "up") {
      head.t -= num;
      
    }
    if (dirc === "down") {
      head.t += num;
      
    }
    
    snack.style.left = head.l + "px";
    snack.style.top = head.t + "px";
    console.log("l:"+head.l +"r:"+ head.t);
    
  }, 200);

  
};

snakeMoving();
