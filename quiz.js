(() => {
  // ---------- Quiz ----------
  const quizForm = document.getElementById("quiz-form");
  const quizResult = document.getElementById("quiz-result");

  if (!quizForm || !quizResult) return;

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let score = 0;
    let total = 3;

    ["q1", "q2", "q3"].forEach((name) => {
      const selected = quizForm.querySelector(`input[name="${name}"]:checked`);
      if (selected && selected.value === "1") {
        score++;
      }
    });

    let message = `ได้ ${score} / ${total} คะแนน `;
    if (score === total) {
      message += "รู้จักเค้าดีที่สุดเลยยย เค้ารักเธอที่สุดน้า 💘";
    } else if (score >= total - 1) {
      message += "เก่งมากแล้วน้า เค้าดีใจที่เธอใส่ใจเค้าขนาดนี้ 💕";
    } else {
      message += "ไม่เป็นไรเลย เค้าจะค่อย ๆ เล่าเรื่องของเค้าให้เธอฟังเพิ่มเองนะ 💗";
    }

    quizResult.textContent = message;
  });
})();
