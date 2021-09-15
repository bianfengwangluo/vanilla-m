import './src/assets/css/common.scss';

const rootValue = 100;

window.addEventListener('load', () => {
  document.documentElement.style.fontSize = (rootValue * Math.min(1024, window.innerWidth)) / 750 + 'px';
});

window.addEventListener('resize', () => {
  document.documentElement.style.fontSize = (rootValue * Math.min(1024, window.innerWidth)) / 750 + 'px';
});
