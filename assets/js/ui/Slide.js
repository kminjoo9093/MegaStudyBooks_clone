import { ViewMore } from "./ViewMore.js";

function initializeSwiperInstance(selector, config) {
  return new Swiper(selector, config);
}

function handelSwiperResizeEvents(
  swiper,
  selector,
  config,
  callback1 = null,
  callback2 = null,
  callback3 = null
) {
  window.addEventListener("resize", () => {
    if (callback1) {
      callback1(selector, config);
      return;
    }

    if (window.innerWidth <= 750) {
      if (callback2) callback2();
    } else {
      swiper.destroy();
      swiper = initializeSwiperInstance(selector, config);
      if (callback3) callback3();
    }
  });
}

// visual 영역 swiper
export const VisualSlide = () => {
  const visual = document.querySelector("#visual");
  if (!visual) return;
  const visualSlide = visual.querySelector(".swiper");

  let swiper1;
  const visualConfig = {
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
      el: "#visual .swiper-pagination",
    },
    navigation: {
      nextEl: "#visual .swiper-button-next",
      prevEl: "#visual .swiper-button-prev",
    },
    breakpoints: {
      990: {
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
      },
    },
  };

  swiper1 = initializeSwiperInstance("#visual .swiper", visualConfig);

  handelSwiperResizeEvents(
    swiper1,
    "#visual .swiper",
    visualConfig,
    () => {
      swiper1.destroy();
      swiper1 = initializeSwiperInstance("#visual .swiper", visualConfig);
    },
    null,
    null
  );
};

// MEGA PICK : Tab 슬라이드
export const PickSlide1 = () => {
  const tabSlide = document.querySelector("#mega-pick .tab-swiper");
  if (!tabSlide) return;

  const swiper2 = new Swiper("#mega-pick .tab-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".pick-tab-wrap .swiper-button-next",
      prevEl: ".pick-tab-wrap .swiper-button-prev",
    },
  });
};

// MEGA PICK : book cover 슬라이드
export const PickSlide2 = () => {
  const pickSlide = document.querySelector("#mega-pick .pick-swiper");
  const pickSlideWrap = document.querySelector(".pick-swiper .swiper-wrapper");
  if (!pickSlide) return;

  let swiper3;
  const pickConfig = {
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
  };

  swiper3 = initializeSwiperInstance("#mega-pick .pick-swiper", pickConfig);
  window.addEventListener("load", () => {
    if (window.innerWidth <= 750) {
      addGrid();
    } else {
      swiper3 = initializeSwiperInstance("#mega-pick .pick-swiper", pickConfig);
    }
  });

  handelSwiperResizeEvents(
    swiper3,
    "#mega-pick .pick-swiper",
    pickConfig,
    null,
    () => addGrid(),
    () => {
      pickSlideWrap.classList.remove("grid");
    }
  );

  const addGrid = () => {
    swiper3.destroy();
    pickSlideWrap.classList.add("grid");
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
  const youtubeSlide = document.querySelector("#youtube .swiper");
  if (!youtubeSlide) return;

  const slideWrap = youtubeSlide.querySelector(".swiper-wrapper");

  let swiper6;
  const youtubeConfig = {
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
  };

  swiper6 = initializeSwiperInstance(".youtube-swiper", youtubeConfig);
  if (window.innerWidth <= 750) changeSlideToFlex();

  function changeSlideToFlex() {
    swiper6.destroy();
    slideWrap.classList.add("block");
    ViewMore("#youtube", ".youtube-swiper", 2);
  }

  handelSwiperResizeEvents(
    swiper6,
    ".youtube-swiper",
    youtubeConfig,
    null,
    () => {
      changeSlideToFlex();
    },
    () => {
      slideWrap.classList.remove("block");
    }
  );
};

//event slide
export const EventSlide = () => {
  const eventSlideWrap = document.querySelector(
    ".event-swiper .swiper-wrapper"
  );
  let swiper7;
  const eventConfig = {
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
  };

  swiper7 = initializeSwiperInstance(".event-swiper", eventConfig);
  window.addEventListener("load", () => {
    if (window.innerWidth <= 750) {
      removeSwiper();
    } else {
      swiper7 = initializeSwiperInstance(".event-swiper", eventConfig);
    }
  });

  const removeSwiper = () => {
    swiper7.destroy();
    eventSlideWrap.classList.add("grid");
  };

  handelSwiperResizeEvents(
    swiper7,
    ".event-swiper",
    eventConfig,
    null,
    () => removeSwiper(),
    () => {
      eventSlideWrap.classList.remove("grid");
    }
  );
};
