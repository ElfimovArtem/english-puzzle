import { wrapper, statisticsPageData } from '../constants';
import { elementCreator } from '../components/element-creator';
import { buttonHandler } from '../components/buttonHandler';
import { createMainPage } from './main-page';
import { createGamePage } from './game-page';

export const createStatisticsPage = () => {
  const statisticsPageNavigation = document.createElement('div');
  statisticsPageNavigation.classList.add('statistics-page-navigation');

  elementCreator(
    'div',
    'statistics-page-navigation__main-button',
    statisticsPageData.mainButtonText,
    statisticsPageNavigation,
    'statistics-page__main-button'
  );
  elementCreator(
    'div',
    'statistics-page-navigation__start-game-button',
    statisticsPageData.gameButtonText,
    statisticsPageNavigation,
    'statistics-page__start-game-button'
  );

  wrapper.append(statisticsPageNavigation);

  elementCreator(
    'div',
    'statistics-page-description',
    statisticsPageData.descriptionText,
    wrapper,
    'statistics-page-description'
  );

  buttonHandler('statistics-page__main-button', createMainPage);
  buttonHandler('statistics-page__start-game-button', createGamePage);
};
