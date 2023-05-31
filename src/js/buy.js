const id = getParameterByName('id');
    fetchBookDetail(id);
    // Add click event listener to the "구입하기" button
    const buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('click', function() {
        alert('구입이 완료되었습니다.');
    });