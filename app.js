//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");
const showcardNumber = document.querySelector(".card-number");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// this block next for given value
// also is required for animation
let timeRunning = 3000;
let timeAutoNext = 5000;

// card number info
let cardNumber = thumbnailItemsDom.length;
showcardNumber.textContent = cardNumber.toString().padStart(2, "0");

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

// auto next
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");

    if (cardNumber <= 1) {
      cardNumber = 4;
    } else {
      cardNumber--;
    }

    showcardNumber.textContent = cardNumber.toString().padStart(2, "0");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");

    if (cardNumber >= 4) {
      cardNumber = 1;
    } else {
      cardNumber++;
    }

    showcardNumber.textContent = cardNumber.toString().padStart(2, "0");
  }

  // -- required for animation
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, 500);

  // clearTimeout(runNextAuto);
  // runNextAuto = setTimeout(() => {
  //   next.click();
  // }, timeAutoNext);
}
