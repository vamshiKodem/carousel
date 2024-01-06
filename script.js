const imageContainer = document.querySelector(".image-container");
const previousButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");
let current = 0;
const images = [
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function generate() {
  imageContainer.innerHTML = images
    .map(
      (img, index) =>
        `<img class="image ${current === index ? "show" : ""}" src="${img}" />`
    )
    .join("");
}
generate();

nextButton.addEventListener("click", () => {
  if (current === images.length - 1) {
    current = 0;
  } else {
    current++;
  }
  generate();
});

previousButton.addEventListener("click", () => {
  if (current === 0) {
    current = images.length - 1;
  } else {
    current--;
  }
  generate();
});
