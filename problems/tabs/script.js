const listOfTabs = [
  {
    name: "Tab #1",
    title: "Tab 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            odio officia qui mollitia, magnam reprehenderit nulla autem
            asperiores veniam libero ipsa, voluptatum cupiditate repellat at.
            Aliquam quaerat expedita molestias quibusdam.`,
  },
  {
    name: "Tab #2",
    title: "Tab 2",
    content: `While "content" is often used as a singular noun (e.g., "the content of the book"), "contents" is used when referring to the individual items or parts within a container or compilation (e.g., "the contents of a box"). `,
  },
  {
    name: "Tab #3",
    title: "Tab 3",
    content: `In general, "content" refers to the information, ideas, or material contained within something, like a book, website, or piece of art. It encompasses the subject matter, story, or message being conveyed. `,
  },
];

(function () {
  const tabsSidebar = document.querySelector(".tabs__sidebar");
  const tabsContentContainer = document.querySelector(
    ".tabs__content__container"
  );

  listOfTabs.forEach((item, index) => {
    const tab = document.createElement("button");
    const tabContent = document.createElement("div");
    const tabTitle = document.createElement("h1");
    const tabParagraph = document.createElement("p");

    // tabs creation
    tab.textContent = item.name;
    tab.classList.add("tabs__button");
    tab.dataset.forTab = index;
    tabsSidebar.appendChild(tab);
    // -------

    // tabs content creation
    tabContent.classList.add("tabs__content");
    tabContent.dataset.tab = index;
    tabTitle.textContent = item.title;
    tabParagraph.textContent = item.content;

    tabContent.append(tabTitle, tabParagraph);

    tabsContentContainer.appendChild(tabContent);
    // --------

    // making the first tab active by default
    if (index === 0) {
      tab.classList.add("tabs__button--active");
      tabContent.classList.add("tabs__content--active");
    }
  });

  const tabs = document.querySelectorAll(".tabs__button");
  const contentTabs = document.querySelectorAll(".tabs__content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const forTab = tab.dataset.forTab;

      tabs.forEach((tabInner) => {
        const forTabInner = tabInner.dataset.forTab;

        if (forTab == forTabInner) {
          tabInner.classList.add("tabs__button--active");
        } else {
          tabInner.classList.remove("tabs__button--active");
        }
      });

      contentTabs.forEach((contentTab) => {
        const tab = contentTab.dataset.tab;

        if (forTab == tab) {
          contentTab.classList.add("tabs__content--active");
        } else {
          contentTab.classList.remove("tabs__content--active");
        }
      });
    });
  });
})();
