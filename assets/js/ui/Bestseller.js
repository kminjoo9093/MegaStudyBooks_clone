import { BestData } from "../data/bestData.js";
import { BestSellerSlide } from "./Slide.js";
import { GetClickedTab } from "./Tab.js";

export const BestsellerBtn = () => {
  const slideBtnPosition = () => {
    const bestsellerSlide = document.querySelector(".bestseller-swiper");
    if (!bestsellerSlide) return;

    const slideWidth = bestsellerSlide.querySelector(
      ".swiper-slide:first-child"
    ).offsetWidth;
    const btnPosition = `${(slideWidth + 10) / 10}rem`;

    bestsellerSlide.style.setProperty("--btnPositionX", btnPosition);
  };

  window.addEventListener("load", slideBtnPosition);
  window.addEventListener("resize", slideBtnPosition);
};

export const RenderBestSlideContent = (dataList = BestData) => {
  const bestSlide = document.querySelector(".bestseller-swiper");
  if (!bestSlide) return;

  GetClickedTab(".bestseller-tab  .tab-btn", (clickedTabContent) => {
    const filteredList = dataList.filter(({ category }) => {
      return category === clickedTabContent;
    });
    const slideResult = filteredList
      .map(({ coverImage, title }) => {
        return `<ul class="swiper-slide">
                  <li>
                    <a href="#">
                      <div class="best-img">
                        <img src="./assets/images/${coverImage}" alt="" aria-hidden="true">
                      </div >
                      <p>${title}</p>
                    </a>
                  </li>
                </ul>`;
      })
      .join("");

    const bestSlideWrap = bestSlide.querySelector(".swiper-wrapper");
    bestSlideWrap.innerHTML = slideResult;
  });

  BestSellerSlide();
  BestsellerBtn();
};
