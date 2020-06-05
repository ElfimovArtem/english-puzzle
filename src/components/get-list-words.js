import {
  extremeValuePage,
  numberOfLinesMax,
  numberOfLinesMin,
  dataStringNumber,
} from '../constants';
import { newTaskLine } from './new-task-line';

export const getListWords = (level, page) => {
  const wordsURL = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;
  fetch(wordsURL)
    .then((res) => res.json())
    .then(wordsData => {

      const thisPageInputValue = document.getElementById('page').value;
      const thisPageData = [];
      let startPosition;

      if (thisPageInputValue < extremeValuePage) {
        for (startPosition = 0; startPosition < numberOfLinesMin; startPosition++) {
          thisPageData.push(wordsData[startPosition]);
        }
      } else {
        for (startPosition = numberOfLinesMin; startPosition < numberOfLinesMax; startPosition++) {
          thisPageData.push(wordsData[startPosition]);
        }
      }
      console.log(thisPageData);
      newTaskLine(thisPageData, dataStringNumber);
    });
};
