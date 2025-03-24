export const HeaderHeight = ()=>{
  function setMarginTop(){
    const headerHeight = Math.ceil(document.querySelector('.header-inner').offsetHeight);
    console.log(headerHeight)
    const container = document.querySelector('#container');
  
    container.style.setProperty('--headerHeight', `${headerHeight/10}rem`);
  }
  setMarginTop();
  window.addEventListener('resize', setMarginTop);
}