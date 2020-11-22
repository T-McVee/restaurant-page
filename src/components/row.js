import { renderCol } from './helpers/renderElements'

const _camelToKebabCase = ((camel) => {
  let kebabCase = camel;
  let lowercase = camel.split(/[A-Z]/g);
  let letter = camel.match(/[A-Z]/g);
  if (letter) {
    for (let i = 0; i < letter.length; i++) {
      letter[i] += lowercase[i + 1];
      lowercase[i + 1] = letter;
    }
    kebabCase = lowercase.join('-').toLowerCase();
  }
  return kebabCase;
});

const row = ((rowContent, rowName) => {
  const columns = Object.keys(rowContent);
  const row = document.createElement('div');
  row.classList.add(_camelToKebabCase(rowName));
  row.classList.add('row');
  columns.forEach(col => {
    row.appendChild(renderCol(rowContent[col]));
  });

  return row;
});

export { row };