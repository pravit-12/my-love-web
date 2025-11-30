(() => {
  const toggleBtn = document.getElementById("toggle-theme");
  if (!toggleBtn) return;

  const KEY = "lovePageTheme";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "โหมดกลางวัน ☀️";
    } else {
      document.body.classList.remove("dark-mode");
      toggleBtn.textContent = "โหมดกลางคืน 🌙";
    }
  }

  // โหลดธีมที่เคยเลือกไว้
  const saved = localStorage.getItem(KEY) || "light";
  applyTheme(saved);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
  });
})();
