import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { VisualData } from "../data/visualData.js";
import { ViewMore } from "./ViewMore.js";

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
export const PickSlide1 = () => {
  const tabSlide = document.querySelector("#mega-pick .tab-swiper");
  if (!tabSlide) return;

  const swiper2 = new Swiper("#mega-pick .tab-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".tab-swiper .swiper-button-next",
      prevEl: ".tab-swiper .swiper-button-prev",
    },
  });
};

// MEGA PICK : book cover 슬라이드
export const PickSlide2 = () => {
  const pickSlide = document.querySelector("#mega-pick .pick-swiper");
  const pickSlideWrap = document.querySelector(".pick-swiper .swiper-wrapper");
  if (!pickSlide) return;

  let swiper3;
  function initializeSwiper() {
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
      },
    });
  }

  window.addEventListener('load', ()=>{
    initializeSwiper();
    if (window.innerWidth <= 750) {
      addGrid();
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 750) {
      addGrid();
    } else {
      pickSlideWrap.classList.remove("grid");
      initializeSwiper();
    }
  });

  const addGrid = () => {
    swiper3.destroy();
    pickSlideWrap.classList.add("grid");
    ViewMore("#mega-pick", ".pick-swiper", 4);
  };
};

// 메인 배너 슬라이드
export const BannerSlide = () => {
  const banner = document.querySelector(".main-banner");
  if (!banner) return;

  const swiper4 = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".banner-swiper .swiper-pagination",
    },
  });
};

// 베스트셀러 슬라이드
export const BestSellerSlide = () => {
  const bestSlide = document.querySelector(".bestseller-swiper");
  if (!bestSlide) return;

  const swiper5 = new Swiper(".bestseller-swiper", {
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: "#bestseller .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: "#bestseller .swiper-button-next",
      prevEl: "#bestseller .swiper-button-prev",
    },
    breakpoints: {
      990: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 40,
      },
    },
  });
};

// 유튜브 슬라이드
export const YoutubeSlide = () => {
  const youtubeSlide = document.querySelector(".youtube-swiper");
  if (!youtubeSlide) return;

  const slideWrap = youtubeSlide.querySelector(".swiper-wrapper");

  let swiper6;
  function initializeSwiper() {
    swiper6 = new Swiper(".youtube-swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: "#youtube .swiper-button-next",
        prevEl: "#youtube .swiper-button-prev",
      },
      breakpoints: {
        990: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        750: {
          slidesPerView: 1.6,
          spaceBetween: 10,
        },
      },
    });
  }

  window.addEventListener("load", () => {
    initializeSwiper();
    if (window.innerWidth < 750) {
      changeSlideToFlex();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 750) {
      changeSlideToFlex();
    } else {
      swiper6.destroy();
      slideWrap.classList.remove("block");
      initializeSwiper();
    }
  });

  function changeSlideToFlex() {
    swiper6.destroy();
    slideWrap.classList.add("block");
    ViewMore("#youtube", ".youtube-swiper", 2);
  }
};

//event slide
export const EventSlide = ()=>{
  const eventSlideWrap = document.querySelector('.event-swiper .swiper-wrapper');
  let swiper7;
  function initializeSwiper() {
    swiper7 = new Swiper(".event-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: "#event .swiper-button-next",
        prevEl: "#event .swiper-button-prev",
      },
      breakpoints: {
        990: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        750: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
      },
    });
  }
  window.addEventListener('load', ()=>{
    initializeSwiper();
    if(window.innerWidth < 750){
      removeSwiper();
    }
  })

  window.addEventListener("resize", () => {
    if(window.innerWidth < 750){
      removeSwiper();
    } else {
      initializeSwiper();
      eventSlideWrap.classList.remove('grid');
    }
  });

  const removeSwiper = ()=>{
    swiper7.destroy();
    eventSlideWrap.classList.add('grid');
  }
}
