// Your code goes here

// click (1)
const navTag = document.querySelectorAll('.nav-link');
navTag[0].addEventListener('click', e => { 
  e.preventDefault();
  console.log("First tag was clicked!!")
});

// Change color hovering over nav (2)
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "purple"; setTimeout( () => {e.target.style.color ="";}, 500);}, false)
});


//resized the bus image upon mouse entry (3)
const busImg = document.querySelector('img');
busImg.addEventListener('mouseenter', () =>{
    busImg.style.width = '50%';
    busImg.style.marginLeft = '25%';
});

//goes back to normal upon mouse leaving (4)
busImg.addEventListener('mouseleave', () =>{
    busImg.style.width = '100%';
    busImg.style.marginLeft = '0%';
});

//drag images (5)
const imgs = document.querySelector('.img-content');
imgs.addEventListener('dragstart', () => {
	alert('Stop! You have commited crimes against Skyrim and her people! Pay the court a fine or serve your sentence. Your stolen goods are now forfeit. What say you in your defense?');
});

// resize background footer(6)
const footer = document.querySelector('.footer');
window.addEventListener('resize', () => {
	footer.style.backgroundColor = 'aquamarine';
});


// log on load (7)
window.addEventListener("load", () => {
    console.log("pls work");
});


// click the intro paragraph for an alert (8)
const clicker = document.querySelector('.intro');
clicker.addEventListener("click", () => {
    alert("that hurts!!!");
});


// scroll for a log (9)
window.addEventListener("scroll", () => {
    console.log("that tickles haha!!!")
});


// double click on second nav item for a log(10)
navTag[1].addEventListener("dblclick", () => {
    console.log('Second one');
});