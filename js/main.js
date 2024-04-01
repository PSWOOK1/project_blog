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
