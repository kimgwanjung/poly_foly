// 광고 배너 닫기 버튼 이벤트 처리
const closeAdBtn = document.getElementById('close-ad-btn');
const adBanner = document.getElementById('ad-banner');

closeAdBtn.addEventListener('click', () => {
    adBanner.style.display = 'none';
});