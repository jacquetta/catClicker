let catPic = document.getElementById("cat-pic");
let total = 1;
catPic.addEventListener("click", clickCounter);

function clickCounter(){
  document.getElementById("num").innerHTML = total;


total++;
}



// catPic.addEventListener("click", function(){







//   if(catPic === "click"){
//     document.getElementById("numPics").innerHTML = "Total number of clicks" + total;
//   }
//
//   total++
//
//   return;
// });
