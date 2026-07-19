window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2500);
};

document.getElementById("blowBtn").addEventListener("click", function () {

  // Surprise message
  document.getElementById("surprise").style.display = "block";

  // Cake changes
  document.getElementById("cake").innerHTML = "🎂✨";

  // Confetti
  if (typeof confetti === "function") {
    confetti({
      particleCount: 250,
      spread: 180,
      origin: { y: 0.6 }
    });
  }

  // Fireworks effect
  let count = 0;
  let interval = setInterval(() => {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 100,
        spread: 360,
        startVelocity: 40,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5
        }
      });
    }

    count++;
    if (count >= 8) {
      clearInterval(interval);
    }
  }, 500);

  // Music
  const music = document.getElementById("music");
  if (music) {
    music.play().catch(() => {});
  }

  alert("🎉 Happy Birthday Anjana Pun Magar! ❤️");
});
