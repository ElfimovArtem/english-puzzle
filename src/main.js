import { createMainPage } from './pages/main-page';
import { wrapper } from './constants';
import './styles.css';
import './media-queries.css';

createMainPage();

export const startGameBtn = document.getElementById('start-game-button');
startGameBtn.addEventListener('click', () => {
  wrapper.remove();
  console.log('после этого отрисовываетс страница игры!')
});
export const statisticsBtn = document.getElementById('statistics-button');
statisticsBtn.addEventListener('click', () => {
  wrapper.remove();
  console.log('после этого отрисовываетс страница статистики!')
});
