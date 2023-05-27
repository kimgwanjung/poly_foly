let pages = 0; // 현재 인덱스 번호
let positionValue = 0; // 이미지 위치값
const IMAGE_WIDTH = 250; // 한 번에 이동할 너비

// DOM 요소 선택
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function next() {
    if (pages < 2) {
        backBtn.removeAttribute('disabled');
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        pages += 1;
    }
    if (pages === 2) {
        nextBtn.setAttribute('disabled', 'true');
    }
    }

    function back() {
    if (pages > 0) {
        nextBtn.removeAttribute('disabled');
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        pages -= 1;
    }
    if (pages === 0) {
        backBtn.setAttribute('disabled', 'true');
    }
    }

    function init() {
    backBtn.setAttribute('disabled', 'true');
    backBtn.addEventListener("click", back);
    nextBtn.addEventListener("click", next);
    }
init();
