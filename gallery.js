
(() => {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  
  grid.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLImageElement)) return;

    const src = target.src;
    const alt = target.alt || "";

    const overlay = document.createElement("div");
    overlay.className = "gallery-lightbox";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
})();
