let body = document.querySelector("body");
let foodx, foody;
let score = 0;
let currKey = "right";
let increment = 0;

let scoreBoard = document.getElementById("score");
scoreBoard.innerHTML = "Score: " + score;

let food = document.createElement("div");

const foodPlace = () => {
  let { width, height } = body.getBoundingClientRect();

  food.classList.add("bg-red-700", "w-5", "h-5", "rounded-lg", "absolute");
  foodx = Math.floor((Math.random() * width) / 10) * 10;
  foody = Math.floor((Math.random() * height) / 10) * 10;
  food.style.left = foodx + "px";
  food.style.top = foody + "px";
  // console.log(foodx, foody);
  body.appendChild(food);
};

foodPlace();

let snack = [];
let head = { l: 0, t: 0 };
let num = 10;

const longSnake  = (left, top) => {
  let partt = document.createElement("div");
  partt.classList.add("bg-blue-700", "w-5", "h-5", "rounded-lg", "absolute");
  partt.style.left = left + "px"  ;


  partt.style.top = top + "px";

  body.appendChild(partt);
  return partt;
};

snack.push(longSnake (head.l,  head.t) );

const snackMoving = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currKey = "right";

    } else if (e.key === "ArrowLeft") {
       currKey ="left";
    } else if ( e.key === "ArrowUp") {
    currKey = "up";

    } else if (e.key === "ArrowDown") {
      currKey = "down";
    }

  });

  setInterval(() => {
    let newhead={...head };

    if (currKey === "right" ) {
      newhead.l +=num;}
    if (currKey === "left") {
        newhead.l -= num;

    }
    if(currKey === "up") {

      newhead.t -= num;
    }
    if (currKey === "down") 
      {
      newhead.t+= num;
    }

    snack.unshift(longSnake (newhead.l, newhead.t));
    head = newhead;

      if (head.l === foodx && head.t === foody) {
    // console.log("food");
      score ++;scoreBoard.innerHTML = "Score: " + score;
       foodPlace();
    } else {
      let tail = snack.pop();
      body.removeChild(tail);
  }
  }, 200);
  // console.log("movng");
};

snackMoving();