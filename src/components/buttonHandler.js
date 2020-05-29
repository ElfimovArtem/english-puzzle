import { hints, wrapper } from '../constants';

export const buttonHandler = (btnId, pageCreator) => {
  const selectedButton = document.getElementById(btnId);
  selectedButton.addEventListener('click', () => {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    pageCreator();
  });
};

export const clearHintBlock = () => {
  const mainBTN = document.getElementById('game-page__main-button');
  mainBTN.addEventListener('click', () => {
    while (hints.firstChild) {
      hints.removeChild(hints.firstChild)
    }
  });
};
