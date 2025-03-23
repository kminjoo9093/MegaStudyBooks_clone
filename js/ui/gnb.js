export const HandleMenuBtn = ()=>{
  const header = document.querySelector('header')
  const menuBtn = document.querySelector('.btn-menu');

  menuBtn.addEventListener('click', ()=>{
    header.classList.toggle('open');
  })
}