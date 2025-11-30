(() => {
  const dateInput = document.getElementById("love-start-date");
  const btn = document.getElementById("calc-love-days");
  const result = document.getElementById("love-days-result");

  if (!dateInput || !btn || !result) return;

  btn.addEventListener("click", () => {
    const value = dateInput.value;
    if (!value) {
      result.textContent = "ลองเลือกวันที่ก่อนน้า เค้าอยากรู้เหมือนกันว่าผ่านมากี่วันแล้ว 💗";
      return;
    }
    const start = new Date(value);
    const today = new Date();
    const diffTime = today.setHours(0,0,0,0) - start.setHours(0,0,0,0);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (days < 0) {
      result.textContent = "เหมือนวันที่เลือกจะอยู่ในอนาคตเลยน้า ลองใหม่อีกทีนะ 🥺";
      return;
    }

    result.textContent = `วันนี้เราอยู่ในเรื่องราวเดียวกันมาแล้ว ${days} วันเลยน้า เค้าดีใจมาก ๆ ที่มีเธออยู่ตรงนี้ 💘`;
  });
})();
