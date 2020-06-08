export const translateNewTaskLine = (dataArr, strNumb) => {
  const thisTranslateString = document.getElementById('translate');
  thisTranslateString.innerHTML = dataArr[strNumb]['textExampleTranslate'];
};
