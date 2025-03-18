import { EventData } from "../data/eventData.js"
import { EventSlide } from "./Slide.js";

export const renderEventSlideContent = (dataList = EventData)=>{
  const eventSlide = document.querySelector('.event-swiper');
  if(!eventSlide) return;

  const eventSlideWrap = eventSlide.querySelector('.swiper-wrapper');

  const eventContents = dataList.map(({image, title, badge})=>{
    return `<li href="#" class="swiper-slide">
                  <a href="#">
                    <span class="badge">${badge}</span>
                    <h3 class="event-title">${title}</h3>
                    <div class="event-img">
                      <img src="./images/${image}" alt="">
                    </div>
                  </a>
                </li>`
  }).join('');

  eventSlideWrap.innerHTML = eventContents;
  EventSlide();
}