(function () {
  let rating = 0;
  const starList = document.querySelectorAll(".star");
  const result = document.querySelector("#rating");

  // on mouse enter
  starList.forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
      starList.forEach((star, i) => {
        if (i <= index) {
          star.classList.add("star--active");
        } else {
          star.classList.remove("star--active");
        }
      });
    });
  });

  // on mouse leave
  starList.forEach((star, index) => {
    star.addEventListener("mouseleave", () => {
      starList.forEach((star, i) => {
        if (i <= index) {
          star.classList.remove("star--active");
        }
      });

      // restoring the state
      starList.forEach((star, i) => {
        if (i < rating) {
          star.classList.add("star--active");
        }
      });
    });
  });

  // on mouse click
  starList.forEach((star, index) => {
    star.addEventListener("click", () => {
      rating = index + 1;
      result.innerText = rating;

      starList.forEach((star, i) => {
        if (i <= index) {
          star.classList.add("star--active");
        } else {
          star.classList.remove("star--active");
        }
      });
    });
  });
})();
