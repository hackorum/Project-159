AFRAME.registerComponent("info", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/banners/superman-banner.jpeg",
        title: "Superman",
        released_year: "1983",
        description:
          "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
      },
      spiderman: {
        banner_url: "./assets/banners/spiderman-banner.png",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      "captain-aero": {
        banner_url: "./assets/banners/captain-aero-banner.jpeg",
        title: "Captain Aero",
        released_year: "1942",
        description:
          "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946).",
      },
      "outer-space": {
        banner_url: "./assets/banners/outer-space-banner.jpeg",
        title: "Outer Space",
        released_year: "1952",
        description:
          "This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!",
      },
    };
    const { itemId } = this.data;
    const fadeBackgroundEl = document.querySelector("#fadeBackground");
    const el = document.createElement("a-entity");
    el.setAttribute("visible", true);
    el.setAttribute("id", `${itemId}-banner`);
    el.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });
    el.setAttribute("material", { color: "#000" });
    el.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    const item = postersInfo[itemId];
    const image = this.createImage(item);
    const title = this.createTitle(item);
    const description = this.createDescription(item);
    el.appendChild(image);
    el.appendChild(title);
    el.appendChild(description);
    fadeBackgroundEl.appendChild(el);
  },
  createImage: function (item) {
    const el = document.createElement("a-entity");
    el.setAttribute("visible", true);
    el.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    el.setAttribute("material", { src: item.banner_url });
    el.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return el;
  },
  createTitle: function (item) {
    const el = document.createElement("a-entity");
    el.setAttribute("visible", true);
    el.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    el.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return el;
  },
  createDescription: function (item) {
    const el = document.createElement("a-entity");
    el.setAttribute("visible", true);
    el.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    el.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return el;
  },
});
