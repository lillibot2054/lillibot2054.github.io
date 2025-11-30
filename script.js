// === STARFIELD BACKGROUND ===
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth; canvas.height=innerHeight;

let stars=[];
for(let i=0;i<350;i++){
 stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:Math.random()*2});
}

function starRender(){
 ctx.clearRect(0,0,innerWidth,innerHeight);
 stars.forEach(star=>{
  ctx.fillStyle="white";
  ctx.fillRect(star.x,star.y,star.s,star.s);
  star.y+=star.s;
  if(star.y>innerHeight) star.y=0;
 });
 requestAnimationFrame(starRender);
}
starRender();

// === RELATIVISTIC LOADING (TIME DILATION) ===
let t=0,v=0,acc=0.0009;
const loader=document.querySelector(".loader");
const loadText=document.querySelector(".loadText");

function physicsLoad(){
 v+=acc; t+=v;
 let relativisticFactor=1/Math.sqrt(1-(v*v)/10000);

 let percent=Math.min((t*relativisticFactor).toFixed(1),100);
 loadText.innerText=`Warp Calibration: ${percent}%`;

 if(percent>=100){
  loader.style.opacity="0";
  setTimeout(()=>loader.remove(),800);
 }else requestAnimationFrame(physicsLoad);
}
physicsLoad();

// === MAGNETIC NAVBAR ===
document.querySelectorAll("nav a").forEach(link=>{
 link.addEventListener("mousemove",e=>{
  const rect=link.getBoundingClientRect();
  const span=link.querySelector("span");
  const dx=e.clientX - (rect.left+rect.width/2);
  const dy=e.clientY - (rect.top+rect.height/2);
  span.style.transform=`translate(${dx/4}px,${dy/4}px)`;
 });
 link.addEventListener("mouseleave",()=>link.querySelector("span").style.transform="translate(0,0)");
});

// === ORBIT MOTION FOR HOME PAGE ===
const planet=document.getElementById("orbitPlanet");
if(planet){
 let a=0;
 function orbitMotion(){
  a+=0.008;
  let r=160, cx=innerWidth/2, cy=innerHeight/2;
  planet.style.left=(cx+r*Math.cos(a))+"px";
  planet.style.top=(cy+r*Math.sin(a))+"px";
  requestAnimationFrame(orbitMotion);
 }
 orbitMotion();
}
