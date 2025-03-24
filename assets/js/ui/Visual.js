import { VisualData } from "../data/visualData.js";
import { VisualSlide } from "./Slide.js";

export const RenderVisualSlide = (dataList = VisualData) => {
  const visualSlideWrap = document.querySelector(".swiper-wrapper");
  const setContents = () => {
    const slideContents = dataList
      .map(({ pcImage, moImage, description }) => {
        if (window.innerWidth > 990) {
          return `<div class="swiper-slide">
                    <img src="./assets/images/${pcImage}" alt="${description}">
                </div>`;
        } else {
          return `<div class="swiper-slide">
                    <img src="./assets/images/${moImage}" alt="${description}">
                </div>`;
        }
      })
      .join("");
    visualSlideWrap.innerHTML = slideContents;
  };
  setContents();
  window.addEventListener("resize", setContents);

  VisualSlide();
};
