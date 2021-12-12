
document.getElementByClassName("container")[i].addEventListener("click", function(){changeColor(this.id)});

function changeColor(sectionID) {
  console.log(sectionID)
  document.getElementById("demo").classList.toggle("red");
}
