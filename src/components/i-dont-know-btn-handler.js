import { elementCreator } from './element-creator';
import { newTaskLine } from './new-task-line';

export const iDontKnowBtnHandler = (taskArray, resultStringNum, data) => {
  const iDontKnowBtn = document.getElementById('i-dont-know-button');
  const thisResultString = document.getElementById(`${resultStringNum}-str`);
  const thisTaskLine = document.getElementById('task-line');

  iDontKnowBtn.onclick = () => {
    thisResultString.innerHTML = `${resultStringNum}`;
    taskArray.forEach(el => {
      elementCreator(
        'div',
        'result-container__string--word',
        el,
        thisResultString,
        el
      );
    });

    while (thisTaskLine.firstChild) {
      thisTaskLine.removeChild(thisTaskLine.firstChild);
    }

    newTaskLine(data, resultStringNum);
  };
};
