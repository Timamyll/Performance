class Nav {
  constructor(rootSelector) {
    try {
      this.root = document.querySelector(rootSelector);
      this.links = this.root.children;
      this.linksObj = {};
      this.createDropMenu();
    } catch (error) {
      console.log(error);
    }
  }
  createDropMenu() {
    for (let i = 0; i < this.links.length; i++) {
      const link = this.links[i];
      if (link.classList.contains("dropdown")) {
        const dropdownMenu = document.createElement("div");
        dropdownMenu.innerHTML = `
          <a href=".././services/target.html" class="nav__linkss">Таргетированная реклама</a>
          <a href="../services/smm.html" class="nav__linkss">SММ</a>
          <a href="../services/reclamachen.html" class="nav__linkss">Контекстная реклама</a>
          <a href="../services/seo.html" class="nav__linkss">SEO</a>
          <a href="../services/create.html" class="nav__linkss">Создание сайтов на заказ</a>
          <a href="../services/logo.html" class="nav__linkss">Дизайн или логотип на заказ</a>
          <a href=".././index.html#prices" class="nav__linkss">Бесплатный Аудит</a>
        `;
        dropdownMenu.className = `drop_menu_${link.dataset.value}`;
        link.style = "position: relative;";
        link.appendChild(dropdownMenu);
        this.linksObj[`${link.dataset.value}`] = dropdownMenu;
      }
    }
  }

  showMenu(dataAttr) {
    this.linksObj[dataAttr].style.display = "flex";
  }

  hideMenu(dataAttr) {
    this.linksObj[dataAttr].style.display = "none";
  }

  getDropDown() {
    for (let i = 0; i < this.links.length; i++) {
      const link = this.links[i];
      if (link.classList.contains("dropdown")) {
        link.addEventListener("mouseover", () => {
          this.showMenu(`${link.dataset.value}`);
        });
        link.addEventListener("click", () => {
          this.showMenu(`${link.dataset.value}`);
        });

        link.addEventListener("mouseout", () => {
          this.hideMenu(`${link.dataset.value}`);
        });
      }
    }
  }
}

const nav = new Nav(".nav__link");
nav.getDropDown();
