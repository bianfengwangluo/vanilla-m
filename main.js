import './src/css/common.scss';

const rootValue = 100;
document.documentElement.style.fontSize = (rootValue * Math.min(1024, window.innerWidth)) / 750 + 'px';

window.addEventListener('resize', () => {
  document.documentElement.style.fontSize = (rootValue * Math.min(1024, window.innerWidth)) / 750 + 'px';
});
