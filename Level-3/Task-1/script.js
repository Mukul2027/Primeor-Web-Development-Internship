const images = [

"images/img1.png",

"images/img2.png",

"images/img3.png",

"images/img4.png",

"images/img5.png",

"images/img6.png"

];

let current = 0;

const slide = document.getElementById("slide");

setInterval(function(){

current++;

if(current >= images.length){

current = 0;

}

slide.src = images[current];

},3000);

function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}