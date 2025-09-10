
const container = document.querySelector('.container');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

container.addEventListener('scroll', () => {
  const index = Math.round(container.scrollTop / window.innerHeight);
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
});


document.querySelector('.strt-btn').addEventListener('click', () => {
  window.location.href = 'ganti-warna.html'; // ganti dengan halaman utama kamu
});