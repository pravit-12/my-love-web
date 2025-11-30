(() => {
  // ---------- Memory Game (ใช้รูปแทนอิโมจิ) ----------
  const memoryGame = document.getElementById("memory-game");
  const turnCountEl = document.getElementById("turn-count");
  const gameMessage = document.getElementById("game-message");
  const restartBtn = document.getElementById("restart-game");

  if (!memoryGame || !turnCountEl || !gameMessage || !restartBtn) return;

  // ใช้ไฟล์รูปในโฟลเดอร์ img ชื่อ 01.jpg - 08.jpg
  const imageList = [
    { src: "img/01.jpg", alt: "ภาพที่ 1" },
    { src: "img/02.jpg", alt: "ภาพที่ 2" },
    { src: "img/03.jpg", alt: "ภาพที่ 3" },
    { src: "img/04.jpg", alt: "ภาพที่ 4" },
    { src: "img/01.jpg", alt: "ภาพที่ 5" },
    { src: "img/02.jpg", alt: "ภาพที่ 6" },
    { src: "img/03.jpg", alt: "ภาพที่ 7" },
    { src: "img/04.jpg", alt: "ภาพที่ 8" }
  ];

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let turns = 0;
  let matchedCount = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initGame() {
    memoryGame.innerHTML = "";
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    turns = 0;
    matchedCount = 0;
    turnCountEl.textContent = "0";
    gameMessage.textContent = "";

    // deck = รูปละ 2 ใบ รวม 16 ใบ
    const deck = shuffle([...imageList, ...imageList]);

    deck.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("memory-card");
      card.dataset.imageId = item.src;

      card.innerHTML = `
        <div class="memory-inner">
          <div class="memory-front">?</div>
          <div class="memory-back">
            <img src="${item.src}" alt="${item.alt}">
          </div>
        </div>
      `;

      card.addEventListener("click", () => handleCardClick(card));
      memoryGame.appendChild(card);
    });
  }

  function handleCardClick(card) {
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains("matched")) return;

    card.classList.add("flipped");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;
    lockBoard = true;
    turns++;
    turnCountEl.textContent = String(turns);

    checkForMatch();
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.imageId === secondCard.dataset.imageId;

    if (isMatch) {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      matchedCount += 2;
      resetTurn();

      if (matchedCount === imageList.length * 2) {
        gameMessage.textContent = "เก่งมากเลยย จับคู่ครบทุกภาพแล้วน้า 💗🥺";
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetTurn();
      }, 700);
    }
  }

  function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  restartBtn.addEventListener("click", initGame);

  initGame();
})();
