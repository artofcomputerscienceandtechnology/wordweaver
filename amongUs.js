var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#37d";
ctx.fillRect(0, 0, 700, 500);


const image = document.getElementById("skeld");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 0, 0, 700, 500, 100, 100);
});


ctx.fillStyle = "#35d";
ctx.fillRect(0, 0, 700, 500)

const img = new Image(); // Create new img element
//img.src = "./amongUsSprites.png"
const skeldImg = new Image();
img.src = "amongUsSprites.png";
skeldImg.src = "skeld.png";
  
function draw() {
  //const ctx = document.getElementById("canvas").getContext("2d");
  const img = new Image();
  
  skeldImg.onload = () => {
    ctx.drawImage(skeldImg, 0, 0, 700, 500);
    ctx.drawImage(img, 20, 20, 200, 200, 300, 300, 100, 100);
	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  };
  
  
}

draw();


//x,y of each room in skeld
let roomCoordinates = [[ 10, 20], [30, 40], [50, 60], [70, 80], [90, 100], [200, 200]];

function drawInRandomLocation()
{
	//random coordinates
	let x = Math.floor(Math.random() * 600);
	let y = Math.floor(Math.random() * 400);
	
	//draw among us sprite in random room
	ctx.drawImage(skeldImg, 0, 0, 700, 500);
    ctx.drawImage(img, 20, 20, 200, 200, x, y, 100, 100);
}