import { hints } from '../constants';

export const hintButtonCreator = (btnClassName, iconClassName) => {
  const newHintButton = document.createElement('div');
  newHintButton.classList.add(btnClassName);
  newHintButton.classList.add('hint-button');
  const hintButtonIcon = document.createElement('i');
  hintButtonIcon.classList.add('fa');
  hintButtonIcon.classList.add(iconClassName);
  newHintButton.append(hintButtonIcon);
  hints.append(newHintButton);
};
