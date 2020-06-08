import { resultStringsCreator } from './result-strings-creator';
import { getListWords } from './get-list-words';
import { extremeValuePage } from '../constants';

export const selectButtonHandler = () => {
  const selectButton = document.getElementById('selection-button');
  const resultContainer = document.getElementById('result-container');
  const thisTaskLine = document.getElementById('task-line');
  let levelReceivedData;
  let pageReceivedData;

  selectButton.addEventListener('click', () => {
    if (resultContainer.classList.contains('start-screen')) {
      resultContainer.classList.remove('start-screen');
      resultContainer.innerHTML = '';
      resultStringsCreator();
    }

    const levelInputValue = document.getElementById('level').value;
    const pageInputValue = document.getElementById('page').value;
    const numberOfPageInputValue = (pageInputValue > extremeValuePage) ?
      (pageInputValue - extremeValuePage) - 1 :
      pageInputValue - 1;
    if (levelReceivedData !== levelInputValue || pageReceivedData !== pageInputValue) {
      levelReceivedData = levelInputValue;
      pageReceivedData = pageInputValue;
      getListWords(levelInputValue - 1, numberOfPageInputValue);

      while (thisTaskLine.firstChild) {
        thisTaskLine.removeChild(thisTaskLine.firstChild);
      }

      while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
      }
      resultStringsCreator();
    }
  });
};
