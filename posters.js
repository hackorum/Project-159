AFRAME.registerComponent("posters", {
  init: function () {
    this.createCards();
  },
  createBorder: function (position, id) {
    const element = document.createElement("a-entity");
    element.setAttribute("id", id);
    element.setAttribute("position", position);
    element.setAttribute("visible", true);
    element.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 30,
    });
    element.setAttribute("cursor-listener", {});
    element.setAttribute("material", { color: "dodgerblue", opacity: 1 });
    return element;
  },
  createTitle: function (item) {
    const element = document.createElement("a-entity");
    element.setAttribute("text", {
      value: item.title,
      font: "dejavu",
      width: 50,
      align: "center",
      color: "black",
    });
    element.setAttribute("visible", true);
    element.setAttribute("position", { x: 0, y: -20, z: 0 });
    return element;
  },
  createThumbnail: function (item) {
    const element = document.createElement("a-entity");
    element.setAttribute("visible", true);
    element.setAttribute("geometry", {
      primitive: "plane",
      width: 18,
      height: 28,
    });
    element.setAttribute("material", { src: item.url });
    element.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    return element;
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/posters/captain-aero-poster.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/posters/outer-space-poster.jpg",
      },

      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/posters/spiderman-poster.jpg",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/posters/superman-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);

      // Title Text Element
      const titleEl = this.createTitle(item);
      borderEl.appendChild(titleEl);

      this.el.appendChild(borderEl);
    }
  },
});
