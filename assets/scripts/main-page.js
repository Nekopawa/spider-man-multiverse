document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);

function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}--hovered`;
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
  document.body.id = "";
}

function addEventListenerToCards() {
  const cards = document.getElementsByClassName("s-card");
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }
}

function selectCarouselItem(selectedItem) {
  const itemID = selectedItem.id.charAt(4);
  const carousel = document.querySelector(".s-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(itemID) - 1);
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  );

  carousel.style.transform = newTransform;

  const activeButton = document.querySelector(".s-controller__button--active");
  activeButton.classList.remove("s-controller__button--active");
  selectedItem.classList.add("s-controller__button--active");
}
