import { elementCreator } from './element-creator';
import { gamePageData } from '../constants';

export const resultStringsCreator = () => {
  const resultContainer = document.getElementById('result-container');

  for (let lineCounter = 0; lineCounter < gamePageData.numberOfLines; lineCounter ++) {
    elementCreator(
      'div',
      'result-container__string',
      (lineCounter + 1),
      resultContainer,
      `${lineCounter + 1}-str`
    );
  }
};
