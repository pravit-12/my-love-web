(() => {
  // ---------- Floating hearts generator ----------
  const heartsContainer = document.getElementById("hearts-container");
  const heartEmojis = ["❤️", "💖", "💗", "💕", "💘"];

  function createHeart() {
    if (!heartsContainer) return;
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 10 + Math.random() * 10 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 20000);
  }

  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, Math.random() * 4000);
  }
  setInterval(createHeart, 4000);
})();
