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
  const minutesRatio = secondsRatio + currentDate.getMinutes() / 60;
  //   divided by 12 as 12 hours on a clock and not 60
  const hourssRatio = minutesRatio + currentDate.getHours() / 12;
}
