import Characters from "./Characters.js";
import Locations from "./Locations.js";
import Episodes from "./Episodes.js";

const characters = new Characters();
const locations = new Locations();
const episodes = new Episodes();

(async () => {
    await characters.load();
    await locations.load();
    await episodes.load();
})();

function updateSlides(generator) {
    const slidesDiv = document.getElementById("slides");
    slidesDiv.innerHTML = "";
    generator();
}
const characterButton = document.getElementById("characters_button");
characterButton.addEventListener("click", () => updateSlides(() => characters.mapToCards()));

const episodesButton = document.getElementById("episodes_button");
episodesButton.addEventListener("click", () => updateSlides(() => episodes.mapToCards()));

const locationButton = document.getElementById("locations_button");
locationButton.addEventListener("click", () => updateSlides(() => locations.mapToCards()));


// const characterButton = document.getElementById("characters_button");
// characterButton.addEventListener("click", () => {
//   const slidesDiv = document.getElementById("slides");
//   slidesDiv.innerHTML = "";
//   characters.mapToCards();
// });

// const episodesButton = document.getElementById("episodes_button");
// episodesButton.addEventListener("click", () => {
//   const slidesDiv = document.getElementById("slides");
//   slidesDiv.innerHTML = "";
//   episodes.mapToCards();
// });

// const locationButton = document.getElementById("locations_button");
// locationButton.addEventListener("click", () => {
//   const slidesDiv = document.getElementById("slides");
//   slidesDiv.innerHTML = "";
//   locations.mapToCards();
// });


const slides = document.querySelector("#slides");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
