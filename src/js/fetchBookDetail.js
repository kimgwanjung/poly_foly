function fetchBookDetail(id) {
  fetch(`_data/bookDetail_${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "d");
      const bookData = data.data[0];

      const imgWrapper = document.querySelector(".img-wrapper");
      const bookImg = imgWrapper.querySelector(".book-imgs");
      bookImg.src = bookData.image;

      const titleElement = document.querySelector(".title");
      titleElement.innerText = bookData.title;

      const pricePercentElement = document.querySelector(".price-percent");
      pricePercentElement.innerText = bookData.percent;

      const priceElement = document.querySelector(".price");
      priceElement.innerText = bookData.price;

      const pointElement = document.querySelector(".point");
      pointElement.innerText = bookData.point;

      const startDateElement = document.querySelector(".start-date");
      startDateElement.innerText = bookData.startDate;

      const addressElement = document.querySelector(".address");
      addressElement.innerText = bookData.address;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
