let body = document.querySelector("body");
let foodx,foody;
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
  let head ={ l: 0, t: 0 };
const snakeMoving = () => {
    let snack = document.createElement("div");
  
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
    
    if (head.l === foodx && head.t === foody) {
      console.log("food");
      // Place new food
      foodPlace();
    }

  }, 200);  
};

snakeMoving();

// console.log("foodx:"+foodx,foody);

