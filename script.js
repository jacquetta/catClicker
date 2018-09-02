let catPic = document.getElementById("cat-pic");
let catSecond = document.getElementById("cat-second");
let total = 1;
let totalTwo = 1;
let catBack = "Cat in Yellow Backpack";
let catLook = "Cat looking out a Skyrise";

document.getElementById("cat-one").innerHTML = catBack;
document.getElementById("cat-two").innerHTML = catLook;

catPic.addEventListener("click", clickCounter);
catSecond.addEventListener("click", clickCounterTwo);

function clickCounter(){
  document.getElementById("num").innerHTML = total;

total++;
}

function clickCounterTwo(){
  document.getElementById("number").innerHTML = totalTwo;

totalTwo++;
}
