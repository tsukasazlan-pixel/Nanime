const bar = document.getElementById('barFill');
const text = document.getElementById('loadingText');
const subtitle = document.getElementById('subtitle');

const loadingTexts = [
  "Menyiapkan aplikasi...",
  "Memuat konten anime...",
  "Menghubungkan ke server...",
  "Mengatur tema...",
  "Hampir selesai..."
];

const subtitleTexts = [
  "Anime hari ini, healing esok hari.",
  "Nonton anime jadi lebih seru!",
  "Streaming tanpa batas.",
  "Nikmati anime favoritmu.",
  "Selalu update tiap minggu."
];

// Ambil 1 random text saat halaman dibuka
text.textContent = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
subtitle.textContent = subtitleTexts[Math.floor(Math.random() * subtitleTexts.length)];

// Simulasikan loading
let progress = 0;
const interval = setInterval(() => {
  progress += 10;
  bar.style.width = `${progress}%`;

  if (progress >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      window.location.href = "welcome.html"; // ganti halaman tujuan
    }, 500);
  }
}, 300);
