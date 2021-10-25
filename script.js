// want to call a function every second so that the second hand ticks on screen.
setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  //   divided by 60 as 60 seconds in a minute
  const secondsRatio = currentDate.getSeconds() / 60;
  //   add in secondsRatio so that the hands move slowly and don't jump every minute or hour, so it moves like a real clock.
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  //   divided by 12 as 12 hours on a clock and not 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  //   get style of element, call setProperty, which will take in CSS property we want to set, set it to rotationRatio times 360 as 360 degrees in a circle.
  element.style.setProperty("--rotation", rotationRatio * 360);
}

//  puts hands in correct position when the page loads
setClock();
