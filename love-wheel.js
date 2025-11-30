(() => {
  const wheel = document.getElementById("love-wheel");
  const btn = document.getElementById("spin-wheel");
  const result = document.getElementById("wheel-result");

  if (!wheel || !btn || !result) return;

  const duties = [
    "กอดเธอ 10 วิเต็ม ๆ 🤗",
    "หอมแก้มเธอ 1 ทีแบบฟรุ้งฟริ้ง 😚",
    "ส่งรูปหน้าตัวเองตอนคิดถึงเธอให้ดูตอนนี้เลย 📸",
    "โทรหาเธอ 10 นาทีเต็ม ห้ามวางก่อน 🥺",
    "พาเธอไปเดทพิเศษในเร็ว ๆ นี้ 💑",
    "เขียนข้อความหวาน ๆ ให้เธอ 3 บรรทัด 💌"
  ];

  let spinning = false;

  btn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;
    result.textContent = "กำลังหมุน... ลุ้นอยู่น้า 💗";
    wheel.classList.add("spinning");

    const chosen = duties[Math.floor(Math.random() * duties.length)];

    setTimeout(() => {
      wheel.classList.remove("spinning");
      result.textContent = `วันนี้เค้าต้อง: ${chosen}`;
      spinning = false;
    }, 1200);
  });
})();
