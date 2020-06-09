import { hints } from '../constants';

export const hintButtonCreator = (btnClassName, iconClassName, id) => {
  const newHintButton = document.createElement('div');
  newHintButton.classList.add(btnClassName);
  newHintButton.classList.add('hint-button');
  newHintButton.id = id;
  const hintButtonIcon = document.createElement('i');
  hintButtonIcon.classList.add('fa');
  hintButtonIcon.classList.add(iconClassName);
  newHintButton.append(hintButtonIcon);
  hints.append(newHintButton);
};
