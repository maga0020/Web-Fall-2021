// console.log("hello world");
// console.log( Math.floor (Math,random()*10) );
//THIS IS A COMMENT

// console.log ( document.getElementsByClassName("options") );
// console.log( document.getElementsByClassName("options")[0].innerHTML);

const images = ["collage.jpg", "sign.jpg", "skateland.jpg"];
const title = ["Collage", "Sign", "Skateland"];

for(i=0;i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName("label")[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerhtml);

  document.getElementsByClassName("options")[i].innerhtml += '<img src="assets/' + images[i] + ' "> ';
}
