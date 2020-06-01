import { elementCreator, levelFormCreator } from '../components/element-creator';
import { gamePageData, hints, wrapper, levelSelection } from '../constants';
import { buttonHandler, clearMenuBlock } from '../components/buttonHandler';
import { createMainPage } from './main-page';
import { hintButtonCreator } from '../components/hint-button-creator';

export const createGamePage = () => {

  const gamePageNavigation = document.createElement('div');
  gamePageNavigation.classList.add('game-page-navigation');
  elementCreator(
    'div',
    'game-page-navigation__main-button',
    gamePageData.gamePageMainButtonText,
    gamePageNavigation,
    'game-page__main-button'
  );
  elementCreator(
    'div',
    'game-page-navigation__statistics-button',
    gamePageData.gamePageStatisticsButtonText,
    gamePageNavigation,
    'game-page__statistics-button'
  );

  const gamePageMenu = document.createElement('div');
  gamePageMenu.classList.add('game-page__menu');


  levelSelection.classList.add('game-page__level-selection');
  levelFormCreator('Level', '6');
  levelFormCreator('Page', '60');

  hints.classList.add('game-page__hints');
  hintButtonCreator('hints__voice-button', 'fa-volume-up');
  hintButtonCreator('hints__file-button', 'fa-file-text-o');
  hintButtonCreator('hints__music-button', 'fa-music');
  hintButtonCreator('hints__picture-button', 'fa-picture-o');

  gamePageMenu.append(levelSelection);
  gamePageMenu.append(hints);
  wrapper.append(gamePageNavigation);
  wrapper.append(gamePageMenu);

  buttonHandler('game-page__main-button', createMainPage);
  clearMenuBlock();
  buttonHandler('game-page__statistics-button', '');
};

