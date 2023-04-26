const arrow = document.querySelector(".arrow");
const movieList = document.querySelector(".movie-list");

const itemNumber = movieList.querySelectorAll("img").length;
let clickCounter = 0;
arrow.addEventListener("click", () => {
  const ratio = Math.floor(window.innerWidth / 270);
  clickCounter++;
  if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
    movieList.style.transform = `translateX(${movieList.computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
  } else {
    movieList.style.transform = "translateX(0)";
    clickCounter = 0;
  }
})