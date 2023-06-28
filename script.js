const imgs = document.getElementById("carr")
const img = document.querySelectorAll("#carr img");
const burger = document.querySelector(".burger")
const navLink = document.querySelector(".links")


burger.addEventListener("click", () => {

  burger.classList.toggle("active");
  navLink.classList.toggle("active");

});



window.scroll(
  {
    top:0,
    behavior:'smooth'
  }
)

let idx = 0;


// script carrossel
function carr() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 95}vw)`

}
// fim script carrossel

setInterval(carr,1800);



function zeusIcon() {
  alert("Olá me chamo Zeus, seja bem vindo a minha loja.")
}

