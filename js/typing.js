/******************* Typing ******************/

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    
    let i = 0;
    let timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
}
// application
let speed = 75;
let p1 = document.getElementById('typing1');
let p2 = document.getElementById('typing2');
let im3 = document.getElementById('typing3');
let delay = typing1.innerHTML.length * speed + speed;
let delay2 = typing2.innerHTML.length * speed + speed + speed;

// type affect to header
typeEffect(p1, speed);


// type affect to body
setTimeout(function(){
    typing2.style.display = "inline-block";
  typeEffect(p2, speed);
}, delay);
setTimeout(function(){
    typing3.style.visibility = "visible";
  typeEffect(im3, speed);
}, delay+delay2);