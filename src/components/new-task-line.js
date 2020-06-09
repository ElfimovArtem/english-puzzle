import { elementCreator } from './element-creator';
import { taskLineHandler } from './task-line-handler';
import { pagePassed } from '../constants';
import { translateNewTaskLine } from './translate-new-task-line';
import { addSound } from './add-sound';

export const newTaskLine = (arr, dataStringNumber) => {
  const resultContainer = document.getElementById('result-container');
  const voiceBtn = document.getElementById('voice');

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

    addSound(arr, dataStringNumber);
    translateNewTaskLine(arr, dataStringNumber);
    taskLineHandler((dataStringNumber + 1), arrayFromNewString, dataStringNumber, arr);
  } else {
    resultContainer.classList.add('start-screen');
    resultContainer.innerHTML = pagePassed;

    while (voiceBtn.children[1]) {
      voiceBtn.children[1].remove();
    }

    const pageInput = document.getElementById('page');
    const levelInput = document.getElementById('level');
    let pageNum = Number.parseInt(pageInput.value);
    let levelNum = Number.parseInt(levelInput.value);
    if (pageNum < 60) {
      pageInput.value = pageNum += 1;
    } else {
      levelInput.value = levelNum += 1;
      pageInput.value = 1;
    }
  }
};
