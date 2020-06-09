import { hints, wrapper, levelSelection } from '../constants';

export const buttonHandler = (btnId, pageCreator) => {
  const selectedButton = document.getElementById(btnId);
  selectedButton.addEventListener('click', () => {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    while (hints.firstChild) {
      hints.removeChild(hints.firstChild);
    }

    while (levelSelection.firstChild) {
      levelSelection.removeChild(levelSelection.firstChild);
    }
    pageCreator();
  });
};
