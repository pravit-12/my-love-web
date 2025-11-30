(() => {
  // ---------- Cover to Main ----------
  const cover = document.getElementById("cover");
  const mainContent = document.getElementById("main-content");
  const enterBtn = document.getElementById("enter-btn");
  const bgMusic = document.getElementById("bg-music");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      if (cover) {
        cover.style.opacity = "0";
        cover.style.transition = "opacity 0.6s ease";
        setTimeout(() => {
          cover.style.display = "none";
          if (mainContent) {
            mainContent.style.display = "block";
          }
        }, 600);
      }

      // ถ้ามีเพลง และเบราว์เซอร์อนุญาต จะเริ่มเล่น
      if (bgMusic && bgMusic.src) {
        bgMusic.play().catch(() => {});
      }
    });
  }

  // ---------- Navigation ----------
  const navButtons = document.querySelectorAll(".nav button");
  const sections = document.querySelectorAll(".section");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navButtons.forEach((b) => b.classList.remove("active"));
      sections.forEach((sec) => sec.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.dataset.target;
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.add("active");
      }
    });
  });
})();
