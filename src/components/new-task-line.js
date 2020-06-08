import { elementCreator } from './element-creator';
import { taskLineHandler } from './task-line-handler';
import { pagePassed } from '../constants';
import { translateNewTaskLine } from './translate-new-task-line';

export const newTaskLine = (arr, dataStringNumber) => {
  const resultContainer = document.getElementById('result-container');

  if (arr[dataStringNumber]) {
    const thisTaskLine = document.getElementById('task-line');
    const newString = arr[dataStringNumber]['textExample'].replace(/<b>/g, '').replace(/<\/b>/g, '');
    const arrayFromNewString = newString.split(' ');
    const taskLineArrayRandomly = newString.split(' ').sort(() => {
      return Math.random() - 0.5;
    });

    console.log(arrayFromNewString);
    console.log(taskLineArrayRandomly);

    taskLineArrayRandomly.forEach(el => {
      elementCreator(
        'div',
        'task-line__word',
        el,
        thisTaskLine,
        el
      );
    });

    translateNewTaskLine(arr, dataStringNumber);
    taskLineHandler((dataStringNumber + 1), arrayFromNewString, dataStringNumber, arr);
  } else {
    resultContainer.classList.add('start-screen');
    resultContainer.innerHTML = pagePassed;
  }
};
