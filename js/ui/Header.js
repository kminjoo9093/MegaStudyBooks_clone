export const HeaderHeight = ()=>{
  function setMarginTop(){
    const headerHeight = document.querySelector('.header-inner').offsetHeight;
    const container = document.querySelector('#container');
  
    container.style.setProperty('--headerHeight', `${headerHeight/10}rem`);
  }

  window.addEventListener('resize', setMarginTop);
}