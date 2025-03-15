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

// MEGA PICK : Tab 슬라이드
export const PickSlide1 = ()=>{
  const tabSlide = document.querySelector('#mega-pick .tab-swiper');
  if(!tabSlide) return;

  const swiper2 = new Swiper("#mega-pick .tab-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".tab-swiper .swiper-button-next",
      prevEl: ".tab-swiper .swiper-button-prev",
    },
  });
}

// MEGA PICK : book cover 슬라이드
export const PickSlide2 = () => {
  const pickSlide = document.querySelector('#mega-pick .pick-swiper');
  const pickSlideWrap = document.querySelector('.pick-swiper .swiper-wrapper');
  if(!pickSlide) return;

  let swiper3;
  function initializeSwiper (){
    swiper3 = new Swiper("#mega-pick .pick-swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".pick-swiper .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".pick-swiper .swiper-button-next",
        prevEl: ".pick-swiper .swiper-button-prev",
      },
      breakpoints: {
        990: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }
    });
  }

  window.onload = function(){
    initializeSwiper();
    if(window.innerWidth <= 750){
      addGrid();
    } 
  }

  window.addEventListener('resize', ()=>{
    if(window.innerWidth <= 750){
      addGrid();
    } else {
      pickSlideWrap.classList.remove('grid');
      initializeSwiper();
    }
  })

  const addGrid = ()=>{
    swiper3.destroy();
    pickSlideWrap.classList.add('grid');
  }
}