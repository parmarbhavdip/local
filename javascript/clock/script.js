function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById('second').style.transform = `rotate(${secDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minDeg}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 

 

