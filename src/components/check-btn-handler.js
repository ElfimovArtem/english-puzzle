import {newTaskLine} from './new-task-line';

export const checkButtonHandler = (taskArr, resultArr, dataStrNum, dataArray) => {
  const checkBtn = document.getElementById('check-button');
  const thisTaskLine = document.getElementById('task-line');
  checkBtn.onclick = () => {
    if (JSON.stringify(taskArr) === JSON.stringify(resultArr)) {
      console.log('true');
      dataStrNum++;
      newTaskLine(dataArray, dataStrNum);
    } else {
      console.log('false');
      while (thisTaskLine.firstChild) {
        thisTaskLine.removeChild(thisTaskLine.firstChild);
      }
      const thisResultLine = document.getElementById(`${(dataStrNum + 1)}-str`);
      thisResultLine.innerHTML = `${dataStrNum + 1}`;
      newTaskLine(dataArray, dataStrNum);
    }
  };
};
