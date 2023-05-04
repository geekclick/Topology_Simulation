x = document.getElementsByClassName("info");
y = document.getElementsByClassName("box");
z = document.getElementsByClassName("control")
w = document.getElementsByClassName("path")

function clear() {
  for (var i = 0; i < 4; i++) {
    x[i].style.display = "none";
  }
}

function bus() {
  y[1].style.display = "flex";
  clear();
  x[0].style.display = "flex";
  z[0].style.display = "flex";
  window.scrollTo(0, document.body.scrollHeight);
}

function star() {
  y[1].style.display = "flex";
  clear();
  x[1].style.display = "block";
  z[0].style.display = "flex";
  window.scrollTo(0, document.body.scrollHeight);
}

function mesh() {
  y[1].style.display = "flex";
  clear();
  x[2].style.display = "block";
  z[0].style.display = "flex";
  window.scrollTo(0, document.body.scrollHeight);
}

function ring() {
  y[1].style.display = "flex";
  clear();
  x[3].style.display = "block";
  z[0].style.display = "flex";
  window.scrollTo(0, document.body.scrollHeight);
}

function end_simulation() {
  y[1].style.display = "none";
  z[0].style.display = "none";
  w[0].style.display = "none";
}

function start_emulation() {
  w[0].style.display = "block";
}
