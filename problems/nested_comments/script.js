(function () {
  const commentInput = document.querySelector(".comment__input");
  const commentReplyBtn = document.querySelector("#comment__reply__btn");

  commentInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = document.querySelector("#comment");

    console.log(comment.value);
  });

  commentReplyBtn.addEventListener("click", () => {
    commentInput.classList.add("comment__input-active");
  });
})();
