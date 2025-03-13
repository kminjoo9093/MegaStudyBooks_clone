import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { VisualData } from "../data/visualData.js";

// visual 영역 swiper
export const VisualSlide = () => {
  const visual = document.querySelector("#visual");
  const visualSlide = visual.querySelector(".swiper");
  if (!visualSlide) return;

  const renderVisualSlide = (dataList = VisualData) => {
    const visualSlideWrap = document.querySelector(".swiper-wrapper");
    const slideContents = dataList
      .map(({ pcImage, moImage, description }) => {
        if (window.innerWidth > 990) {
          return `<div class="swiper-slide">
                  <img src="./images/${pcImage}" alt="${description}">
              </div>`;
        } else {
          return `<div class="swiper-slide">
                  <img src="./images/${moImage}" alt="${description}">
              </div>`;
        }
      })
      .join("");
    visualSlideWrap.innerHTML = slideContents;
  };

  renderVisualSlide();

  let swiper1;
  function initializeSwiper() {
    swiper1 = new Swiper("#visual .swiper", {
      slidesPerView: "auto",
      spaceBetween: 80,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      observeParents: true,
      observe: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " | " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      navigation: {
        nextEl: "#visual .swiper-button-next",
        prevEl: "#visual .swiper-button-prev",
      },
    });
  }

  initializeSwiper();

  window.addEventListener("resize", () => {
    swiper1.destroy();
    renderVisualSlide();
    initializeSwiper();
  });
};
