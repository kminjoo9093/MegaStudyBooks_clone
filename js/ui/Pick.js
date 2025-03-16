import { PickData } from "../data/pickData.js";
import { Tab, getClickedTab } from "./Tab.js";

export const RenderPickTab = (dataList = PickData)=>{
  const tab = document.querySelector('.tab-hash');
  if(!tab) return;

  const categories = dataList.map(({category})=>{
    return category;
  })
  const newCategory = [...new Set(categories)];

  const categoryContents = newCategory.map(category=>{
    return `<li class="swiper-slide"><button class="tab-btn"># ${category}</button></li>`;
  }).join('');
  tab.innerHTML = categoryContents;

  Tab('.tab-hash');
}

export const renderPickContents = (dataList = PickData)=>{
  //클릭된 탭이랑 카테고리가 일치하는 컨텐츠만 필터해서 보이도록
  const pickContentsWrap = document.querySelector('.pick-swiper .swiper-wrapper');
  if(!pickContentsWrap) return;

  getClickedTab('.tab-hash .tab-btn', (clickedTabContent)=>{
    const tabContent = clickedTabContent.replace('# ', '');

    const pickList = dataList.filter(({category})=>{
      return tabContent === category;
    })
    let pickContents = pickList.map(({coverImage, description})=>{
      return `<div class="swiper-slide">
                  <a href="#" class="pick-link">
                    <figure>
                      <img src="images/${coverImage}" alt="" />
                      <figcaption>${description}</figcaption>
                    </figure>
                    <p>${description}</p>
                  </a>
                </div>`;
    }).join('');
    pickContentsWrap.innerHTML = pickContents;
  });
}