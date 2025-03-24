const accordionData = [
  {
    question: "What is web development in simple words?",
    answer:
      "In simple terms, web development is the process of creating and maintaining websites, encompassing everything from designing the look and feel to ensuring the website functions correctly and interacts with users.",
  },
  {
    question: "What are 3 types of web development?",
    answer:
      "There are three main types of web development: front-end development, back-end development, and full stack development.",
  },
];

(function () {
  const accordionContainer = document.querySelector(".accordion");

  accordionData.forEach((item) => {
    // Inject accordion items dynamically

    const accordionItem = document.createElement("div");
    const accordionItemHeader = document.createElement("div");
    const accordionItemContent = document.createElement("div");

    accordionItem.classList.add("accordion__item");
    accordionItemHeader.classList.add("accordion__item-header");
    accordionItemContent.classList.add("accordion__item-content");

    accordionItemHeader.textContent = item.question;
    accordionItemContent.textContent = item.answer;

    accordionItem.append(accordionItemHeader, accordionItemContent);

    accordionContainer.appendChild(accordionItem);
  });

  // handle the toggle states
  const accordionList = document.querySelector(".accordion").children;
  const firstAccordionItemContent = document.querySelector(
    ".accordion__item-content"
  );
  const firstAccordionItemHeader = document.querySelector(
    ".accordion__item-header"
  );

  firstAccordionItemContent.style.display = "block";
  firstAccordionItemHeader.classList.add("accordion__item-header--active");

  Object.keys(accordionList).forEach((item, index) => {
    accordionList[item].addEventListener("click", () => {
      const existingStyle = accordionList[item].children[1].style.display;

      accordionList[item].children[0].classList.toggle(
        "accordion__item-header--active"
      );

      if (existingStyle == "block") {
        accordionList[item].children[1].style.display = "none";
      } else {
        accordionList[item].children[1].style.display = "block";
      }

      // toggle other items
      Object.keys(accordionList).forEach((nestedItem, nestedIndex) => {
        if (index !== nestedIndex) {
          accordionList[nestedItem].children[0].classList.remove(
            "accordion__item-header--active"
          );

          accordionList[nestedItem].children[1].style.display = "none";
        }
      });
    });
  });
})();
