let catPic = document.getElementById("cat-pic");
let total = 1;
catPic.addEventListener("click", clickCounter);

function clickCounter(){
  document.getElementById("num").innerHTML = total;


total++;
}
