import {
  wrapper,
  mainPageData
} from '../constants';
import { elementCreator } from '../components/element-creator';
import { buttonHandler } from '../components/buttonHandler';
import { createGamePage } from './game-page';
import { createStatisticsPage } from './statistics-page';

export const createMainPage = () => {
  elementCreator(
    'h1',
    'main-title',
    mainPageData.mainTitleText,
    wrapper,
    'main-title'
  );

  const mainDescription = document.createElement('p');
  mainDescription.classList.add('main-description');
  elementCreator(
    'span',
    'main-description__first-paragraph',
    mainPageData.mainDescriptionTextFirstParagraph,
    mainDescription,
    'first-paragraph'
  );
  elementCreator(
    'span',
    'main-description__second-paragraph',
    mainPageData.mainDescriptionTextSecondParagraph,
    mainDescription,
    'second-paragraph'
  );
  elementCreator(
    'span',
    'main-description__third-paragraph',
    mainPageData.mainDescriptionTextThirdParagraph,
    mainDescription,
    'third-paragraph'
  );
  wrapper.append(mainDescription);

  const mainControl = document.createElement('div');
  mainControl.classList.add('main-control');
  elementCreator(
    'div',
    'main-control__start-game-button',
    mainPageData.mainControlStartButtonText,
    mainControl,
    'start-game-button'
  );
  elementCreator(
    'div',
    'main-control__statistics-button',
    mainPageData.mainControlStatisticsButtonText,
    mainControl,
    'statistics-button'
  );
  wrapper.append(mainControl);

  buttonHandler('start-game-button', createGamePage);
  buttonHandler('statistics-button', createStatisticsPage);
};
