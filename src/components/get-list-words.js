import { elementCreator } from './element-creator';

export const getListWords = (level, page) => {
  const thisTaskLine = document.getElementById('task-line');
  const wordsURL = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;
  fetch(wordsURL)
    .then((res) => res.json())
    .then(wordsData => {
      console.log(wordsData);
      const myString = wordsData[1]['textExample'].replace(/<b>/g, '').replace(/<\/b>/g, '');
      const taskLineArrayRandomly = myString.split(' ').sort(() => {
        return Math.random() - 0.5;
      });

      taskLineArrayRandomly.forEach(el => {
        elementCreator(
          'div',
          'task-line__word',
          el,
          thisTaskLine,
          el
        );
      });

      const thisWords = thisTaskLine.querySelectorAll('.task-line__word');
      const thisResultString = document.getElementById('1-str');
      thisWords.forEach(word => word.onclick = () => {
        console.log(word.innerHTML);
        elementCreator(
          'div',
          'result-container__string--word',
          word.innerHTML,
          thisResultString,
          word.innerHTML
        );
        word.remove();
      });

      console.log(taskLineArrayRandomly);
    })
};
