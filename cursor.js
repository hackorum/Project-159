AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
  },
  update: function () {
    const fadeBackgroundEl = document.querySelector("#fadeBackground");
    children = fadeBackgroundEl.children;
    if (children.length > 0) {
      var i;
      for (i = 0; i <= children.length; i++) {
        fadeBackgroundEl.removeChild(children[i]);
      }
    } else {
      this.handleMouseClickEvents();
    }
  },
  handleMouseClickEvents: function () {
    this.el.addEventListener("click", () => {
      const { selectedItemId } = this.data;
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      const titleEl = document.querySelector("#app-title");
      const cursorEl = document.querySelector("#cursor-component");
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info", {
          itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        });
      } else {
        fadeBackgroundEl.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        });
      }
    });
  },
  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const comicNames = [
        "spiderman",
        "superman",
        "captain-aero",
        "outer-space",
      ];
      if (comicNames.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "orange" });
      }
    });
  },
  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "dodgerblue" });
        }
      }
    });
  },
});
