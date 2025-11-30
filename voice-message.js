(() => {
  const startBtn = document.getElementById("start-record");
  const stopBtn = document.getElementById("stop-record");
  const statusEl = document.getElementById("voice-status");
  const playback = document.getElementById("voice-playback");

  if (!startBtn || !stopBtn || !statusEl || !playback) return;

  let mediaRecorder = null;
  let chunks = [];

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);

        playback.innerHTML = "";
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = url;
        playback.appendChild(audio);

        statusEl.textContent = "อัดเสร็จแล้วน้า ลองกดเล่นดูได้เลย 💗";
      };

      mediaRecorder.start();
      statusEl.textContent = "กำลังอัดเสียง... พูดกับเธอได้เต็มที่เลย 🎤";
      startBtn.disabled = true;
      stopBtn.disabled = false;
    } catch (err) {
      console.error(err);
      statusEl.textContent = "เบราว์เซอร์ไม่อนุญาตให้อัดเสียง หรือเปิดไมโครโฟนไม่ได้น้า 🥺";
    }
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
      statusEl.textContent = "กำลังจัดการไฟล์เสียงให้อยู่แป๊บนึงน้า 💕";
    }
  }

  startBtn.addEventListener("click", startRecording);
  stopBtn.addEventListener("click", stopRecording);
})();
