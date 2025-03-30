(function () {
  const handleComment = () => {
    const commentInputs = document.querySelectorAll(".comment__input");
    const commentReplyBtns = document.querySelectorAll(".comment__reply__btn");

    commentReplyBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        commentInputs[index].classList.add("comment__input-active");
      });
    });

    commentInputs.forEach((commentInput) => {
      commentInput.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = commentInput.querySelector("input").value;

        if (text) {
          const newCommentContainer = document.createElement("div");
          newCommentContainer.classList.add("comment__container");

          newCommentContainer.innerHTML = `
          <div class="comment">
            <h3 class="comment__text">${text}</h3>
            <button type="button" class="comment__reply__btn">Reply</button>
          </div>
          <form class="comment__input">
            <p>Comment:</p>
            <div>
              <input class="comment" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        `;

          commentInput
            .closest(".comment__container")
            .appendChild(newCommentContainer);

          commentInput.querySelector("input").value = "";
          commentInput.classList.remove("comment__input-active");
          handleComment();
        }
      });
    });
  };

  handleComment();
})();
