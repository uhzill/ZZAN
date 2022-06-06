/* 가로스크롤 */
gsap.registerPlugin(ScrollTrigger);
const pageContainer = document.querySelector(".container");

const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});


window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;


  // 고정 및 수평 스크롤

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      trigger: "#sectionPin",
      scroller: pageContainer, //locomotive-scroll
      scrub: true, // 부드러운 스크러빙(scrub: 1스크롤바 잡는데 1초 걸림ㅁ)
      pin: true, // 활성 상태에서 트리거 요소 고정
      start: "top top",
      endTrigger : "#video"
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); 

  ScrollTrigger.refresh();
});




// 마우스 커서
window.onload = function(){
  let mouseCursor = document.querySelector(".cursor");// 마우스커서
  let logo = document.querySelectorAll("#logo"); //로고 링크
  let navLinks = document.querySelectorAll("#gnb li a"); //메뉴 링크

  // 마우스 움직이기
  // window 객체에 scroll & mouse 이벤트를 추가하고 myCursor함수 실행되도록 함
  window.addEventListener("scroll", myCursor);
  window.addEventListener("mousemove", myCursor);

  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function myCursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
  }

  logo.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.style.zIndex = "1";
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.style.zIndex = "1";
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });



// 메뉴 클릭시 스크롤 이동
  $(function () {
    $('li > a').click(function (){
      $('html, body').animate({scrollTop: $(this.hash).offset.top}, 10000);
    });
  });



  // let container = document.querySelector('.container').style.transform;
  // //console.log(container);

  // if(container == "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -800, 0, 1)"){
  //   document.getElementById("overview1").classList.add("active");
  //   console.log("헤이헤이헤이");
  // }

}