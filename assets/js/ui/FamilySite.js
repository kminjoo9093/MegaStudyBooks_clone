export const FamilySite = ()=>{
  const familyBtn = document.querySelector('.btn-family');
  const familyModal = document.querySelector('.family-list');

  familyBtn.addEventListener('click', ()=>{
    familyModal.open ? familyModal.close() : familyModal.show();
  })
}