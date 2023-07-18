const carousel = document.querySelector(".carrousel");
const arrowIcons = document.querySelectorAll(".arrow");
const firstCard = carousel.querySelectorAll(".card")[0];


let isDragStart = false, prevPageX, prevScrollLeft;

let cardWidth = getComputedStyle(firstCard);
let cardNetWidth = (firstCard.offsetWidth + parseFloat(cardWidth.marginLeft) + parseFloat(cardWidth.marginRight))*3;

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