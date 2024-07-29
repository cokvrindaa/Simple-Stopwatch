let waktudetik = 0;
let waktumenit = 0;
let waktujam = 0;
let tampilanjam = document.getElementById("tampilanjam");
let tampilanmenit = document.getElementById("tampilanmenit");
let tampilandetik = document.getElementById("tampilandetik");
let timer = false;

function start() {
  if (!timer) {
    timer = setInterval(function () {
      waktudetik++;
      if (waktudetik == 60) {
        waktudetik = 0;
        waktumenit += 1;
      }
      if (waktumenit == 60) {
        waktumenit = 0;
        waktujam += 1;
      }

      if (waktudetik < 10) {
        tampilandetik.textContent = "0" + waktudetik;
      } else {
        tampilandetik.textContent = waktudetik;
      }

      if (waktumenit < 10) {
        tampilanmenit.textContent = "0" + waktumenit + ":";
      } else {
        tampilanmenit.textContent = waktumenit + ":";
      }

      if (waktujam < 10) {
        tampilanjam.textContent = "0" + waktujam + ":";
      } else {
        tampilanjam.textContent = waktujam + ":";
      }
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = false;
}

function reset() {
  clearInterval(timer);
  timer = false;
  waktudetik = 0;
  waktumenit = 0;
  waktujam = 0;
  tampilanjam.textContent = "00:";
  tampilanmenit.textContent = "00:";
  tampilandetik.textContent = "00";
}
