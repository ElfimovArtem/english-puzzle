import { levelSelection } from '../constants';

export const elementCreator = (tagName, className, innerText, parent, idTitle) => {
  const newElement = document.createElement(`${tagName}`);
  newElement.classList.add(`${className}`);
  newElement.innerHTML = `${innerText}`;
  newElement.id = idTitle;
  parent.append(newElement);
};

export const levelFormCreator = (labelText, max) => {
  const levelLabel = document.createElement('label');
  const levelLabelText = document.createElement('span');
  levelLabelText.innerHTML = labelText;
  const levelLabelInput = document.createElement('input');
  levelLabelInput.setAttribute('type', 'number');
  levelLabelInput.setAttribute('min', '1');
  levelLabelInput.setAttribute('max', max);
  levelLabelInput.setAttribute('value', '1');
  levelLabel.append(levelLabelText);
  levelLabel.append(levelLabelInput);
  levelSelection.append(levelLabel);
};
