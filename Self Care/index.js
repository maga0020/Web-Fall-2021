let days = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];
let images = ["day1.jpeg", "day2.jpeg"];
let prevmenu;

for (i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];
}

function setActive(e){


  prevmenu = document.getElementsByClassName("active")[0].id;
  if(prevmenu != undefined){
    document.getElementById(prevmenu).classList.toggle("active");
  }
  // console.log("previous menu: " + prevmenu);
  // prevmenu.classList.toggle('active');

  console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }


}
