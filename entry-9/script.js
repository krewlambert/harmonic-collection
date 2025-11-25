const video = document.querySelector('video');
const themeBtn = document.getElementById('theme-switch');

video.addEventListener('play', () => {
  video.classList.add('fullscreen');
});

video.addEventListener('pause', () => {
  video.classList.remove('fullscreen');
});

video.addEventListener('ended', () => {
  video.classList.remove('fullscreen');
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

