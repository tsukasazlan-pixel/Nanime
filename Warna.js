
const colors = [
  '#ff4081', '#d633ff', '#8e44ad', '#3498db',
  '#2980b9', '#5dade2', '#00ffff', '#48e5c2',
  '#2ecc71', '#bada55', '#f1c40f', '#ffe600',
  '#f39c12', '#ff6f61', '#ff4f4f'
];

const colorGrid = document.getElementById('colorGrid');

colors.forEach((color, index) => {
  const div = document.createElement('div');
  div.classList.add('color-option');
  div.style.backgroundColor = color;

  if (index === 0) div.classList.add('selected');

  div.addEventListener('click', () => {
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
    div.classList.add('selected');

    // Simpan ke localStorage
    localStorage.setItem('themeColor', color);
    // Update preview
    const previewBtn = document.querySelector('.btn-preview');
    const icon = document.querySelector('.icon');
    const lanjut = document.querySelector('.btn-lanjut');

    if (previewBtn) previewBtn.style.backgroundColor = color;
    if (icon) icon.style.backgroundColor = color;
    if (lanjut) lanjut.style.backgroundColor = color;
  });

  colorGrid.appendChild(div);
});

// Terapkan warna tersimpan jika ada
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('themeColor');
  if (savedColor) {
    document.querySelectorAll('.color-option').forEach(div => {
      if (div.style.backgroundColor === savedColor) div.classList.add('selected');
    });

    const previewBtn = document.querySelector('.btn-preview');
    const icon = document.querySelector('.icon');
    const lanjut = document.querySelector('.btn-lanjut');

    if (previewBtn) previewBtn.style.backgroundColor = savedColor;
    if (icon) icon.style.backgroundColor = savedColor;
    if (lanjut) lanjut.style.backgroundColor = savedColor;
  }
});
