function fetchSuggestionBookList() {
  fetch("_data/suggestionBook.json")
    .then((response) => response.json())
    .then((data) => {
      const bookListWrapper = document.querySelector(
        ".book-list-suggestion-wrapper"
      );

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

        bookListWrapper.appendChild(bookItemWrapper);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
