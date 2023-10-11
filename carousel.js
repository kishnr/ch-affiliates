let carousel = document.querySelector(".reviewCarousel");
let arrowIcons = document.querySelectorAll(".arrow");
let firstCard = carousel.querySelectorAll(".card")[0];


let isDragStart = false, prevPageX, prevScrollLeft;

let cardWidth = getComputedStyle(firstCard);
let cardNetWidth = (firstCard.offsetWidth + parseFloat(cardWidth.marginLeft) + parseFloat(cardWidth.marginRight));

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -cardNetWidth : cardNetWidth;
  })
})

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

var classList = document.getElementById('reviews').classList;

var minWidth769 = window.matchMedia("(min-width: 768px)");

function match() {
  minWidth769.matches ? classList.add('col-12') : classList.remove('col-12');
}

minWidth769.addListener(match);

match();