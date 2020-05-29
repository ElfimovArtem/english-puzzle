export const elementCreator = (tagName, className, innerText, parent, idTitle) => {
  const newElement = document.createElement(`${tagName}`);
  newElement.classList.add(`${className}`);
  newElement.innerHTML = `${innerText}`;
  newElement.id = idTitle;
  parent.append(newElement);
};

export const levelFormCreator = () => {
  const levelLabel = document.createElement('label');
  const levelLabelText = document.createElement('span');
  levelLabelText.innerHTML = 'Level';
  const levelLabelInput = document.createElement('input');
  levelLabelInput.setAttribute('')
};
