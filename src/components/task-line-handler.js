import { elementCreator } from './element-creator';
import { checkButtonHandler } from './check-btn-handler';
import { iDontKnowBtnHandler } from './i-dont-know-btn-handler';

export const taskLineHandler = (resultStringNum, taskArr, dataStringNumb, dataArr) => {
  const thisTaskLineWords = document.querySelectorAll('.task-line__word');
  const thisResultString = document.getElementById(`${resultStringNum}-str`);
  const resultArr = [];

  iDontKnowBtnHandler(taskArr, resultStringNum, dataArr);

  thisTaskLineWords.forEach(word => word.onclick = () => {
    elementCreator(
      'div',
      'result-container__string--word',
      word.innerHTML,
      thisResultString,
      word.innerHTML
    );
    resultArr.push(word.innerHTML);
    word.remove();
  });
  checkButtonHandler(taskArr, resultArr, dataStringNumb, dataArr);
};
