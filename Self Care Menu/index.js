let meals = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
let images = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevmeal;

for(i=0; i<document.getElementsByClassName("meal").length; i++){
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";

  document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("meal")[i].id = meals[i];

  // document.getElementById("one").addEventListener('click', setActiveButton, false);
  // document.getElementById("two").addEventListener('click', setActiveButton, false);

}

document.getElementById('Day1').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(e){


  prevmeal = document.getElementsByClassName("active")[0].id;
  if(prevmeal != undefined){
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal +"menu").style.display = "none";

  }
  // console.log("previous meal: " + prevmeal);
  // prevmeal.classList.toggle('active');


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  meal = document.getElementsByClassName('active')[0].id;
  console.log(meal);
  document.getElementById(meal +"menu").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + meal + ".jpg' >";

}


// function setActiveButton(e){
//   e.target.classList.toggle("active");
// }
