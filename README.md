# **메가스터디북스 클론코딩**

메인페이지와 로그인 페이지 반응형 제작
<br><br>
Demo : 
<br><br>

<img src="https://github.com/user-attachments/assets/ec93918f-cab5-4fa9-88cc-d0fa95354be0" height="250px" />
<img src="https://github.com/user-attachments/assets/259e4924-ba71-4476-9853-257210dd5ec5" height="250px" />
<img src="https://github.com/user-attachments/assets/6812cb2b-c74c-4cc8-95e0-47cb3f8a24e3" height="200px" />

<br><br>
### 목표

**1. 데이터 바인딩으로 ui 동적 업데이트<br>**
객체배열 형태로 데이터를 저장 후 활용함으로서 <br><br>
**2. SCSS사용<br>**
SCSS 사용으로 믹스인, 반복문 등을 통해 중복코드를 줄여 효율적으로 스타일링 가능<br><br>
파일 구조화!!!!!!
**3. JS 모듈화 방식<br>**
스크립트는 모듈화 방식을 사용하여 코드의 재사용성을 증가 및 의존성 관리

<br><br>
### 사용 스킬
- HTML
- SCSS
- JAVASCRIPT
- SWIPER

<br><br>
### 주요 기능

- 탭메뉴 선택에 따른 컨텐츠 업데이트<br><br>
  <img src="https://github.com/user-attachments/assets/28c799a1-feef-4f31-8358-177850a7522f" width="430" />
  <img src="https://github.com/user-attachments/assets/d8e40913-e978-44e9-925c-8de43a86b100" width="430" />

  <br><br>

  <img src="https://github.com/user-attachments/assets/32fb267e-df7c-463d-8221-67105eae0ae9" width="430" />
  <img src="https://github.com/user-attachments/assets/0da6cd37-fddb-41b7-a13a-b56ed313dbba" width="430" />
<br><br>
[관련 코드]<br>
```javascript
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

xport const RenderPickContents = (dataList = PickData) => {
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

  

스크린 사이즈별 슬라이드 변형
