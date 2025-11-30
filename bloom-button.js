(() => {
  const btn = document.getElementById("bloom-btn");
  const container = document.getElementById("bloom-container");
  if (!btn || !container) return;

  const flowers = ["🌸", "🌷", "💐", "🌺", "🌻"];

  btn.addEventListener("click", () => {
    for (let i = 0; i < 12; i++) {
      const f = document.createElement("div");
      f.className = "bloom-flower";
      f.textContent = flowers[Math.floor(Math.random() * flowers.length)];

      const x = 10 + Math.random() * 80;
      const y = 60 + Math.random() * 20;

      f.style.left = x + "vw";
      f.style.bottom = y + "px";

      document.body.appendChild(f);

      setTimeout(() => f.remove(), 2200);
    }
  });
})();
