// footer
window.addEventListener("scroll", function () {
  var header = document.querySelector(".main-header");

  if (window.scrollY > 0) {
    header.style.borderBottom = "1px solid rgba(132, 132, 132, 0.546)";
  } else {
    header.style.borderBottom = "1px solid transparent";
  }
});

// blog logo

const logos = [
  "/img/logo-blog01.png",
  "/img/logo-blog02.png",
  "/img/logo-blog03.png",
  "/img/logo-blog04.png",
  "/img/logo-blog05.png",
  "/img/logo-blog06.png",
  "/img/logo-blog07.png",
  "/img/logo-blog08.png",
  "/img/logo-blog09.png",
];

let index = 0;
const logoElement = document.querySelector(".logo-cycle");
const mainHeaderLeft = document.querySelector(".main-header-left");

mainHeaderLeft.addEventListener("mouseover", () => {
  logoElement.style.transition = "opacity 0.5s";
  const intervalId = setInterval(() => {
    logoElement.style.opacity = 0; // 현재 이미지를 투명하게 만듦
    setTimeout(() => {
      index = (index + 1) % logos.length;
      logoElement.src = logos[index];
      logoElement.style.opacity = 1; // 다음 이미지를 불투명하게 만듦
    }, 250); // opacity 전환을 고려한 지연 시간
  }, 750); // 이미지 전환 주기

  // mouseout 시 최초 이미지 보이기
  mainHeaderLeft.addEventListener("mouseout", () => {
    clearInterval(intervalId);
    logoElement.style.opacity = 0; // 현재 이미지를 투명하게 만듦
    setTimeout(() => {
      logoElement.src = logos[0];
      logoElement.style.opacity = 1; // 첫 번째 이미지로 부드럽게 전환
    }, 250);
  });
});

// 메인1 슬라이드 박스 (광고판)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main-body-1-left-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0"; // 모든 이미지를 투명하게 만듭니다.
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1"; // 현재 이미지만 불투명하게 만듭니다.
  setTimeout(showSlides, 4000); // 이미지 전환 간격
}

// slick-slide 사용

// $(".main-body-1-left").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

// 바디 우측 제거

// if (window.matchMedia("(max-width: 992px)").matches) {
//   document.querySelector(".main-body-1").classList.remove("main-body-1-right");
// }
