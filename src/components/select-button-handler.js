import { resultStringsCreator } from './result-strings-creator';
import { getListWords } from './get-list-words';

export const selectButtonHandler = () => {
  const selectButton = document.getElementById('selection-button');
  const resultContainer = document.getElementById('result-container');

  selectButton.addEventListener('click', () => {
    if (resultContainer.innerText) {
      resultContainer.classList.remove('start-screen');
      resultContainer.innerHTML = '';
      resultStringsCreator();
    }

    const levelInputValue = document.getElementById('level').value;
    const pageInputValue = document.getElementById('page').value;
    const thisTaskLine = document.getElementById('task-line');
    if (!thisTaskLine.lastChild) {
      getListWords(levelInputValue - 1, pageInputValue - 1);
    }
  });
};
