// let edge = document.getElementById("contain");
let body = document.querySelector("body");
// let start = document.getElementById("start"); 

console.log(body.getBoundingClientRect());

function foodPlace(){
  let food = document.createElement("div");
  let {width, height } = body.getBoundingClientRect();

  food.classList.add("bg-red-700", "w-5", "h-5", "rounded-lg" , "absolute");
  let x = Math.floor(Math.random() * (width - 10));
  let y = Math.floor(Math.random() * (height - 10));
  food.style.left = x + "px"
  ;
  food.style.top = y + "px";
  // console.log(x + y);
  body.appendChild(food);
}

foodPlace();
//  food.addEventListener("click", foodPlace);
