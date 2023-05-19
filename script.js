const imgs = document.getElementById("carr")
const img = document.querySelectorAll("#carr img");

let idx = 0;

function carr() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 30}vw)`

}

setInterval(carr,1800);
