export const ViewMore = (section, slide, showNum)=>{
  const sectionArea = document.querySelector(section);
  const slideWrapper = sectionArea.querySelector(slide);
  const slideItems = slideWrapper.querySelectorAll('.swiper-slide');
  const viewMoreBtn = sectionArea.querySelector('.btn-more');

  slideItems.forEach((item, index)=>{
    // const itemDisplay = item.style.display;
    // const btnDisplay = viewMoreBtn.style.display;
    if(index > showNum - 1 ){
      item.style.display = 'none';
      viewMoreBtn.addEventListener('click', ()=>{
        item.style.display = 'block';
        viewMoreBtn.style.display = 'none';
      })
    }
    if(viewMoreBtn.style.display === 'none'){
      item.style.display = 'block';
    }
  })
}