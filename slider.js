let sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slidesCount = sliderImage.length;
let currentSlide = 1;

let slideNumber = document.getElementById("slide-number");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.onclick = nextSlide;
prev.onclick = prevSlide;

let mainUl = document.createElement("ul");
mainUl.setAttribute("id", "main-ul");
for (let i = 1; i <= slidesCount; i++) {
  let mainli = document.createElement("li");
  mainli.setAttribute("data-index", i);
  mainli.appendChild(document.createTextNode(i));
  mainUl.appendChild(mainli);
}
document.getElementById("indicators").appendChild(mainUl);

let newMainUl = document.getElementById("main-ul");
let bullets = Array.from(document.querySelectorAll("#main-ul li"));
for (i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    currentSlide = this.getAttribute("data-index");
    Checker();
  };
}
Checker();
function nextSlide() {
  if (next.classList.contains("disabled")) {
    return false;
  }
  currentSlide++;
  Checker();
}

function prevSlide() {
  if (prev.classList.contains("disabled")) {
    return false;
  }
  currentSlide--;
  Checker();
}
function Checker() {
  slideNumber.textContent = `Slide #` + currentSlide + ` of ` + slidesCount;
  removeActive();

  sliderImage[currentSlide - 1].classList.add("active");

  newMainUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function removeActive() {
  sliderImage.forEach((Img) => {
    Img.classList.remove("active");
  });
  bullets.forEach((bul) => {
    bul.classList.remove("active");
  });
}
