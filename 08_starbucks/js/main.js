// 검색 영역(.search)클릭 시 input에 강제 focus및 제어
// 검색영역 div와 input 찾기
const searchEl = document.querySelector('.search');
console.log(searchEl);

// const searchElInput = document.querySelector('input');
// console.log(searchElInput);
//문서 전체에서 찾지말고 아래와 같이 최적회
//각 요소도 각각의 querySelector를 가지고 있음
const searchElInput = searchEl.querySelector('input');
console.log(searchElInput);

//검색 영역을 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchElInput.focus(); //요소에 포커스 강제 적용
})


// input 요소에 포커스(focus)되면 placeholder 추가
// 힌트: setAttribute()

searchElInput.addEventListener('focus', function () {
searchElInput.setAttribute('placeholder', '검색어를 입력하세요');
searchEl.classList.add('focused')
});

// input 요소에 포커스 해제(blur)되면 placeholder 초기화
// 힌트: setAttribute()

searchElInput.addEventListener('blur', function () {
searchElInput.removeAttribute('placeholder','');
searchEl.classList.remove('focused')
});

// searchElInput.addEventListener('blur', function () {
//   searchElInput.setAttribute('placeholder','');
//   searchEl.classList.remove('focused')
// });

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgesEl = document.querySelector('header .badges');

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click',function () {
  gsap.to(window, 0.6,{
    scrollTo: 0 
    //페이지의 0px 지점(최상단)으로 이동,scrollToPlugin을 연결해야 사용 가능한 옵션
    });  
})



// 페이지에 스크롤 이벤트 감지를 추가!!
// window : 브라우저 창 전체
window.addEventListener('scroll',function () {
  console.log(window.scrollY); //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  //Quiz!! :
  //페이지스크롤 위치가 500px 넘으면 배치 요소를 숨기고,
  
  // 페이지 스크롤 위치가 500px 안넘으면 배치 요소 보이기
  if (window.scrollY < 500) {
    badgesEl.style.opacity = 1;
    badgesEl.style.visibilty = "visible";

    gsap.to(toTopEl,0.6,{
      opacity :0,
      x:100
  });

    
  } else {
    badgesEl.style.opacity = 0;
    badgesEl.style.visibilty = "hidden";

    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x:0
    });
  
  
  
  //gsap.to(요소, 지속시간, 옵션(데이터 타입은 객체 = {}) :메소드 CSS 속성을 통해 애니메이션 처리 )
  // if (window.scrollY > 500) {
    //   gsap.to(badgeEl, 0.6, {
      //     opasity : 0,
      //     display : 'none'
      //   });
      // } else {
        //   gsap.to(badgeEl, 0.6, {
          //     opasity : 1,
          //     display : 'block'
          //   }); 
          // }
        }});
        
        
        // 순차적으로 VISUAL 섹션 내 요소 보이기
        // 나타날 요소(.fade-in)들을 찾기
        const fadeEl =  document.querySelectorAll('.visual .fade-In');
        fadeEl.forEach(function (fadeEl, index) {
          console.log(fadeEl, index);
          //gsap.to(요소, 지속시간,옵션:{});
          gsap.to(fadeEl,1,{
    opacity :1,
    delay :  (index + 1) * 0.7
    //0.7s, 1.4s, 2.1s, 2.8s
  });

      //상단으로 이동 버튼 숨기기!
      gsap.to(toTopEl,0.6,{
        opacity :0,
        x:100 //x축 100px지점으로 이동
      });

});


// 공지사항 수직 슬라이드 기능
// new키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
//new Swiper('요소',옵션:{});
// 첫번째 인수 ; 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지 참고)
new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직슬라이드
  loop: true, //반복재생 엽, 1->2-> 다시 1
  autoplay:true, //자동 재생 여부
});



new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, //반복재생 엽, 1->2-> 다시 1
  autoplay: {
    delay:5000
  },
  slidesPerView:3,
  spaceBetween : 10,
  centeredSlides:true, 
  pagination : { //페이지 번호 사용
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지네이션 요소 제어 가능 여부
  },
  navigation: { //슬라이드 이전/다음 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

//프로모션 섹션 토글 기능
const promotionEl =  document.querySelector('.promotion')
const promotiontoggleBtn =  document.querySelector('.toggle-promotion')
const promotiontoggleIcon =  promotiontoggleBtn.querySelector('.material-icons')


// Quiz
// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
// 그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)

promotiontoggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    promotiontoggleIcon.textContent = 'upload';
  } else {
    promotionEl.classList.add('hide');
    promotiontoggleIcon.textContent = 'download';

  }
} )

// promotiontoggleBtn.addEventListener('click', 
// function () {
//   if (promotionEl.classList('hide'))
//   {
//     promotionEl.classList.add('hide')
//   } 
//   else {
//     promotionEl.classList.remove('hide')
//     // promotionEl.style.display = 'none'
//     // promotiontoggleIcon.style.display = 'inline-flex'
    
//   }
// });


// 유튜브 섹션 위에 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간,옵션 :{})
// 옵션참고 : 
gsap.to('.floating1',1.5,{
  delay : 1, // 얼마나 늦게 애니메이션을 시작할 것이지 지연 시간을 설정
  y: 30, // 수직으로 얼마나 움직일지 설정, transform : translateY(수치); 와 같음
  repeat : -1, //몇번 반복할지 설정
  yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 재생
  ease : Power1.easeInOut //타이밍 함수 적용, 느리게-빠르게-느리게
});


gsap.to('.floating2',1.5,{
  delay : 3, 
  y: 10, 
  repeat : -1,
  yoyo : true, 
  ease : Power1.easeInOut 
});

gsap.to('.floating3',1.5,{
  delay : 2, 
  y: 50, 
  repeat : -1,
  yoyo : true, 
  ease : Power1.easeInOut 
});

// ScrollMagic 사용
// 그 외 scrollreveal도 있음!!
// 
const spyEls =  document.querySelectorAll('section.scroll-spy');
               //현재꺼내온 변수, 인덱스
               // 이름은 내가 짓는 거임 하지만 직관적으로 지어야함
               //xxxxx,xxxx라고 해도 댐!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ //감시할 장면(Scene) 추가 및 옵션 지정 가능
    triggerElement : spyEl, //보여질 여부를 감시할 요소를 지정
    triggerHook : 0.8 //화면의 80%지점에서 보여짐 여부 감시 (0~1사이 지정)  
  })
  .setClassToggle (spyEl, 'show') //요소가 화면에 보이면 show클래스 추가
  .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당(필수!!)
  // 라이브러리에서 지정한 문법으로 깊게 이해X
  
});



new Swiper('.awards .swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true, //반복재생 엽, 1->2-> 다시 1
  autoplay: {
    delay:1000
  },
  slidesPerView:5,
  spaceBetween : 30,
  // centeredSlides:true, 
  pagination : { //페이지 번호 사용
    el: '.awards .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지네이션 요소 제어 가능 여부
  },
  navigation: { //슬라이드 이전/다음 버튼 사용
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});


//  현재 연도 표사
// 날짜 정보를 가진 JS DATA 객체를 활용(JS 기본 제공 객체 : 여러 데이터들의 묶음)


const yearEL = document.querySelector('.this-year');
yearEL.textContent = new Date().getFullYear();

 //현재 연도의 정보가 숫자 데이터로 반황됨
console.log(new Date().getFullYear());

