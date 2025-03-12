export const HandleMenuBtn = ()=>{
  const header = document.querySelector('header')
  const menuBtn = document.querySelector('.btn-menu');

  menuBtn.addEventListener('click', ()=>{
    header.classList.toggle('open');
  })
}

// export const handleGnbColHeight = ()=>{
//   const gnbCols = document.querySelectorAll('.gnb-col');
//   const gnbColsHeights = [...gnbCols].map(col=>{
//     return col.offsetHeight;
//   })
//   gnbCols.forEach(col=>{
//     col.style.height = `Math.max(${gnbColsHeights})px`;
//   })
// }