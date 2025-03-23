export const ViewMore = (section, slide, showNum) => {
  const sectionArea = document.querySelector(section);
  const slideWrapper = sectionArea.querySelector(slide);
  const slideItems = slideWrapper.querySelectorAll(".swiper-slide");
  const viewMoreBtn = sectionArea.querySelector(".btn-more");

  function handleViewMore() {
    slideItems.forEach((item, index) => {
      if (window.innerWidth <= 750) {
        if (index > showNum - 1) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
        viewMoreBtn.style.display = "block";

        viewMoreBtn.addEventListener("click", () => {
          item.style.display = "block";
          viewMoreBtn.style.display = "none";
        });
      } else {
        viewMoreBtn.style.display = "none";
        item.style.display = "block";
      }
    });
  }
  handleViewMore();
  window.addEventListener("resize", handleViewMore);
};