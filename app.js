let h = document.querySelector("#h");
let m = document.querySelector("#m");
let s = document.querySelector("#s");
let alarm = document.querySelector("#time");
let remaine = document.querySelector("#remaine");

setInterval(function clockF() {
  currantTime = new Date();

  h.textContent = add(currantTime.getHours());
  m.textContent = add(currantTime.getMinutes());
  s.textContent = add(currantTime.getSeconds());
}, 1000);

function add(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}

/////// songs

let audio = null;

function s1() {
  audio = new Audio("soft.mp3");
  alert("song changed");
  audio.loop = true;
}
function s2() {
  audio = new Audio("mid.mp3");
  alert("song changed");
  audio.loop = true;
}
function s3() {
  audio = new Audio("hard.mp3");
  alert("song changed");
  audio.loop = true;
}

console.log(audio);
/////alarm

userAlarm = null;
currantTime = null;

function getAlarm() {
  let currantTime = new Date();
  let userAlarm = new Date(alarm.value);

  if (userAlarm) {
    if (userAlarm.toLocaleTimeString() == currantTime.toLocaleTimeString()) {
      audio.play();
      document.body.setAttribute("class", "js");
      resaluts = 0;
      remaine.textContent = "alaaaaaaarm";
    } else {
      let resaluts = userAlarm.getTime() - currantTime.getTime();
      let reM = new Date(resaluts).getMinutes();
      let reS = new Date(resaluts).getSeconds();
      let reH = new Date(resaluts).getUTCHours();

      if (resaluts) {
        remaine.textContent = ` time remaing ;${reH}: ${reM}:${reS} `;
      }
    }
  }
}

setInterval(getAlarm, 1000);

function setAlarm() {
  location.reload();
}
