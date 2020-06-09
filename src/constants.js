export const wrapper = document.querySelector('.wrapper');
export const hints = document.createElement('div');
export const levelSelection = document.createElement('form');

export const mainPageData = {
  mainTitleText: '« English-Puzzle »',
  mainDescriptionTextFirstParagraph: 'English-Puzzle is an online service for learning and practicing English, which is used by 17 million people around the world!',
  mainDescriptionTextSecondParagraph: 'We solve the main problem of students of a foreign language - we support motivation. Our users learn English using the materials we have developed in English, undergo exciting training to consolidate vocabulary, and complete tasks.',
  mainDescriptionTextThirdParagraph: `Rather, click on the button <strong>"Start Game"</strong> and, perhaps tomorrow, you will know English as your native language!`,
  mainControlStartButtonText: 'START GAME',
  mainControlStatisticsButtonText: 'STATISTICS'
};

export const gamePageData = {
  gamePageMainButtonText: 'MAIN',
  gamePageStatisticsButtonText: 'STATISTICS',
  inputLevelMax: 6,
  inputPageMax: 60,
  levelSelectionButtonText: 'SELECT',
  gamePageIDontKnowText: `I don't know`,
  gamePageCheckText: 'Check',
  numberOfLines: 10,
  startScreenText: 'In order to start learning English, please select the level and page with which you want to start and then press the "SELECT" button. Good luck and have fun!'
};

export const statisticsPageData = {
  mainButtonText: 'MAIN',
  gameButtonText: 'START GAME',
  descriptionText: 'Здесь должна быть статистика... но это не точно.. '
};

export const extremeValuePage = 30;
export const numberOfLinesMin = 10;
export const numberOfLinesMax = 20;
export let dataStringNumber = 0;
export const pagePassed = 'Congratulations! You have completed all the tasks on this page - go to another! (Select another page and press "SELECT")';
