# **메가스터디북스 클론코딩**

메인페이지와 로그인 페이지 반응형 웹사이트
<br><br>
Demo : https://kminjoo9093.github.io/MegaStudyBooks_clone/
<br><br>

<img src="https://github.com/user-attachments/assets/ec93918f-cab5-4fa9-88cc-d0fa95354be0" height="250px" />
<img src="https://github.com/user-attachments/assets/259e4924-ba71-4476-9853-257210dd5ec5" height="250px" />
<img src="https://github.com/user-attachments/assets/6812cb2b-c74c-4cc8-95e0-47cb3f8a24e3" height="200px" />

<br><br>
### 목표

**1. 데이터 바인딩으로 ui 동적 업데이트<br>**
객체배열 형태로 데이터를 저장 후 활용 <br><br>
**2. SCSS 사용<br>**
SCSS 사용으로 믹스인, 반복문 등을 통해 중복코드를 줄여 효율적으로 스타일링 가능<br><br>
**3. JS 모듈화 방식<br>**
스크립트는 모듈화 방식을 사용하여 코드의 재사용성을 증가 및 의존성 관리

<br><br>
### 사용 스킬
- HTML
- SCSS
- JAVASCRIPT
- SWIPER

<br><br>
### SCSS 로 효율적 코드 작성
```scss
//반응형 미디어쿼리에 적용
$tablet: 990px;
$tablet_s: 750px;
$mobile: 570px;
$mobile_s: 450px;

@mixin screenWidth($width) {
  @media (max-width: $width) {
    @content;
  }
}

//mixin과 조건문 혼합 사용
@mixin searchBtn($parent, $width:3.6rem, $height: 3.6rem){
  @if $parent == "search-form"{
    background: $blue_00 url(../../images/icon_search.svg) no-repeat center / 1.6rem auto;
  } @else {
    background: url(../../images/icon_search_blk.svg) no-repeat center / 100% auto;
  }
  width: $width;
  height: $height;
  @content;
}
```
<br><br>
### 주요 기능

**1. 탭메뉴 선택에 따른 컨텐츠 업데이트**<br><br>
  <img src="https://github.com/user-attachments/assets/28c799a1-feef-4f31-8358-177850a7522f" width="430" />
  <img src="https://github.com/user-attachments/assets/d8e40913-e978-44e9-925c-8de43a86b100" width="430" />

  <br><br>

  <img src="https://github.com/user-attachments/assets/32fb267e-df7c-463d-8221-67105eae0ae9" width="430" />
  <img src="https://github.com/user-attachments/assets/0da6cd37-fddb-41b7-a13a-b56ed313dbba" width="430" />
<br><br><br>
[관련 코드]<br>
1️⃣ GetClickedTab 함수에서 클릭되거나 active클래스를 가진 탭의 textContent를 콜백함수의 인자로 넣어주도록 한다.<br>
2️⃣ 탭 컨텐츠를 렌더링하는 함수 내에서 GetClickedTab 함수를 호출하여 데이터리스트 중 인자로 받은 탭메뉴 텍스트와 카테고리가 일치하는 데이터만 선별한다.(filter메서드 활용)

```Javascript
//Tab.js
export const GetClickedTab = (tabList, callback)=>{
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

//Pick.js
export const RenderPickContents = (dataList = PickData) => {
  //클릭된 탭이랑 카테고리가 일치하는 컨텐츠만 필터해서 보이도록
  const pickContentsWrap = document.querySelector(
    ".pick-swiper .swiper-wrapper"
  );
  if (!pickContentsWrap) return;

  GetClickedTab(".tab-hash .tab-btn", (clickedTabContent) => {
    const tabContent = clickedTabContent.replace("# ", "");

    const pickList = dataList.filter(({ category }) => {
      return tabContent === category;
    });
    let pickContents = pickList
      .map(({ coverImage, description }) => {
        return `<div class="swiper-slide">
                  <a href="#" class="pick-link">
                    <figure>
                      <img src="images/${coverImage}" alt="" />
                      <figcaption>${description}</figcaption>
                    </figure>
                    <p>${description}</p>
                  </a>
                </div>`;
      })
      .join("");
    pickContentsWrap.innerHTML = pickContents;
    ViewMore("#mega-pick", ".pick-swiper", 4);
  });
  PickSlide2();
};
```
<br><br>

**2. 모바일 버전에서 컨텐츠 개수 제한 및 더보기 기능**<br><br>
<img src="https://github.com/user-attachments/assets/7632e63d-8aeb-41f0-bbd8-f1b26ca1077a" height="350" />
<img src="https://github.com/user-attachments/assets/448821d4-2f5e-4c3c-8e36-a2e30286322f" height="400" /><br>
<img src="https://github.com/user-attachments/assets/56bbd6b2-06e6-49f6-853b-0b5224b32aaa" height="350" />
<img src="https://github.com/user-attachments/assets/63912fea-6894-4433-97bb-31a12bdbfced" height="400" />
<br><br><br>
[관련 코드]<br>
1️⃣ 코드의 재사용을 위해 section, slide, showNum을 인수로 받는 ViewMore 함수<br>
2️⃣ handleViewMore 함수에서 showNum 개수만큼만 보이도록 하기 위해 각 슬라이드 인덱스가 showNum - 1 인 것만 보이도록 설정<br>
3️⃣ 더보기 버튼을 누르면 모든 슬라이드가 보이도록 하고, 더보기 버튼은 보이지 않도록 설정<br>
```javascript
//ViewMore.js
export const ViewMore = (section, slide, showNum) => {
  const sectionArea = document.querySelector(section);
  const slideWrapper = sectionArea.querySelector(slide);
  const slideItems = slideWrapper.querySelectorAll(".swiper-slide");
  const viewMoreBtn = sectionArea.querySelector(".btn-more");

  function handleViewMore() {
    slideItems.forEach((item, index) => {
      if (window.innerWidth <= 750) {
        if (index > showNum - 1) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
        viewMoreBtn.style.display = "block";

        viewMoreBtn.addEventListener("click", () => {
          item.style.display = "block";
          viewMoreBtn.style.display = "none";
        });
      } else {
        viewMoreBtn.style.display = "none";
        item.style.display = "block";
      }
    });
  }
  handleViewMore();
  window.addEventListener("resize", handleViewMore);
};

//Slide.js youtube 섹션
  if (window.innerWidth <= 750) changeSlideToFlex();

  function changeSlideToFlex() {
    swiper6.destroy();
    slideWrap.classList.add("block");
    ViewMore("#youtube", ".youtube-swiper", 2);
  }
```

