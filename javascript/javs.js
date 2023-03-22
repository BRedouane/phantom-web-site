
//animation reactive au scroll
const revealElements = document.querySelectorAll("[data-reveal]");
    
const scrollReveal = function(){
  for(let i = 0; i < revealElements.length; i++){
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed")
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);



//code pour rendre le scroll un peu plus fluide

// First we get the elements we need, the body and our container on which
// we are going to apply a smooth scroll. You will always need a container
// to apply a smooth scroll. You will not be able to apply it directly to
// the body.
const body = document.body;
const main = document.querySelector('main');

// We define variables we will need later. 
// 2 variables to store the scroll position and 2 variables to store the 
// container position.
let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

// The trick is to set a heigh to the body to keep the browser scroll bar.




// We bind a scroll event to the window to watch scroll position.
window.addEventListener('scroll', scroll);

function scroll() {
  // We only update the scroll position variables
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

// Then we start a `requestAnimationFrame` loop. 
// For more informations about `requestAnimationFrame` check the episode #6 of
// "Gist for Javascript Beginners".
window.requestAnimationFrame(render);

function render() {
  // We calculate our container position by using our Linear Interpolation method.
  // For more informations about Linear Interpolation check the episode #11 of
  // "Gist for Javascript Beginners".
  dx = lerp(dx, sx, 0.06);
  dy = lerp(dy, sy, 0.06);
  
  // I choose to round the interpolated positions to 2 decimals for clarity.
  // You could remove these to lines and the smooth scroll would still work.
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  // Finally we translate our container to its new positions.
  // Don't forget to add a minus sign because the container need to move in 
  // the opposite direction of the window scroll.
  main.style.transform = `translate(-${dx}px, -${dy}px)`;
  
  // And we loop again.
  window.requestAnimationFrame(render);
}

// This is our Linear Interpolation method.
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}