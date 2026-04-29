const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let asteroids = [];

function Star(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.radius = Math.random()*1.5;
this.alpha = Math.random();
}

function Asteroid(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.speed = Math.random()*1+0.5;
}

for(let i=0;i<200;i++){
stars.push(new Star());
}

for(let i=0;i<10;i++){
asteroids.push(new Asteroid());
}

function drawStars(){
stars.forEach(star=>{
ctx.beginPath();
ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,"+star.alpha+")";
ctx.fill();

star.alpha += (Math.random()-0.5)*0.05;

if(star.alpha<0) star.alpha=0;
if(star.alpha>1) star.alpha=1;
});
}

function drawAsteroids(){
asteroids.forEach(a=>{
ctx.beginPath();
ctx.arc(a.x,a.y,3,0,Math.PI*2);
ctx.fillStyle="gray";
ctx.fill();

a.x += a.speed;

if(a.x>canvas.width){
a.x=0;
a.y=Math.random()*canvas.height;
}
});
}

function drawEarth(){

let x = canvas.width-150;
let y = canvas.height-150;

let gradient = ctx.createRadialGradient(x,y,10,x,y,60);
gradient.addColorStop(0,"#2e8bff");
gradient.addColorStop(1,"#001f5c");

ctx.beginPath();
ctx.arc(x,y,60,0,Math.PI*2);
ctx.fillStyle=gradient;
ctx.fill();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawStars();
drawAsteroids();
drawEarth();

requestAnimationFrame(animate);
}

animate();