<br><br>
### 이슈
**1. resize 이벤트 발생 시 swiper 오류 해결**<br>

   ❎ 리사이즈 이벤트가 발생할 때 슬라이드가 고정되지 않고 넘어가듯이 보이는 현상<br>
   ❎ 뷰포트 크기에 따른 적절한 이미지 변경이 안되는 현상<br>

  **해결**<br>
  1️⃣ swiper 인스턴스를 전역으로 선언<br>
  2️⃣ swiper를 초기화 시키는 함수 만들어 호출<br>
  3️⃣ resize 이벤트 발생 시 destroy()로 swiper를 삭제하고, 다시 초기화 함수 호출<br>
  ❗️ 순서 중요 : 스와이퍼 삭제 -> 슬라이드 컨텐츠 불러오는 렌더링 함수 실행 -> 스와이퍼 재초기화<br>
  
```javascript
//swiper instance 선언 함수
function initializeSwiperInstance(selector, config) {
  return new Swiper(selector, config);
}

//resize이벤트 핸들링 함수
function handleSwiperResizeEvents(
  swiper,
  selector,
  config,
  callback1 = null,
  callback2 = null,
  callback3 = null
) {
 window.addEventListener("resize", () => {
    if (callback1) {
      callback1(selector, config);
      return;
    }
    if (window.innerWidth <= 750) {
      if (callback2) callback2();
    } else {
      swiper.destroy();
      swiper = initializeSwiperInstance(selector, config);
      if (callback3) callback3();
    }
  });
}

// visual 영역 swiper
export const VisualSlide = () => {
  const visual = document.querySelector("#visual");
  if (!visual) return;
  const visualSlide = visual.querySelector(".swiper");

  let swiper1;  // 전역으로 선언
  const visualConfig = {
    slidesPerView: "auto",
    spaceBetween: 80,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    observeParents: true,
    observe: true,
    centeredSlides: true,
    pagination: {
      el: "#visual .swiper-pagination",
    },
    navigation: {
      nextEl: "#visual .swiper-button-next",
      prevEl: "#visual .swiper-button-prev",
    },
    breakpoints: {
      990: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              " | " +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        },
      },
    },
  };

  swiper1 = initializeSwiperInstance("#visual .swiper", visualConfig); //초기화 함수 호출

  handelSwiperResizeEvents(  //리사이즈 이벤트 발생 시
    swiper1,
    "#visual .swiper",
    visualConfig,
    () => {          
      swiper1.destroy();  // swiper 파괴
      swiper1 = initializeSwiperInstance("#visual .swiper", visualConfig); // 초기화 함수 재호출로 swiper 새롭게 생성
    },
    null,
    null
  );
};
```
<br><br>

**2. GNB transition효과 animation으로 처리하기**<br><br>
 ❎ display속성은 transition속성과 함께 쓸 수 없어서 opacity와 visibility로 gnb요소를 컨트롤하니 <br> gnb의 높이 차지때문에 메인 컨텐츠들이 포커스 받지 못하는 현상<br>

  **해결**<br>
  1️⃣ gnb높이 조절로 해결하려면 시각적 효과가 다름으로 부적절<br>
  2️⃣ display 속성을 사용하고, animation으로 transition 처리<br>
<br>
[관련 코드]
```scss
@keyframes gnbShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.gnb {
  display: none;
  width: 100%;
  border-top: 0.1rem solid $gray_e5;
  box-shadow: 0 0.5rem 1rem rgba($color: #000000, $alpha: 0.1);
  background-color: #fff;
  transition: 0.4s;
  header.open & {
    display: block;
    animation: gnbShow 0.35s linear;
  }
}
```

<br><br>
#### 작업하며 배운 점
- 설명이 필요하지 않은 이미지일 경우더라도 이미지와 텍스트로 함께 레이아웃을 잡아야 하는 경우에는 <br>이미지의 컨테이너를 만들어서 컨테이너로 레이아웃을 잡고, 백그라운드로 이미지를 넣는것이 좋다.
- DOMContentLoaded 와 load 이벤트의 차이<br>
  DOMContentLoaded : 이미지, 스타일시트 등 외부 리소스가 로드되지 않아도 DOM이 준비되면 실행 -> DOM 구조 준비 후 빠르게 접근해야 할 경우 적합
  load : 페이지의 모든 리소스(HTML, CSS, 이미지, 스크립트, 비디오 등)가 완전히 로드되었을 때 실행 -> 이미지 조작, 크기 변경 시 적합
