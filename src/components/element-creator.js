export const elementCreator = (tagName, className, innerText, parent, idTitle) => {
  const newElement = document.createElement(`${tagName}`);
  newElement.classList.add(`${className}`);
  newElement.innerHTML = `${innerText}`;
  newElement.id = idTitle;
  parent.append(newElement);
};
