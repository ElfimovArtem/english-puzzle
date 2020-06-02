import { gamePageData } from '../constants';

export const applicationStartScreen = () => {
  const resultContainer = document.getElementById('result-container');
  resultContainer.classList.add('start-screen');
  resultContainer.innerHTML = gamePageData.startScreenText;
};
