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
  const intervalId = setInterval(() => {
    index = (index + 1) % logos.length; // 다음 이미지로 인덱스 업데이트
    logoElement.src = logos[index]; // 이미지 소스 변경
  }, 500); // 밀리초마다 이미지 변경

  // 마우스가 이미지에서 벗어날 경우 인터벌을 멈춤
  mainHeaderLeft.addEventListener("mouseout", () => {
    clearInterval(intervalId);

    // setTimeout을 사용하여 이미지 변경 전에 약간의 지연을 추가
    setTimeout(() => {
      logoElement.src = logos[0];
    }, 500); // 초기 이미지로 복원되기 전에 0.5초 대기
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

// 바디2 right slide

let startX;
const slider = document.getElementById("slide-container");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  e.preventDefault(); // 스크롤 방지
  const touchX = e.touches[0].clientX;
  const difference = startX - touchX;

  if (difference > 50) {
    // 오른쪽으로 스와이프
    moveToNextSlide();
  } else if (difference < -50) {
    // 왼쪽으로 스와이프
    moveToPrevSlide();
  }
});

function moveToNextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  updateSliderPosition();
}

function moveToPrevSlide() {
  currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1;
  updateSliderPosition();
}

function updateSliderPosition() {
  document.querySelectorAll(".slide").forEach((slide, index) => {
    slide.classList.remove("active-slide");
    if (index === currentSlide - 1) {
      slide.classList.add("active-slide");
    }
  });
}
