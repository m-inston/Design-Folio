const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".menu-links a");

let menuOpen = false;

const tl = gsap.timeline({ paused:true });

tl.to(menu,{
opacity:1,
pointerEvents:"auto",
duration:.4
})

.to(links,{
y:0,
opacity:1,
stagger:.1,
duration:.6,
ease:"power3.out"
},"-=0.2");


menuBtn.addEventListener("click",()=>{

menuOpen = !menuOpen;

menuBtn.classList.toggle("open");

if(menuOpen){

tl.play();

}else{

tl.reverse();

}

});
