export const Tab = (tabWrap)=>{
  const tab = document.querySelector(tabWrap);
  if(!tab) return;
  const tabBtns = tab.querySelectorAll('button');

  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      removeClass();
      addClass(btn);
    })
  })

  const removeClass = ()=>{
    tabBtns.forEach(btn=>{
      btn.classList.remove('active');
    })
  }

  const addClass = (clickedBtn)=>{
    clickedBtn.classList.add('active');
  }

  // 로드 시 첫 버튼 active
  tabBtns.forEach((btn, index)=>{
    if(index === 0){
      addClass(btn);
    }
  })
}

export const ClickedTab = (tabList, callback)=>{
  const tabs = document.querySelectorAll(tabList);
  [...tabs].forEach((tab)=>{
    if(tab.classList.contains('active')){
      callback(tab.textContent);
    }
    tab.addEventListener('click', ()=>{
      callback(tab.textContent);
    })
  })
}