export const Popup = ()=>{
  const popup = document.querySelector('.popup');
  const popupLink = popup.querySelector('a');
  const closeBtn = document.querySelector('.popup-close');
  const imgPc = document.querySelector('.popup-img_pc');
  const imgMo = document.querySelector('.popup-img_m');

  popupLink.addEventListener('click', (e)=>{
    e.preventDefault();
  })

  const popupShow = ()=>{
    popup.classList.add('show');
  }

  popupShow();
  closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('show');
  })

  const imgChange = ()=>{
    if(window.innerWidth <= 990){
      imgPc.classList.remove('show');
      imgMo.classList.add('show');
    } else {
      imgPc.classList.add('show');
      imgMo.classList.remove('show');
    }
  }

  imgChange();
  window.addEventListener('resize', imgChange);
}