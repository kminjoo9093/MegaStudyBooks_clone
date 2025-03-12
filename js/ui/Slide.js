import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const VisualSlide = () => {
  const visual = document.querySelector('#visual');
  const visualSlide = visual.querySelector(".swiper");
  if(!visualSlide) return;
  
  function setSlideSize(){
    const content = document.querySelector('.main-header-inner');
    const contentWidth = content.offsetWidth;
    const compStyles = window.getComputedStyle(content);
    const paddingValue = parseInt(compStyles.getPropertyValue('padding-inline'));
    const slideItemWidth = `${(contentWidth - paddingValue*2)/10}rem`;
    // 슬라이드 너비 css에 전달
    visual.style.setProperty('--content-width', slideItemWidth);
    console.log(slideItemWidth)

    const slides = document.querySelectorAll('#visual .swiper-slide');
    slides.forEach(slide=>{
      slide.style.width = slideItemWidth;
    })
  }
  setSlideSize();  
  window.addEventListener('resize', setSlideSize);

  const swiper1 = new Swiper("#visual .swiper", {
    slidesPerView: "auto",
    loop: true,
    // autoplay: {
    //   delay: 2500,
    // },
    observeParents: true,
    observe: true,
    spaceBetween:80,
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

};
