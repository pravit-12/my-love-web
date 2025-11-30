(() => {
  const textarea = document.getElementById("love-letter-input");
  const btn = document.getElementById("save-love-letter");
  const status = document.getElementById("love-letter-status");

  if (!textarea || !btn || !status) return;

  const KEY = "loveLetterForYou";

  // โหลดค่าที่เคยเซฟไว้
  const saved = localStorage.getItem(KEY);
  if (saved) {
    textarea.value = saved;
    status.textContent = "โหลดจดหมายที่เคยเขียนไว้แล้วน้า ✨";
  }

  btn.addEventListener("click", () => {
    const text = textarea.value.trim();
    localStorage.setItem(KEY, text);
    status.textContent = "บันทึกจดหมายเรียบร้อยแล้ว เค้าจะเก็บไว้ให้เธอคนเดียวเลย 💌";
  });
})();
