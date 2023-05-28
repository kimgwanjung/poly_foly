function fetchTodayBookList() {
  fetch('_data/todayBook.json')
    .then((response) => response.json())
    .then((data) => {
      const bookListWrapper = document.querySelector(".book-list-wrapper");

      data.data.forEach((item) => {
        const bookItemWrapper = document.createElement("div");
        bookItemWrapper.classList.add("book-item-wrapper");

        const bookImg = document.createElement("img");
        bookImg.classList.add("book-img");
        bookImg.src = item.image;

        const bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title");
        bookTitle.innerText = item.title;

        const author = document.createElement("div");
        author.classList.add("author");
        author.innerText = item.author;

        const price = document.createElement("div");
        price.classList.add("price");

        const priceBold = document.createElement("span");
        priceBold.classList.add("price-bold");
        priceBold.innerText = item.price;

        const priceText = document.createElement("span");
        priceText.innerText = "원";

        price.appendChild(priceBold);
        price.appendChild(priceText);

        bookItemWrapper.appendChild(bookImg);
        bookItemWrapper.appendChild(bookTitle);
        bookItemWrapper.appendChild(author);
        bookItemWrapper.appendChild(price);

        // 클릭 이벤트 추가
        bookItemWrapper.addEventListener("click", () => {
          // 상세 페이지로 이동
          window.location.href = `bookdetail.html?id=${item.id}`;
        });

        bookListWrapper.appendChild(bookItemWrapper);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
