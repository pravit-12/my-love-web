(() => {
  const grid = document.getElementById("find-heart-grid");
  const restartBtn = document.getElementById("restart-find-heart");
  const message = document.getElementById("find-heart-message");

  if (!grid || !restartBtn || !message) return;

  let heartIndex = 0;
  let revealed = false;

  function initGame() {
    grid.innerHTML = "";
    message.textContent = "";
    revealed = false;

    const cells = 16;
    heartIndex = Math.floor(Math.random() * cells);

    for (let i = 0; i < cells; i++) {
      const cell = document.createElement("div");
      cell.className = "find-heart-cell";

      const inner = document.createElement("div");
      inner.className = "find-heart-cell-inner";
      inner.textContent = "❔";

      cell.appendChild(inner);

      cell.addEventListener("click", () => handleClick(i, cell, inner));
      grid.appendChild(cell);
    }
  }

  function handleClick(index, cell, inner) {
    if (revealed) return;

    if (index === heartIndex) {
      inner.textContent = "❤️";
      cell.classList.add("revealed");
      message.textContent = "เจอหัวใจของเค้าแล้วน้า ขอบคุณที่หาเจอเสมอเลย 💘";
      revealed = true;
    } else {
      inner.textContent = "💭";
      message.textContent = "ยังไม่ใช่ดวงนี้ แต่เค้าก็ยังเป็นของเธอคนเดียวนะ ลองอีกทีน้า 💕";
    }
  }

  restartBtn.addEventListener("click", initGame);

  initGame();
})();
