
function clickUp(e){
    const march = document.getElementById('march')
    const april = document.getElementById('april')
    const may = document.getElementById('may')

    for(let button of buttons){
        button.classList.remove('visible')
    }
    if(e.target.classList.contains( "visible")){
        e.target.classList.remove('visible')
    } else {
        e.target.classList.add('visible')
    }
    if(e.target.innerText == "MARCH"){
        march.classList.remove('inactive')
        march.classList.add('active')
        if(april.classList.contains('active') || may.classList.contains('active')){
            april.classList.remove('active')
            may.classList.remove('active')
            april.classList.add('inactive')
            may.classList.add('inactive')
        }
    }
    if(e.target.innerText == "APRIL"){
        april.classList.remove('inactive')
        april.classList.add('active')
        if(march.classList.contains('active') || may.classList.contains('active')){
            march.classList.remove('active')
            may.classList.remove('active')
            march.classList.add('inactive')
            may.classList.add('inactive')
        }
    }
    if(e.target.innerText == "MAY"){
        may.classList.remove('inactive')
        may.classList.add('active')
        if(april.classList.contains('active') || march.classList.contains('active')){
            april.classList.remove('active')
            march.classList.remove('active')
            april.classList.add('inactive')
            march.classList.add('inactive')
        }
    }

}
const buttons = document.querySelectorAll("h3#button")
for(let button of buttons){
    button.addEventListener('click', clickUp)
}

//////////////////////////////////////////////////////////
const audioPlayer = document.querySelector(".player");
let startTime;
let endTime;
let slider;
let playButton;
const audio = new Audio('music.mp3');
 
playButton=audioPlayer.querySelector(".play");
if(playButton){
  playButton.addEventListener("click",(e)=>{
    if(audio.paused){
      audio.play();
      e.target.classList.replace("fa-play","fa-pause");
    }else{
      audio.pause();
      e.target.classList.replace("fa-pause","fa-play");

    }
  });
}

slider=audioPlayer.querySelector(".playerseekbarslider");

setInterval(()=>{
  slider.style.width = (audio.currentTime/audio.duration)*100+"%";
  startTime=audioPlayer.querySelector(".playertime").textContent= getTimeCodeFromNum(audio.currentTime);
  endTime=audioPlayer.querySelector(".playerlength").textContent= getTimeCodeFromNum(audio.duration);
},500);
 
audio.addEventListener(
  "loadeddata",
  () => {
    startTime=audioPlayer.querySelector(".playertime").textContent= getTimeCodeFromNum(audio.currentTime);
    endTime=audioPlayer.querySelector(".playerlength").textContent= getTimeCodeFromNum(audio.duration);
    audio.volume = 1;
  },false);

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
//////////////////////////////////////////////////////////////////////////////////
