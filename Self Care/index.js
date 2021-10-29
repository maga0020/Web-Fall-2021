let days = ["Day1","Day2","Day3","Day4","Day5","Day6","Day7"];
let images = ["day1.jpeg", "day2.jpeg"];
let prevday;

for (i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];
}


document.getElementById('Day1').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src=assets/" + images[0] + "' >";

function setActive(e){

day = document.getElementsByClassName("active")[0].id;
if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday +"menu").style.display = "none";

}

  // console.log("previous menu: " + prevmenu);
  // prevmenu.classList.toggle('active');

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

meal = document.getElementsByClassName('active')[0].id;
 console.log(day);
 document.getElementById(day +"menu").style.display = "block";
 document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpeg' >";

}
